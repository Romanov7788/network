import {createContext} from "react";
// import {useAuth} from "./useAuth"

export const AuthContext = createContext();

// export const AuthProvider = ({ children })  => {
//     const [user, setUser] = useState(null)
//     console.log("AuthProvider", user)

//     return (<AuthContext.Provider value = {{user, setUser}}>
//         {children}
//         </AuthContext.Provider>)
// };