
import { useContext } from 'react';

import UserContext from '../ContextProviders/UserContext';

export const useUserContext = () => {
  return useContext(UserContext);
};