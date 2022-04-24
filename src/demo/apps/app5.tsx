import { Text } from '@bluebase/components';
import { createPlugin } from '@bluebase/core';
import React from 'react';

export default createPlugin({
	key: 'App 5',
	name: 'Demp App 5, No icon',

	indexRoute: 'App5',

	routes: {
		name: 'App5',
		path: '',
		screen: () => <Text>App5</Text>,
	},
});
