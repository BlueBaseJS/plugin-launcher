// jest.mock("Dimensions");

import { BlueBaseApp, createPlugin } from '@bluebase/core';

import BluebasePluginResponsiveGrid from "@bluebase/plugin-responsive-grid"
import Plugin from '../../../index';
import React from 'react';
import { Wallpaper } from '../Wallpaper';
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


    it('should  return WallPaper', async () => {


        const Component: any = () => 'View';
        const wrapper = mount(
            <BlueBaseApp plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <Wallpaper defaultProps={{ source: require('../images/logo.png') }} >
                    {() => {
                        return (<Component />);
                    }}
                </Wallpaper>

            </BlueBaseApp>
        );



        await waitForElement(wrapper, 'OrientationObserver');

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



});