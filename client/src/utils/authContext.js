import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

// a global wrapper to use, provides method such as login, logout( not included in this assessment)
// wrap this around the routes
const AuthProvider = ({children})=>{
	
	const navigate = useNavigate();


	const [authToken, setAuthToken] = useState(()=>
		// if there is a token stored, parse the token then return
		localStorage.getItem('authToken')
		?
		JSON.parse(localStorage.getItem('authToken'))
		:
		// else return null
		null
	);

	const login = async(credentials)=>{
		await axios(
			{
				// add hostname during development
				url: '/api/login',
				method: 'POST', 
				data: credentials
			}
		).then(
			res=>{
				// if success, then set auth token and store to local storage
				setAuthToken(res.data);
				localStorage.setItem('authToken', JSON.stringify(res.data));
			}
		).catch(
			err=>setAuthToken(null)
		);
	}

	useEffect(() => {
		// if authtoken is removed, redirect to login
		if(!authToken){
			navigate('/login');
			return
		}
		// else redirect to homepage
		navigate('/homepage');
		return;
	},[authToken]);
	



	return(
		<AuthContext.Provider value={{login, authToken}}>
			{children}
		</AuthContext.Provider>
	)
}

// custom hook so that we won't have to call useContext again and again;
// just use const {methodYouWantToUse} = useAuth();
const useAuth = ()=>{
	const {login, logout, authToken, setAuthToken} = useContext(AuthContext);

	return {login, logout, authToken, setAuthToken};
}

export default AuthProvider;
export { useAuth };