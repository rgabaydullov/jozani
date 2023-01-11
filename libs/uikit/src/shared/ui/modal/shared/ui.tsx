import styled from 'styled-components';
import { Modal as MuiModal } from '@mui/material';
import { getCssVar } from '../../../../lib';

export const StyledModal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const ModalContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3.2rem;
  background: ${getCssVar('white', 100)};
  border: 0 solid transparent;
  border-radius: 1.6rem;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: -3.2rem;
  right: -1.6rem;
  background: transparent;
`;

export const ModalTitle = styled.h4`
  font-size: ${getCssVar('font', 'h4')};
  font-weight: ${getCssVar('font', 'bold')};
`;

export const ModalContent = styled.form`
  margin-bottom: 1.6rem;
  font-size: ${getCssVar('font', 'common')};
`;

export const ModalFooter = styled.div`
  margin-top: 5.6rem;

  button {
    width: 150px;
  }
`;

export const StorySubstrate = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
