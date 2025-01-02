import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services,setServices ] = useState([]);
    const authorizationToken=`Bearer ${token}`;
    const API=import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

   

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }, 
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('user-data', data.userData);
                setUser(data.userData);
                setIsLoading(false);
                } else {
                    console.error("Error fetching user data");
                    setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
        //  finally {
        //     setIsLoading(false);
        // }
    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };
    const getServices=async()=>{
        try {
          const response=await fetch(`${API}/api/data/service`,{
            method:"GET",
          });
          if(response.ok){
            const services=await response.json();
            // console.log(data.msg);
            console.log(services.msg);
            setServices(services.data);
          }
        } catch (error) {
          console.log(`service error ${error}`)
        //   console.log(error)
        }
    
      }

    useEffect(() => {
        
            getServices();
            userAuthentication();
        
    }, []); // Added dependency array to run the effect when the token changes

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user,services,authorizationToken,isLoading,API}}>
        {/* <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, isLoading ,services,authorizationToken}}> */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
