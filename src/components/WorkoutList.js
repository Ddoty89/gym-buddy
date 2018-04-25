import React from 'react';

function WorkoutList(props) {
	return (
		<List className='exercisesToBeAdded'>
            {exercises.map((exercises, index) => (
                <ListItem 
                    key={index}
                    primaryText={exercises.equipment} 
                    className='exercise'
                    nestedItems={[
                        <ListItem key={index} primaryText='Sets:' secondaryText={exercises.sets} />,
                        <ListItem key={index} primaryText='Repetitions:' secondaryText={exercises.repetitions} />,
                        <ListItem key={index} primaryText='Weight:' secondaryText={exercises.weight} />,
                        <ListItem key={index} primaryText='Notes:' secondaryText={exercises.notes} />
                    ]}
                />
            ))}
        </List>
	)
}

export default WorkoutList