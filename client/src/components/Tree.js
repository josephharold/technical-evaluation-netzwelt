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
		// find all the child nodes of the root
		const childNodes = nodes.filter(child=>
			child.parent === root.id
		);						

		// if there are no children, return
		if(childNodes.length === 0 ){
			return undefined;
		}	
		
		return (
			<>
				{
					// for each child node of the root, find all its child (grand child of root)
					childNodes.map((child)=>
					<Node name={child.name}>
						{renderNodes(child)}
					</Node>
					)
				}
		</>
		);
	}

	const RenderRoots = ()=>{
		// render the roots and render their children
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