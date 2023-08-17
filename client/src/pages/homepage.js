import Tree from "../components/Tree";
import { useState, useEffect } from "react";
import axios from "axios";
const Homepage = ()=>{

	const [tree, setTree] = useState([]);	

	useEffect(() => {
		const fetchTrees = async()=>{
			await axios(
				{
					url: 'http://localhost:8000/api/tree',
					method: 'GET',
				}
			).then(
				res=>{
					console.log(res)
					setTree(res.data.data);
				}
			).catch(
				err=>console.log(err)
			);
		}
		fetchTrees();
	}, []);

	return(
		<div className="container grid grid-cols-12 mx-auto">
			<div className="col-span-12 md:col-span-4 border border-gray-200 rounded-lg h-full">
				<Tree data={tree}/>
			</div>
			<div className="col-span-12 md:col-span-8 p-8">
				<h1 className="text-2xl">Homepage</h1>
				<h2 className="">Netzwelt Technical Assessment</h2>
			</div>
		</div>
	)
}

export default Homepage;