import { BadgeWrapper, BadgeWrapperProps } from './index.style';
import Icon, { IconType } from '../icon';
import Typography from '../typography';

export type BadgeProps = {
  text: string;
  icon?: IconType;
  isLoading?: boolean;
} & BadgeWrapperProps;
export default function Badge({ text, icon, $kind, isLoading = false }: BadgeProps) {
  return (
    <BadgeWrapper $kind={isLoading ? 'gray' : $kind}>
      {icon && <Icon name={icon ?? 'dot'} size={8} isLoading={isLoading} />}
      <Typography
        type="text"
        $size="xs"
        $color={isLoading ? 'gray' : $kind}
        $isLoading={isLoading}
        $tint="700"
        $weight="medium"
      >
        {text}
      </Typography>
    </BadgeWrapper>
  );
}
