import {useMemo, useRef} from 'react';
import {
  SidebarInnerScroll,
  SideNavigationCollectionItem,
  SideNavigationCollectionItemContent,
  SideNavigationCollectionTitleBox,
  StyledSideNavigation,
  StyledSideNavigationHeader,
} from './index.style';
import Badge, {BadgeProps} from '../badge';
import ButtonLink from '../button-link';
import {Paragraph} from '../typography/index.style';
import {makeRandomChars} from '../../utils';
import Typography from '../typography';
import NotFound, {NotFoundProps} from '../not-found';

export type SideNavigationCollectionItemProps = {
  name: string;
  description?: string;
  linkTo: string;
  badge?: BadgeProps;
  isLoading?: boolean;
};

export type SideNavigationScrollProps = {
  name: string;
  isLoading?: boolean;
  notFound: NotFoundProps;
  loadingCollectionItemCount?: number;
  collection: SideNavigationCollectionItemProps[];
};

export type SideNavigationProps = {
  createButtonLink: string;
  createButtonText: string;
} & SideNavigationScrollProps;

export function SideNavigationCollectionView({
                                               collection,
                                               notFound,
                                               isLoading,
                                               loadingCollectionItemCount = 5,
                                             }: SideNavigationScrollProps) {
  const data = useMemo(
      () =>
          isLoading
              ? Array<SideNavigationCollectionItemProps>(loadingCollectionItemCount).fill({
                badge: {
                  text: makeRandomChars(5),
                  $kind: 'gray',
                  icon: 'dot',
                },
                name: makeRandomChars(5),
              } as SideNavigationCollectionItemProps)
              : collection,
      [isLoading, collection],
  );

  return (
      <SidebarInnerScroll>
        {data.length > 0 ? (
            data.map((item, index) => (
                <SideNavigationCollectionItem
                    key={index}
                    to={item.linkTo}
                    className={isLoading || item.isLoading ? 'is-loading' : ''}
                >
                  <SideNavigationCollectionItemContent>
                    <Typography
                        className="side-navigation-content-title"
                        type="text"
                        $weight="semibold"
                        $color="gray"
                        $tint="900"
                        $size="xs"
                        $isLoading={isLoading || item.isLoading}
                    >
                      {item.name}
                    </Typography>
                    {item.description && <p>{item.description}</p>}
                  </SideNavigationCollectionItemContent>
                  {item.badge && (
                      <Badge
                          $kind={item.badge.$kind}
                          isLoading={isLoading || item.isLoading}
                          text={item.badge.text}
                          icon={item.badge.icon ?? 'dot'}
                      />
                  )}
                </SideNavigationCollectionItem>
            ))
        ) : (
            <NotFound {...notFound} />
        )}
      </SidebarInnerScroll>
  );
}

export default function SideNavigation(props: SideNavigationProps) {
  const ref = useRef<HTMLElement>(null);
  return (
      <StyledSideNavigation ref={ref}>
        <StyledSideNavigationHeader>
          <ButtonLink
              $block={true}
              size="lg"
              $variant="dotted-outlined-primary"
              iconLeading="plus"
              to={props.createButtonLink}
              text={props.createButtonText}
          />
        </StyledSideNavigationHeader>
        <SideNavigationCollectionTitleBox>
          <Paragraph $size="xs" $weight="medium" $color="gray" $tint="600">
            {props.name}
          </Paragraph>
        </SideNavigationCollectionTitleBox>
        <SideNavigationCollectionView
            notFound={props.notFound}
            loadingCollectionItemCount={props.loadingCollectionItemCount}
            collection={props.collection}
            isLoading={props.isLoading}
            name={props.name}
        />
      </StyledSideNavigation>
  );
}
