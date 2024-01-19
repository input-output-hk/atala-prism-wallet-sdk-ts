import React, {
  ReactElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyledTooltip, StyledTooltipWrapper } from './index.style';
import Typography from '../typography';
import { removeRef } from '../../utils';

/*
 * @todo:
 *   - implement tooltip positions 'top-left' | 'top-right' | 'left' | 'right'
 *   - implement tooltip with arrow
 * */
type TooltipProps = {
  open: boolean;
  content: string;
  children: ReactElement | string;
  position: 'top' | 'bottom';
};

const boundRectInitialState = {
  width: 0,
  x: 0,
  top: 0,
  height: 0,
  left: 0,
  bottom: 0,
  y: 0,
  right: 0,
};

type TooltipPosition = {
  left: number;
  right: number;
  bottom: number;
  top: number;
};

export default function Tooltip({ position, open, content, children }: TooltipProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [tooltipBoundRect, setTooltipBoundRect] = useState<Omit<DOMRect, 'toJSON'>>(
    removeRef(boundRectInitialState),
  );
  const [wrapperBoundRect, setWrapperBoundRect] = useState<Omit<DOMRect, 'toJSON'>>(
    removeRef(boundRectInitialState),
  );
  const tooltipPosition = useMemo<TooltipPosition>(() => {
    switch (position) {
      case 'top':
        return {
          top: wrapperBoundRect.top - tooltipBoundRect.height,
          left: wrapperBoundRect.left - tooltipBoundRect.width / 2 + wrapperBoundRect.width / 2,
          bottom: 0,
          right: 0,
        };
      case 'bottom':
        return {
          top: 0,
          left: wrapperBoundRect.left - wrapperBoundRect.width / 2,
          bottom: wrapperBoundRect.bottom - wrapperBoundRect.height,
          right: 0,
        };
      default:
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
    }
  }, [position, tooltipBoundRect, wrapperBoundRect, tooltipRef, wrapperRef]);
  const handleResize = useCallback(() => {
    wrapperRef.current && setWrapperBoundRect(wrapperRef.current.getBoundingClientRect());
    tooltipRef.current && setTooltipBoundRect(tooltipRef.current.getBoundingClientRect());
  }, [wrapperRef, tooltipRef]);

  useLayoutEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 10);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef, tooltipRef]);

  return (
    <StyledTooltipWrapper ref={wrapperRef}>
      <StyledTooltip
        style={{ ...tooltipPosition, pointerEvents: open ? 'all' : 'none' }}
        ref={tooltipRef}
        initial={{ opacity: open ? 1 : 0 }}
        animate={{ opacity: open ? 1 : 0 }}
      >
        <Typography type="text" $color="base" $tint="white">
          {content}
        </Typography>
      </StyledTooltip>
      {children}
    </StyledTooltipWrapper>
  );
}
