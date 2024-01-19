import ButtonLink, {ButtonAsLinkProps} from '../button-link';
import {NotFoundDialog, NotFoundWrapper} from './index.style';
import {Paragraph} from '../typography/index.style';

export type NotFoundProps = {
  title: string;
  description: string;
  cta?: Omit<ButtonAsLinkProps, '$variant' | 'iconTrailing'>;
};
export default function NotFound({title, description, cta}: NotFoundProps) {
  return (
      <NotFoundWrapper>
        <NotFoundDialog>
          <img className="graphic" src="/graphics/cloud.svg" alt="Not found cloud"/>
          <Paragraph $size="xl" $weight="bold" $color="gray" $tint="900">
            {title}
          </Paragraph>
          <Paragraph $size="xs" $weight="bold" $color="gray" $tint="600">
            {description}
          </Paragraph>
          {cta && <ButtonLink to={cta.to} text={cta.text} iconTrailing="plus" $variant="primary" size="sm"/>}
        </NotFoundDialog>
      </NotFoundWrapper>
  );
}
