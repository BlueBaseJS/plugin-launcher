import { BlueBaseApp, createPlugin, getComponent } from '@bluebase/core';

import BluebaseResponsiveGrid from "@bluebase/plugin-responsive-grid"
import { Column } from '../../Column';
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




export const samplesPlugin = createPlugin({
	key: 'thingss',
	name: 'thingsplugins',
	version: '1.0.0',
	indexRoute: 'things'


});




describe('LauncherScreen', () => {
	it('should return LauncherScreen with Apps', async () => {


		const wrapper = mount(
			<BlueBaseApp
				configs={{
					portraitProps: {
						resizeMode: 'contain',
						style: { flex: 1, },
					},
				}}
				plugins={[BluebaseResponsiveGrid, Plugin]}
			>
				<LauncherScreen />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, LauncherScreen);
		expect(wrapper.find('EmptyState')).toHaveLength(1);

	});
	it('should return', async () => {
		const Function: any = () => 'View';

		const wrappers = mount(
			<BlueBaseApp

				plugins={[BluebaseResponsiveGrid, samplesPlugin, samplePlugin, Plugin]}>
				<Column>
					{(_size: any) => {
						return (<Function />);
					}}
				</Column>
			</BlueBaseApp>
		);



		await waitForElement(wrappers, Column);

		const instance: any = wrappers
			.find('ColumnComponent')
			.last()
			.instance();
		instance.onLayout({ nativeEvent: { layout: { width: 20 } } });


		wrappers.update();
		const wrapper = mount(
			<BlueBaseApp
				configs={{
					portraitProps: {
						resizeMode: 'contain',
						style: { flex: 1, },
					},
				}}
				plugins={[BluebaseResponsiveGrid, samplesPlugin, samplePlugin, Plugin]}
			>
				<LauncherScreen />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, LauncherScreen);

		expect(wrapper.find('ScrollView')).toHaveLength(1);


	});
});