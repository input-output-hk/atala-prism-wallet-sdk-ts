import styled from 'styled-components';
import {motion} from 'framer-motion';
import colors from '../../styles/colors';

export const DropdownWrapperUI = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  font-size: 15px;
  cursor: pointer;
  position: relative;
`;

export const DropdownHeaderUI = styled.div<{ $active: boolean; $hasSelected: boolean }>`
  margin: 0;
  padding: 0.5rem 1rem;
  pointer-events: all;
  border-radius: 8px;
  font-size: inherit;
  color: ${({$hasSelected}) => (!$hasSelected ? colors.gray['400'] : colors.gray['900'])};
  border: 1px solid ${({$active}) => ($active ? colors.primary['500'] : colors.gray['300'])};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .selected {
    display: flex;
    gap: 1rem;
  }

  .suffix {
    color: ${colors.gray['300']};
  }

  svg {
    transition: transform ease-in-out 250ms;
    transform: rotate(${({$active}) => ($active ? '180deg' : '0deg')});
  }
`;

export const DropdownContentUI = styled(motion.div)`
  position: absolute;
  display: grid;
  overflow: hidden;
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 8px;
  z-index: 10;
  padding: 0.25rem;
  background-color: ${colors.base.white};
  border: 1px solid ${colors.gray['200']};
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;

export const DropdownContentItemUI = styled.div<{ $active: boolean }>`
  padding: 0.9rem;
  border-radius: 8px;
  font-size: inherit;
  color: ${colors.gray['900']};
  background-color: ${({$active}) => ($active ? colors.gray['50'] : colors.base.white)};

  &:hover {
    background-color: ${colors.gray['50']};
  }
`;
