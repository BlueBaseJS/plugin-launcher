import { BootOptions } from '@bluebase/core';
import ReactRouter from '@bluebase/plugin-react-router';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
// Test Comment
const bootOptions: Partial<BootOptions> = {

	plugins: [
		ReactRouter
	],
};

export default deepmerge(commonBootOptions, bootOptions);
