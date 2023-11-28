import styled from 'styled-components';
import colors from '../../styles/colors';

export const NotificationBannerSuccess = styled.div<{ $visible: boolean }>`
  position: relative;
  width: 100%;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  background-color: ${colors.base.white};
  overflow: hidden;
  z-index: 100;
  pointer-events: all;
  margin-bottom: 1rem;
`;

export const NotificationsWrapper = styled.div`
  position: absolute;
  max-width: 432px;
  top: 22px;
  right: 32px;
  pointer-events: none;
`;

export const NotificationBannerContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 4rem;

  img {
    padding: 1rem;

    &.close {
      cursor: pointer;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${colors.gray['900']};
  }
`;
