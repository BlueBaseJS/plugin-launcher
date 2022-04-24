import { BootOptions } from '@bluebase/core';
import ReactNavigation from '@bluebase/plugin-react-navigation';
import deepmerge from 'deepmerge';

import commonBootOptions from '../common/bluebase';

// const assetsPath = `../../assets/expo`;

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [ReactNavigation]
};

export default deepmerge(commonBootOptions, bootOptions);
