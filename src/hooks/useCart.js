import { useContext } from 'react';

import CartContext from '../ContextProviders/CartContext';


export const useCart = () => {
  return useContext(CartContext);
};
