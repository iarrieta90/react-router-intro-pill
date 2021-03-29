import { createContext } from "react";

const AuthContext = createContext({
    authState: {},
    login: () => {},
    logout: () => {},
});

export default AuthContext;