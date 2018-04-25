import React from 'react';
import {ListItem} from 'material-ui/List';

function SList(props) {
	return (
		<div>
			{stats.map((item, index) => (
	      		<ListItem 
	      			className='statsList'
	      			key={index}
	      			primaryText={item.date.slice(0,10)}
	      			nestedItems={[
			      		<ListItem className='stat' key={index} primaryText={item.weight} />,
			      		<ListItem className='stat' key={index} primaryText={item.mileTime} />,
			      		<ListItem className='stat' key={index} primaryText={item.goals} />,
			      		<ListItem className='stat' key={index} primaryText={item.notes} />
		      		]}
		      	/>
	    	))}
    	</div>
	)
}

export default SList;