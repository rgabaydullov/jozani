import {
  Col, Row, Typography,
} from '@jozani/uikit';
import React, { useCallback, useState } from 'react';
import {
  ChallengeCreate,
  ChallengeCreateCheckPoint,
  ChallengeCreateCheckPointWrapper,
} from '../../widgets';
import { CHALLENGE_CREATE_CHECKPOINTS } from './constants';

const ChallengePage: React.FC = () => {

  const [activeCheckPoint, setActiveCheckpoint] = useState(0);

  const next = useCallback((values: unknown) => {
    console.log('VALUES', values);

    setActiveCheckpoint(activeCheckPoint + 1);
  }, [activeCheckPoint]);

  return (
    <>
      <div className="mt-6" />

      <Row spacing={3}>
        <Col mobile={12} md={4}>
          <div className="mt-4" />
          <Typography variant="body2">
            Follow prompts so your friend can understand you clearly
          </Typography>

          <ChallengeCreateCheckPointWrapper>
            {CHALLENGE_CREATE_CHECKPOINTS.map(([title, text], index) => (
              <ChallengeCreateCheckPoint
                key={`checkpoint-${index}`}
                isActive={activeCheckPoint === index}
                type={(activeCheckPoint === index && 'progress') || (activeCheckPoint > index && 'success') || null}
                title={title}
              >
                {text}
              </ChallengeCreateCheckPoint>
            ))}
          </ChallengeCreateCheckPointWrapper>
        </Col>

        <Col mobile={12} md={6}>
          <ChallengeCreate
            activeStep={activeCheckPoint}
            next={next}
          />
        </Col>
      </Row>

    </>
  );
};

export default React.memo(ChallengePage);
