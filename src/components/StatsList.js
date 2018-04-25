import React from 'react';
import { connect } from 'react-redux'
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

import {personalStats} from '../actions/stats';
import './StatsList.css'

class StatsList extends React.Component {
	componentDidMount() {
		this.props.dispatch(personalStats())
	}

	render() {
		return (
			<div className='list'>
			    <List>
			    	<Subheader className='user'>
			    		The current user <span className='userNameDis'>{this.props.user.username}</span>'s most recent stats:
			    	</Subheader>
			    </List>
				    {this.props.stats.map((item, index) => (
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
}

const mapStateToProps = state => ({
	stats: state.reducers.stats.stats,
	user: state.auth.currentUser || ''
})

export default connect(mapStateToProps)(StatsList)



