import {useState } from 'react';
import {ChevronDown, ChevronRight} from './icons';

const Node = ({name, children})=>{

	const [isActive, setIsActive] = useState(false);	

	const toggleIsActive = ()=>{
		isActive ? setIsActive(false) : setIsActive(true);
	}

	return(
		<div className="rounded-md bg-white text-gray-700">
			<div className="inline-flex cursor-pointer hover:bg-gray-200 p-2 w-full" onClick={toggleIsActive}>
				<span>
				{
					children ? 
					(isActive ? <ChevronDown/>: <ChevronRight/> )
					:
					('')
				}
				</span>
				<span>
					{name} 
				</span>
			</div>
			{
				children &&
					<div className={`${isActive ? 'block ml-8': 'hidden'}`}>
						<div>
							{children}
						</div>
					</div>
			}
		</div>
	);
}

export default Node;