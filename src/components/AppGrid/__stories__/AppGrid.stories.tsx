// tslint:disable:no-console
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { AppGrid } from '../AppGrid';

storiesOf('AppGrid', module).add('AppGrid', () => <AppGrid plugins={[]} />);
