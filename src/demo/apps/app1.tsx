import React from 'react';
import { Text } from '@bluebase/components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	key: 'app-1',
	name: 'D App 1',

	icon: {
		name: 'delete',
		type: 'icon',
	},

	indexRoute: 'App1',

	routes: {
		name: 'App1',
		path: '',
		screen: () => <Text>App1</Text>,
	},
});
