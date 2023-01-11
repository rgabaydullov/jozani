import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import Col from '../col';
import Row from '../row';
import Typography from '../typography';
import { getSizeUnit } from 'libs/uikit/src/lib';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: getSizeUnit(16) }}>
        Primary
      </Typography>

      <Row spacing={2} alignItems="flex-end">
        <Col xs="auto">
          <Button
            size="large"
            variant="contained"
          >
            L Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="medium"
            variant="contained"
          >
            M Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="small"
            variant="contained"
          >
            S Button
          </Button>
        </Col>
      </Row>

      <Typography variant="h5" style={{ marginTop: getSizeUnit(16), marginBottom: getSizeUnit(16) }}>
        Secondary
      </Typography>

      <Row spacing={2} alignItems="flex-end">
        <Col xs="auto">
          <Button
            size="large"
            variant="contained"
            color="secondary"
          >
            L Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="medium"
            variant="contained"
            color="secondary"
          >
            M Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="small"
            variant="contained"
            color="secondary"
          >
            S Button
          </Button>
        </Col>
      </Row>

      <Typography variant="h5" style={{ marginTop: getSizeUnit(16), marginBottom: getSizeUnit(16) }}>
        Text
      </Typography>

      <Row spacing={2} alignItems="flex-end">
        <Col xs="auto">
          <Button
            size="large"
            variant="text"
          >
            L Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="medium"
            variant="text"
          >
            M Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="small"
            variant="text"
          >
            S Button
          </Button>
        </Col>
      </Row>

      <Typography variant="h5" style={{ marginTop: getSizeUnit(16), marginBottom: getSizeUnit(16) }}>
        Text Secondary
      </Typography>

      <Row spacing={2} alignItems="flex-end">
        <Col xs="auto">
          <Button
            size="large"
            variant="text"
            color="secondary"
          >
            L Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="medium"
            variant="text"
            color="secondary"
          >
            M Button
          </Button>
        </Col>

        <Col xs="auto">
          <Button
            size="small"
            variant="text"
            color="secondary"
          >
            S Button
          </Button>
        </Col>
      </Row>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
};
