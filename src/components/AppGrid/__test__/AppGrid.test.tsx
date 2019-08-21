// jest.mock("Dimensions");

import { BlueBaseApp, createPlugin } from '@bluebase/core';

import { AppGrid } from '../AppGrid';
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


    it('should return plugin with grid ', async () => {

        // const Dimensions = {
        //     get: jest.fn().mockReturnValue({ width: 100, height: 100 })
        // }

        const Function: any = () => 'View';
        const wrappers = mount(
            <BlueBaseApp plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <Column>
                    {(_size: any) => {
                        return (<Function />);
                    }}
                </Column>
            </BlueBaseApp>
        );

        expect(wrappers).toMatchSnapshot();
        const instance: any = wrappers
            .find('Column')
            .first()
            .instance();
        instance.onLayout({ event: { nativeEvent: { layout: { width: 20 } } } });

        const wrapper = mount(
            <BlueBaseApp plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <AppGrid plugins={[SitesIconPlugin, ThingsPlugin]} />
            </BlueBaseApp>
        );

        await waitForElement(wrapper, 'Column');
        expect(
            (wrapper as any)
                .find('AppCard')
                .first()
                .prop('size')
        ).toBe(20);

    });
});