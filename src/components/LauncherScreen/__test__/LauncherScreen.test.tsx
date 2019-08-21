import { BlueBaseApp, createPlugin, getComponent } from '@bluebase/core';

import BluebaseResponsiveGrid from "@bluebase/plugin-responsive-grid"
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const LauncherScreen = getComponent('LauncherScreen');
export const ThingsPlugin = createPlugin({
	key: 'things',
	name: 'thingsplugin',
	version: '1.0.0',


});



export const samplePlugin = createPlugin({
	key: 'things',
	name: 'thingsplugin',
	version: '1.0.0',
	indexRoute: 'things'


});



// export const SitesIconPlugin = createPlugin({
// 	key: 'sites',
// 	name: 'Sitesplugin',
// 	version: '1.0.0',
// 	icon: {
// 		component: 'SitesAppIcon',
// 		type: 'icon',
// 	},

// });


describe('LauncherScreen', () => {
	it('should return LauncherScreen with Apps', async () => {


		const wrapper = mount(
			<BlueBaseApp
				configs={{
					portraitProps: {
						resizeMode: 'contain',
						// source: require('dummy'),
						style: { flex: 1, },
					},
				}}
				plugins={[BluebaseResponsiveGrid, Plugin]}
			>
				<LauncherScreen />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, LauncherScreen);
		// expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('EmptyState')).toHaveLength(1);

		// expect(
		// 	(wrapper as any)
		// 		.find('Wallpaper')
		// 		.last()
		// 		.prop('portraitProps')
		// ).toContain('resizeMode');



	});
	it('should return', async () => {
		const wrapper = mount(
			<BlueBaseApp
				configs={{
					portraitProps: {
						resizeMode: 'contain',
						// source: require('dummy'),
						style: { flex: 1, },
					},
				}}
				plugins={[BluebaseResponsiveGrid, samplePlugin, Plugin]}
			>
				<LauncherScreen />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, LauncherScreen);

		expect(
			(wrapper as any)
				.find('Wallpaper')
				.last()
				.prop('portraitProps')
		).toContain('resizeMode');



	});
});