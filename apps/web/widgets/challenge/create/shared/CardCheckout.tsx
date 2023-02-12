import React from 'react';
import {
  Card,
  Col,
  Divider,
  getCssVar,
  IconCopy,
  Row,
  Typography,
} from '@jozani/uikit';
import { IChallengeCreateCard } from './types';

const CardCheckout: React.FC<IChallengeCreateCard> = ({
  isActive = false,
}) => {
  return (
    <Card
      title={(
        <Typography variant="h6">
          Checkout
        </Typography>
      )}
    >
      <Row spacing={6}>
        <Col>
          <Typography variant="body1" color="secondary">
            You send
          </Typography>
          <Typography variant="body2">
            12 USDT
          </Typography>
        </Col>
      </Row>

      <div className="mt-4" />

      <Divider />

      <div className="mt-4" />

      <Row spacing={6}>
        <Col mobile={12} md={6}>
          <Typography variant="body1" color="secondary">
            Service fee
          </Typography>
          <Typography variant="body2">
            5 USDT
          </Typography>
          <Typography variant="caption" color="secondary">
            The service fee is already included in the displayed amount you’ll get
          </Typography>
        </Col>

        <Col mobile={12} md={6}>
          <Typography variant="body1" color="secondary">
            Network fee
          </Typography>
          <Typography variant="body2">
            1 USDT
          </Typography>
          <Typography variant="caption" color="secondary">
            The network fee is already included in the displayed amount you’ll get
          </Typography>
        </Col>
      </Row>

      <div className="mt-4" />

      <Divider />

      <div className="mt-4" />

      <Row spacing={6}>
        <Col>
          <Typography variant="body1" color="secondary">
            Recipient address
          </Typography>
          <Typography variant="body2">
            TAUFkCDWSRgQ6YAYQRVjyqdpzn7BdGuS5F
            <i style={{ display: 'inline-block', marginLeft: '.8rem' }}>
              <IconCopy fill={getCssVar('grey', 300)} />
            </i>
          </Typography>
          <Typography variant="body1" color={getCssVar('purple', 500)}>
            TRC20
          </Typography>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(CardCheckout);
