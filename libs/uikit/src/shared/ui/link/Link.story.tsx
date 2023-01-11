import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '.';
import Col from '../col';
import Row from '../row';
import Typography from '../typography';
import { getSizeUnit } from 'libs/uikit/src/lib';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: getSizeUnit(16) }}>
        Link
      </Typography>

      <Row spacing={2} alignItems="flex-end">
        <Col xs="auto">
          <Link>
            Link to somewhere
          </Link>
        </Col>
      </Row>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
};
