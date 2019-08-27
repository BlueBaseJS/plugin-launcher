// jest.mock("Dimensions");

import { BlueBaseApp, createPlugin } from '@bluebase/core';

import { AppGrid } from '../AppGrid';
import BluebasePluginResponsiveGrid from "@bluebase/plugin-responsive-grid"
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

export const ThingsPlugin: any = createPlugin({
	key: 'things',
	name: 'thingsplugin',
	version: '1.0.0',
	icon: {
		component: 'SitesAppIcon',
		type: 'icon',
	},

});



export const SitesIconPlugin: any = createPlugin({
	key: 'sites',
	name: 'Sitesplugin',
	version: '1.0.0',
	icon: {
		component: 'SitesAppIcon',
		type: 'icon',
	},

});





describe('AppGrid', () => {
	it('should return plugin with grid ', async () => {

		const wrapper = mount(
			<BlueBaseApp
				plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}
			>
				<AppGrid plugins={[SitesIconPlugin, ThingsPlugin]} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Column');
		expect(
			(wrapper as any)
				.find('Row')
				.first()
				.prop('children')
		).toBeDefined();

	});
});