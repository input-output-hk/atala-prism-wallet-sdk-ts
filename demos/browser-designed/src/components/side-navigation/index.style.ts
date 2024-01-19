import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import colors from '../../styles/colors';
import getSize from '../../utils';

export const StyledSideNavigation = styled.aside`
  margin: 0;
  background-color: ${colors.base.white};
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.gray['200']};
  position: relative;
  overflow: hidden;
  width: inherit;
  height: 100%;
`;

export const StyledSideNavigationHeader = styled.header`
  margin: 0;
  padding: ${getSize(20)} ${getSize(30)};
  background-color: ${colors.base.white};
`;

export const SidebarInnerScroll = styled.div`
  margin: 0;
  flex: 1;
  overflow: auto;
  padding-bottom: 15rem;
  word-break: break-word;
  position: relative;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.gray['200']};
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${colors.gray['400']};
    }
  }
`;

export const WatermarkWrapper = styled.div`
  color: ${colors.gray['400']};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: inherit;
  align-items: center;
  padding-bottom: ${getSize(25)};
  height: 130px;
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -41.92%, #ffffff 37.37%);

  h3 {
    margin-bottom: 0;
    color: inherit;
    width: 100%;
    font-size: 17px;
    font-weight: 600;
    display: block;
    text-align: center;
  }

  a {
    color: inherit;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
  }
`;

export const WatermarkTAndP = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

export const SideNavigationCollectionTitleBox = styled.div`
  padding: 0.8125rem 2rem;
  background-color: ${colors.gray['50']};
  font-size: 12px;
  border-bottom: 1px solid ${colors.gray['200']};
`;

// @ts-ignore
export const SideNavigationCollectionItem = styled(NavLink)`
  cursor: pointer;
  padding: 2rem ${getSize(11)} 2rem 2rem;
  width: 100%;
  border-bottom: 1px solid ${colors.gray['200']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  transition: background-color ease-in-out 0.3s;

  &.is-loading {
    background-color: ${colors.gray['25']};
    cursor: progress;
    pointer-events: visible;

    p {
      color: transparent;
      background-color: ${colors.gray['200']};
    }
  }

  .side-navigation-content-title {
    max-width: 180px;
  }

  &.active:not(.is-loading) {
    background-color: ${colors.gray['25']};

    .side-navigation-content-title {
      color: ${colors.primary['400']};
    }
  }

  &:not(.active):not(.is-loading) {
    background-color: ${colors.base.white};

    .side-navigation-content-title {
      color: ${colors.base.black};
    }
  }

  &:hover:not(.is-loading) {
    background-color: ${colors.gray['25']};

    .side-navigation-content-title {
      color: ${colors.primary['400']};
    }
  }

  .side-navigation-content-title {
    transition: color ease-in-out 0.3s;
    font-weight: 500;
    font-size: 14px;
    margin: 0;
  }
`;

export const SideNavigationCollectionItemContent = styled.div``;
