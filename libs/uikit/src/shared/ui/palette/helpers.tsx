import { ColorBlock, ColorTextBlock } from './shared/ui';

export const mapColors = (namespace: string) => ([level, color]: [string, string]) => (
  <ColorBlock style={{ backgroundColor: color }}>
    <ColorTextBlock>
      {`${namespace} ${level}`}

      <div>
        {color}
      </div>
    </ColorTextBlock>
  </ColorBlock>
);
