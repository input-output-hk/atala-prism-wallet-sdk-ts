import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledForm = styled.form`
  margin: 0;
  padding: 0;

  hr {
    margin: 1.5rem -1.5rem 1rem;
    border-color: ${colors.gray['300']};
    border-width: 0.5px;
  }
`;
