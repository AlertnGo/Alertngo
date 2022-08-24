import { createContext } from 'react';
const noop = () => { };
const user = {
    user: "sdsd",
    setUser: noop,
    refreshUser: noop,
};
const userContext = createContext(user);
export default userContext;