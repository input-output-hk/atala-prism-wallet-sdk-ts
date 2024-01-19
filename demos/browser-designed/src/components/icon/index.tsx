import IcomoonReact from 'icomoon-react';
import { ForwardedRef, forwardRef } from 'react';
import selection from './selection.json';
import { Color, getColor, Tints } from '../../styles/colors';

export type IconType =
  | 'check'
  | 'chevron-down'
  | 'chevron-up'
  | 'copy'
  | 'eye'
  | 'eye-crossed'
  | 'paste'
  | 'pen'
  | 'plus'
  | 'reorder'
  | 'search'
  | 'times'
  | 'trash'
  | 'user'
  | 'dot'
  | 'link-external'
  | 'settings'
  | 'notification-message'
  | 'arrow-left';
type IconSize = 8 | 20 | 32 | 60;

export type IconProps = {
  name: IconType;
  size: IconSize;
  color?: Color;
  tint?: Tints;
  isLoading?: boolean;
};

function Icon(props: IconProps, ref: ForwardedRef<typeof IcomoonReact>) {
  return (
    <IcomoonReact
      ref={ref}
      color={props.color && props.tint ? getColor({ $color: props.color, $tint: props.tint }) : ''}
      iconSet={selection}
      icon={props.isLoading ? 'dot' : props.name}
      size={props.size}
    />
  );
}

const forward = forwardRef(Icon);
export default forward;
