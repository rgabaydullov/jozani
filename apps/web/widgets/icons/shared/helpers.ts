import CategoryAnimal from './CategoryAnimal';
import CategoryBusiness from './CategoryBusiness';
import CategoryFolks from './CategoryFolks';
import CategoryGift from './CategoryGift';
import CategoryHealth from './CategoryHealth';
import CategoryHousing from './CategoryHousing';
import CategoryNature from './CategoryNature';
import CategoryNutrition from './CategoryNutrition';
import CategoryPray from './CategoryPray';
import CategoryPromise from './CategoryPromise';
import CategoryRest from './CategoryRest';
import CategoryScience from './CategoryScience';
import CategorySport from './CategorySport';
import { Category } from './types';

export const getCategoryIcon = (category: Category) => {
  console.log('Cate', category);
  switch (category) {
    case Category.Animal:
      return CategoryAnimal;
    case Category.Business:
      return CategoryBusiness;
    case Category.Folks:
      return CategoryFolks;
    case Category.Gift:
      return CategoryGift;
    case Category.Health:
      return CategoryHealth;
    case Category.Housing:
      return CategoryHousing;
    case Category.Nature:
      return CategoryNature;
    case Category.Nutrition:
      return CategoryNutrition;
    case Category.Pray:
      return CategoryPray;
    case Category.Promise:
      return CategoryPromise;
    case Category.Rest:
      return CategoryRest;
    case Category.Science:
      return CategoryScience;
    case Category.Sport:
      return CategorySport;
    default:
      return CategoryPromise;
  }
}
