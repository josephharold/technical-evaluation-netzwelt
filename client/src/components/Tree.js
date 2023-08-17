import {useState} from 'react';
import Node from './Node';

const Tree = ({data})=>{

	const [roots, setRoots] = useState(()=>{
		// we identify roots based on whether they have a parent or not
		return data?.filter((e)=>{
			return e?.parent === null
		});
	});

	// nodes, are basically the children of the roots
	const [nodes, setNodes] = useState(data);



	// finds all the children and then renders it
	const renderNodes = (root)=>{
		const children = nodes.filter(child=>
			child.parent === root.id
		);						

		// if it doesn't have children, return none
		if(children.length === 0 ){
			return undefined;
		}	
		
		return (
			<>
				{
					// for each child find all it's children and render the nodes
					children.map((child)=>
					<Node name={child.name}>
						{renderNodes(child)}
					</Node>
					)
				}
		</>
		);
	}


	// rendres all the roots
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
		<>
		{RenderRoots()}
		</>
	)
}

export default Tree;