import {useState, useEffect} from 'react';
import Node from './Node';

const Tree = ({data})=>{
	const [roots, setRoots] = useState([]);

	const [nodes, setNodes] = useState([]);

	useEffect(()=>{
		const roots_ = data.filter((e)=>{return e?.parent ===null});
		setRoots(roots_);
		setNodes(data);
	},[data]);

	const renderNodes = (root)=>{
		const filtered = nodes.filter(child=>
			child.parent === root.id
		);						

		if(filtered.length === 0 ){
			return undefined;
		}	
		
		return (
			<>
				{
					filtered.map((child)=>
					<Node name={child.name}>
						{renderNodes(child)}
					</Node>
					)
				}
		</>
		);
	}

	const RenderRoots = ()=>{
		return roots.map((root)=>{
			return(
				<Node	name={root.name} id={root.id}>
					{renderNodes(root)}
				</Node>
			)
		});			
	};

	return(
		RenderRoots()
	)
}

export default Tree;