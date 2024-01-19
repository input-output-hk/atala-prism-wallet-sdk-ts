import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../styles/colors';
import getSize from '../../utils';

export const StyledTooltipWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

export const StyledTooltip = styled(motion.div)`
  margin: 0;
  display: inline;
  padding: ${getSize(12)};
  position: fixed;
  height: fit-content;
  width: fit-content;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  background-color: ${colors.gray['900']};
`;
