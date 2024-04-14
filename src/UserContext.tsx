import { createContext, useContext } from "react";
import { Role } from "./UserRole";

interface User {
  role: Role;
}

interface UserContextProps {
  user?: User;
}

const UserContext = createContext<UserContextProps>({ user: undefined });

export const useUser = () => useContext(UserContext);

export default UserContext;
