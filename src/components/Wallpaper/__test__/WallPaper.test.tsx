// jest.mock("Dimensions");

import { BlueBase, BlueBaseApp, createPlugin } from '@bluebase/core';

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

// jest.mock('@bluebase/components', () => {
//     return {
//         OrientationObserver: (Component: any) => {


//             return <Component isLandscape={true} />;
//         }
//     }
// });
describe('WallPaper', () => {


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
        expect(
            (wrapper as any)
                .find('ImageBackground')
                .first()
                .prop('children')
        ).toBeDefined();

    });

    it('should  return WallPaper', async () => {

        const isLandscape = true;
        const OrientationObserver = ({ children }: any) => children({ isLandscape });

        const Component: any = () => 'View';
        const wrapper = mount(
            <BlueBaseApp
                filters={{
                    'bluebase.boot.end': async (bootOpts: any, _ctx: any, BB: BlueBase) => {
                        // Adding mocked NavigationActions
                        await BB.Components.register('OrientationObserver', OrientationObserver);
                        return bootOpts;
                    }
                }}

                plugins={[BluebasePluginResponsiveGrid, ThingsPlugin, Plugin, SitesIconPlugin]}>
                <Wallpaper defaultProps={{ source: require('../images/logo.png') }} >
                    {() => {
                        return (<Component />);
                    }}
                </Wallpaper>

            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'OrientationObserver');
        expect(
            (wrapper as any)
                .find('ImageBackground')
                .first()
                .prop('children')
        ).toBeDefined();

    });

});