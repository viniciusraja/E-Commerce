import { PRODUCTS_LIST } from '../actions/types';
import burguersList from '../../data/burguersList.json';
import sideDishesList from '../../data/sideDishesList.json';
import drinksList from '../../data/drinksList.json';

const initialState = {
  productsList: [
    {
      id: 1,
      title: 'DACASA',
      subtitle: 'desliza, escolhe e clica!',
      products: [ ...burguersList ],
    },
    {
      id: 2,
      title: 'MAISÉMELHOR',
      subtitle: 'já escolheu seu hambúrguer? Acrescenta os acompanhamentos!',
      products:[...sideDishesList]  
    },
    {
      id: 3,
      title: 'PRAMOLHAR',
      subtitle:
        'já escolheu seu hambúrguer e os acompanhamentos? finaliza com a bebida! desliza, escolhe e clica!',
      products:[...drinksList]
      },
  ],
};

const getProductsList = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default getProductsList;
