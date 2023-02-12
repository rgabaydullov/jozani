import { getCssVar } from '@jozani/uikit';
import styled from 'styled-components';
import { getCheckPointColor } from './helpers';
import { IChallengeCreateCheckPointProps } from './types';

type CheckPointItemProps = Pick<IChallengeCreateCheckPointProps,
  'isActive' |
  'type'
>;

export const ChallengeCreateChipWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const ChallengeCreateChip = styled.div`
  display: flex;
  align-items: center;
  margin: .8rem .8rem 0 0;
  padding: 0 1.6rem;
  height: 3.2rem;
  font-size: ${getCssVar('font', 'common')};
  color: ${getCssVar('black', 100)};
  text-shadow: 0 0 3px ${getCssVar('black', 20)};
  border: 1px solid ${({ isActive = false }: { isActive?: boolean; }) => (isActive
    ? `${getCssVar('green', 500)}`
    : `${getCssVar('grey', 200)}`)};
  border-radius: 1.6rem;
  box-shadow: 0 0 9px ${({ isActive = false }) => (isActive
    ? getCssVar('green', 300)
    : getCssVar('black', 20))};
  transition: all .27s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: ${getCssVar('green', 500)};
    box-shadow: 0 0 9px ${getCssVar('green', 300)};
  }
`;

export const ChallengeCreateCheckPointWrapper = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const ChallengeCreateCheckPointItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.6rem;
  font-size: ${getCssVar('font', 'common')};
  font-weight: ${getCssVar('font', 'semi-bold')};
  counter-increment: inst;

  &:before {
    content: counter(inst);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .8rem;
    width: 2.4rem;
    height: 2.4rem;
    background: ${({ type }: CheckPointItemProps) => getCheckPointColor(type as unknown)};
    border: 0 solid transparent;
    border-radius: 50%;
    font-size: ${getCssVar('font', 'small')};
    font-weight: ${getCssVar('font', 'semi-bold')};
    color: ${({ isActive = false, type }: CheckPointItemProps) => (isActive || !!type
      ? getCssVar('white', 100)
      : getCssVar('grey', 500))};
  }
`;

export const ChallengeCreateCheckPointItemContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: .4rem 0 0 3.2rem;
  width: 100%;
  font-weight: ${getCssVar('font', 'regular')};
`;
