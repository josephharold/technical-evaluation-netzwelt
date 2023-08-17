import useForm from "../utils/useForm";
import { useEffect } from "react";
import { useAuth } from "../utils/authContext";
import { useNavigate } from "react-router-dom";
const Login = ()=>{

	const {formData, handleInputChange} = useForm({
		'username': '',
		'password': ''
	})

	const navigate = useNavigate('/homepage');

	const {login, authToken} = useAuth();


	const handleSubmit = (e)=>{
		e.preventDefault();

		login(formData);
	}

	return(
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleInputChange}
					className="border border-gray-200 p-2 rounded-lg"
					name="username"
					placeholder="username"
				/>
				<input
					onChange={handleInputChange}
					className="border border-gray-200 p-2 rounded-lg"
					name="password"
					type="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;