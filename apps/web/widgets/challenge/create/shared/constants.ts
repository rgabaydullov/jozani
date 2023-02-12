import * as Yup from 'yup';
import { Category } from '../../../icons';

export const VALIDATION_SCHEME = Yup.object().shape({
  goal: Yup.string()
    .min(10, 'Minimum 10 symbols')
    .required('Goal is required'),
  amount: Yup.number()
    .positive()
    .moreThan(5, '5 USDT is a minimum amount')
    .required('Please, enter the amount'),
  category: Yup.mixed()
    .oneOf(Object.keys(Category)),
});
