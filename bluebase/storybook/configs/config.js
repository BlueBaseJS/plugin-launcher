import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BlueBaseDecorator } from '@bluebase/storybook-addon';

// Add BlueBase
const BRConfigs = require('../bluebase');
addDecorator(BlueBaseDecorator(BRConfigs));

// automatically import all files ending in *.stories.tsx
const req = require.context('../../../src', true, /.stories.tsx$/);
const req2 = require.context('../', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
  req2.keys().forEach((filename) => req2(filename));
}

configure(loadStories, module);
