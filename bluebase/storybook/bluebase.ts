import { BootOptions } from '@bluebase/core';
import ReactRouter from '@bluebase/plugin-react-router';
import deepmerge from 'deepmerge';

import commonBootOptions from '../common/bluebase';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		ReactRouter
	],
};

export default deepmerge(commonBootOptions, bootOptions);
