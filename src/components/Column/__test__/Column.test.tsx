// jest.mock("Dimensions");

import { BlueBaseApp, createPlugin } from '@bluebase/core';

import BluebasePluginResponsiveGrid from "@bluebase/plugin-responsive-grid"
import { Column } from '../../Column';
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


    it('should return Column with size 20', async () => {

        const Function: any = () => 'View';
        const wrapper = mount(
            <BlueBaseApp plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <Column>
                    {(_size: any) => {
                        return (<Function />);
                    }}
                </Column>
            </BlueBaseApp>
        );



        await waitForElement(wrapper, 'Column');

        const instance: any = wrapper
            .find('Column')
            .first()
            .instance();
        instance.onLayout({ nativeEvent: { layout: { width: 20 } } });

        expect(
            (wrapper as any)
                .find('AppCard')
                .first()
                .prop('size')
        ).toBe(20);

    });


    it('should return plugin with size 0  ', async () => {

        const Function: any = () => 'View';
        const wrapper = mount(
            <BlueBaseApp plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <Column>
                    {(_size: any) => {
                        return (<Function />);
                    }}
                </Column>
            </BlueBaseApp>
        );



        await waitForElement(wrapper, 'Column');

        const instance: any = wrapper
            .find('Column')
            .first()
            .instance();
        instance.onLayout({ nativeEvent: { layout: { width: 0 } } });

        expect(
            (wrapper as any)
                .find('Col')
                .first()
                .prop('size')
        ).toBe(20);

    });
});