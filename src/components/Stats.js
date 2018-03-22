import React from 'react';
import { connect } from 'react-redux'

const Stats = ({stats}) => (
	<div>
		{stats.map((item, index) => (
			<p key={index}>{item}</p>
		))}
	</div>
)


const mapStateToProps = state => ({
	stats: state.reducers.statsReducers.stats
})

export default connect(mapStateToProps)(Stats)