declare var module: any;

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Launcher = getComponent('IndexPage');

storiesOf('Launcher', module)
  .add('Launcher', () => (
    <Launcher />
  ));