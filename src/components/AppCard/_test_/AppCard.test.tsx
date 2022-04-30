import { BlueBaseApp, createPlugin } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { AppCard } from '../AppCard';

export const ThingsPlugin = createPlugin({
	key: 'things',
	name: 'thingsplugin',
	version: '1.0.0',

});

export const SitesIconPlugin = createPlugin({
	key: 'sites',
	name: 'Sitesplugin',
	version: '1.0.0',
	icon: {
		component: 'SitesAppIcon',
		type: 'icon',
	},

});

describe('AppCard', () => {
	it('should return plugin  defaultIcon ', async () => {

		const wrapper = mount(
			<BlueBaseApp plugins={[ThingsPlugin, Plugin]}>
				<AppCard plugin={ThingsPlugin as any} size={20} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Pressable');
		const onPress = (wrapper as any)
			.find('Pressable')
			.last()
			.prop('onPress');

		onPress();
		expect(
			(wrapper as any)
				.find('LauncherDefaultIcon')
				.last()
				.prop('size')
		).toBe(20);

	});
	it('should return plugin  with icon', async () => {

		const wrapper = mount(
			<BlueBaseApp plugins={[SitesIconPlugin, Plugin]}>
				<AppCard plugin={SitesIconPlugin as any} size={20} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Pressable');
		expect(
			(wrapper as any)
				.find('PluginIcon')
				.last()
				.prop('size')
		).toBe(4);
	});
});
