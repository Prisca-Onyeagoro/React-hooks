import { Authcontext } from '../Components/context/AuthContext';
import { useContext } from 'react';

export const UseAuthContext = () => {
  const context = useContext(Authcontext);

  if (!context) {
    throw Error('useAuthContext must be used inside a Auth Provider');
  }

  return context;
};
