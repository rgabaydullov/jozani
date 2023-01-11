import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '.';
import Col from '../col';
import Row from '../row';
import Typography from '.';
import { FONTS, getSizeUnit } from 'libs/uikit/src/lib';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: getSizeUnit(16) }}>
        Typography
      </Typography>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h1">
            Header 1
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h1}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h2">
            Header 2
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h2}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h3">
            Header 3
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h3}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h4">
            Header 4
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h4}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h5">
            Header 5
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h5}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="h6">
            Header 6
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.h6}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="body1">
            Body 1
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.common}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="body2">
            Body 2
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.large}
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginBottom: getSizeUnit(16) }}>
        <Col xs="auto">
          <Typography variant="caption">
            Caption
          </Typography>

          <Typography variant="body1">
            <Typography color="text.secondary">
              Font size:
            </Typography>
            {FONTS.small}
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
};
