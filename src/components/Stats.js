import React from 'react';
import { connect } from 'react-redux'

function Stats(props) {
	console.log(props)
	return (
		<div>
			{this.props.stats.map((item, index) => (
				<p key={index}>{item.username}</p>
			))}
		</div>
	)
}

const mapStateToProps = state => ({
	stats: state.reducers.statsReducer.stats
})

export default connect(mapStateToProps)(Stats)