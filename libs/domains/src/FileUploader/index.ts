/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/naming-convention */
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import ProgressBar from '@uppy/progress-bar';

class FileUploader {

  _response = '';
  _error = '';

  constructor(
    public service = new Uppy(),
  ) {}

  get error() {
    return this._error;
  }

  get response() {
    return JSON.parse(this._response);
  }

  set error(_error: string) {
    this._error = _error;
  }

  set response(_response: string) {
    this._response = _response;
  }

  init = (
    endpoint: string,
    fieldName = 'file',
    progressBarEl?: string | HTMLElement,
  ) => {
    if (this.service.getPlugin('XHRUpload')) {
      return;
    }

    this.service.use(XHRUpload, {
      formData: true,
      endpoint,
      fieldName,
      responseUrlFieldName: 'preview',
      getResponseData: (res) => {
        this.response = res;

        return this.response;
      },
      getResponseError: (err) => {
        this.error = err;

        return new Error(this.error);
      },
    });

    if (progressBarEl) {
      this.service.use(ProgressBar, {
        target: progressBarEl,
        hideAfterFinish: true,
      });
    }
  };

  abort = () => {
    this.service.cancelAll({ reason: 'unmount' });
    this.service.getFiles().forEach(file =>
      this.service.removeFile(file.id));
  };

  add = (source: string, file: File) => {
    const { name, type } = file;

    this.service.addFile({
      source,
      name,
      type,
      data: file,
    });
  };

  on = (event: string | any, cb: (data?: unknown) => void) => {
    this.service.on(event, cb);

    return this;
  };

  upload = () => new Promise((resolve, reject) => {
    this.service.upload()
      .then(({ failed, successful }) => {
        if (Array.isArray(failed) && failed.length >= 1) {
          reject(this.error);

          return;
        }

        if (Array.isArray(successful) && successful.length >= 1) {
          resolve(this.response);
        }

        this.error = '';
        this.response = '';
      })
      .catch(reject);
  });
}

export default FileUploader;
