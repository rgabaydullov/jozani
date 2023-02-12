import React from 'react';
import {
  Card,
  FieldArray,
  Typography,
} from '@jozani/uikit';
import { Category } from '../../../icons';
import { IChallengeCreateCard } from './types';
import { ChallengeCreateChip, ChallengeCreateChipWrapper } from './ui';

const CardInitiative: React.FC<IChallengeCreateCard> = ({
  isActive = false,
}) => {
  return (
    <Card
      title={(
        <Typography variant="h6">
          Challenge Initiative
          <Typography
            variant="caption"
            color="secondary"
            marginLeft={1}
          >
            Not required
          </Typography>
        </Typography>
      )}
    >
      <Typography variant="body1" color="secondary">
        Initiative is the statement that is intended to solve some kind of problem
      </Typography>

      <div className="mt-6" />

      <ChallengeCreateChipWrapper>
        <FieldArray
          name="category"
          value={Category.Promise}
          values={Object.keys(Category)}
          renderValue={(category: string, onChange, isActive) => (
            <ChallengeCreateChip
              isActive={isActive}
              key={category}
              onClick={() => onChange(category)}
            >
              {category}
            </ChallengeCreateChip>
          )}
        />
      </ChallengeCreateChipWrapper>
    </Card>
  );
};

export default React.memo(CardInitiative);
