import { useState } from "react";

const useForm = (data)=>{
	const [formData, setFormData] = useState(data);

	const handleInputChange = (e)=>{
		setFormData({...formData, [e.target.name]: e.target.value})	
	}
	return {formData, handleInputChange};
}

export default useForm;