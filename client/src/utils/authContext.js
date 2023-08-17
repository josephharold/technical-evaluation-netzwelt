import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
	
	const navigate = useNavigate();

	const location = useLocation();

	const [authToken, setAuthToken] = useState(()=>
		// if there is a token stored, parse the token then return
		localStorage.getItem('authtoken')
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
				url: 'http://localhost:8000/api/login',
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

	// const logout = ()=>{
	// 	localStorage.removeItem('authToken');
	// 	setAuthToken(null);
	// }

	useEffect(() => {
		if(!authToken){
			navigate('/login');
			return
		}

		if(location.pathname ==='/login'){
			// if user visits /login page while authenticated, navigate back to homepage
			navigate('/homepage');
			return;
		}
	}, [authToken]);


	return(
		<AuthContext.Provider value={{login, authToken}}>
			{children}
		</AuthContext.Provider>
	)
}

// custom hook so that we won't have to call useContext again and again;
const useAuth = ()=>{
	const {login, logout, authToken, setAuthToken} = useContext(AuthContext);

	return {login, logout, authToken, setAuthToken};
}

export default AuthProvider;
export { useAuth };