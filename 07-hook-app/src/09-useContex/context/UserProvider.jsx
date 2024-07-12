import { UserContext } from "./UserContext";

const user = {
  name: "luciano",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
