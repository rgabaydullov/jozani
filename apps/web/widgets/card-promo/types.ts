import { ICardProps, ITypographyProps } from '@jozani/uikit';

export interface ICardPromoProps extends ICardProps, Pick<ITypographyProps,
  'alignItems' |
  'justifyContent'
> {

}
