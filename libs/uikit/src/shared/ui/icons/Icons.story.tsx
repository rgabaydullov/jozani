import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Icons from '.';
import Col from '../col';
import Row from '../row';
import Typography from '../typography';
import { getSizeUnit } from 'libs/uikit/src/lib';
import { chunk } from 'lodash';

const BaseIcon = () => (<div />);

export default {
  title: 'Icons',
  component: BaseIcon,
} as ComponentMeta<typeof BaseIcon>;



const Template: ComponentStory<typeof BaseIcon> = (args) => {

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: getSizeUnit(16) }}>
        Icons
      </Typography>

      {chunk(Object.entries(Icons).map(([key, Icon]) => (
        <Col xs>
          <Typography variant="body2" width={200}>
            {`<${key} />`}
          </Typography>

          <div style={{
            marginTop: getSizeUnit(8),
            marginBottom: getSizeUnit(8),
          }}>
            <Icon
              width={48}
              height={48}
            />
          </div>
        </Col>
      )), 3).map((val) => {
        console.log('val', val);

        return (
          <Row spacing={2}>
            {val}
          </Row>
        );
      })}
    </>
  );
};

console.log('Icons', Object.keys(Icons));

export const Primary = Template.bind({});

Primary.args = {
};
