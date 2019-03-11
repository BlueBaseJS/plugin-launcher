import * as React from 'react';
import { style } from './style';
import { getComponent } from '@bluebase/core';

const TaskbarToggle = () => () => {

	const TaskBarToggleButton = getComponent('TaskBarToggleButton');
	return (
		<>
			{
				TaskBarToggleButton ?
					<TaskBarToggleButton style={style.taskBarToggleButton} />
					: null
			}
		</>
	);
};

export default TaskbarToggle;