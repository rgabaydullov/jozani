import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getCssVar } from 'libs/uikit/src/lib';
import Modal, { StorySubstrate } from '.';
import Button from '../button';
import Info from '../icons/shared/Info';
import { IModalProps }  from './types';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: IModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StorySubstrate>
        <Button
          type="button"
          sx={{ m: 'auto' }}
          variant="contained"
          color="primary"
          onClick={(e) => {
            setOpen(true);
          }}
        >
          Открыть модалку
        </Button>
      </StorySubstrate>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  title: 'Заглавие модалки',
  children: (
    <div>Основной текст модалки может быть передан в виде html-кода</div>
  ),
  actionButtonProps: {children:'Принять', onClick: () => alert('Действие submit')},
  cancelButtonProps: {children: 'Отмена'},
};

export const WithCustomFooter = Template.bind({});

WithCustomFooter.args = {
  title: 'Заголовок',
  children: (
    <>
      <div>Основной текст модалки может быть передан в виде html-кода</div>
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          color: getCssVar('red', 500),
        }}
      >
        <Info fill={getCssVar('red', 500)} />
        Какая-то иконка
      </div>
    </>
  ),

};

export const WithoutFooter = Template.bind({});

WithoutFooter.args = {
  title: 'Заголовок',
  children: (
    <div>Основной текст модалки может быть передан в виде html-кода</div>
  ),
};

export const WithCancelButtonOnly = Template.bind({});

WithCancelButtonOnly.args = {
  title: 'Заголовок',
  children: (
    <div>Основной текст модалки может быть передан в виде html-кода</div>
  ),
  cancelButtonProps: {children: 'Отмена'},
};
