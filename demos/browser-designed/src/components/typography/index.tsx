import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { DisplayStyleProps, Paragraph, StyledHeading, TextStyleProps } from './index.style';

export type DisplaySize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TextSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type Weight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyProps = {
  className?: string;
  type: 'display' | 'text';
  children: string | ReactElement | ReactElement[];
} & (Partial<DisplayStyleProps> | Partial<TextStyleProps>);

function Typography(
  {
    type = 'display',
    $size = 'sm',
    $weight,
    $color,
    $tint,
    children,
    className,
    $isLoading,
  }: TypographyProps,
  ref: ForwardedRef<HTMLHeadingElement | HTMLParagraphElement>,
) {
  const h = useMemo(() => {
    let Element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    switch ($size) {
      case '2xl':
        Element = 'h1';
        break;
      case 'xl':
        Element = 'h2';
        break;
      case 'lg':
        Element = 'h3';
        break;
      case 'md':
        Element = 'h4';
        break;
      case 'sm':
        Element = 'h5';
        break;
      case 'xs':
        Element = 'h6';
        break;
      default:
        Element = 'h4'; // MD
    }
    return Element;
  }, [$size]);

  if (type === 'display') {
    return (
      <StyledHeading
        $size={$size}
        as={h}
        $weight={$weight ?? 'semibold'}
        ref={ref}
        className={className}
        $color={$color}
        $tint={$tint}
        $isLoading={$isLoading}
      >
        {children}
      </StyledHeading>
    );
  }
  return (
    <Paragraph
      $size={$size as TextSize}
      $weight={$weight ?? 'regular'}
      className={className}
      $color={$color}
      $tint={$tint}
      $isLoading={$isLoading}
    >
      {children}
    </Paragraph>
  );
}

const forwarded = forwardRef(Typography);

export default forwarded;
