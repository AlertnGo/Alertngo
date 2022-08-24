import { createContext } from 'react';
const noop = () => { };
const defaultContext = {
    user: "",
    setUser: noop,
    refreshUser: noop,
};
const userContext = createContext(defaultContext);
export default userContext;