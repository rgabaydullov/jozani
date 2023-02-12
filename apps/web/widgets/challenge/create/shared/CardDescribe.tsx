import React from 'react';
import {
  Button,
  Card,
  Field,
  FormSection,
  Typography,
} from '@jozani/uikit';
import { IChallengeCreateCard } from './types';

const CardDescribe: React.FC<IChallengeCreateCard> = ({
  isActive = false,
}) => {
  return (
    <Card
      title={(
        <Typography variant="h6">
          Describe the challenge
        </Typography>
      )}
      footer={(
        <>
          <Button
            fullWidth
            disabled={!isActive}
            type="submit"
            variant="contained"
          >
            Next step
          </Button>
        </>
      )}
    >
      {/* Goal */}
      <FormSection>
        <Field
          type="text"
          name="goal"
          placeholder="Goal"
        />

        <div className="mt-3" />

        <Typography variant="caption" color="secondary">
          Try to set the goal in short phrases
        </Typography>
      </FormSection>

      {/* Pledge amount */}
      <FormSection>
        <Field
          type="number"
          name="amount"
          placeholder="Pledge amount"
        />

        <div className="mt-3" />

        <Typography variant="caption" color="secondary">
          Pledge amount should be based on your own willing accordingly only
        </Typography>
      </FormSection>

    </Card>
  );
};

export default React.memo(CardDescribe);
