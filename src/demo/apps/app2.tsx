import { Text } from '@bluebase/components';
import { createPlugin } from '@bluebase/core';
import React from 'react';

export default createPlugin({
	key: 'App 2',
	name: 'Demp App 2, This one has a long name',

	icon: {
		source: { uri: 'https://placeimg.com/300/300/any' },
		type: 'image',
	},

	indexRoute: 'App2',

	routes: {
		name: 'App2',
		path: '',
		screen: () => <Text>App2</Text>,
	},
});
