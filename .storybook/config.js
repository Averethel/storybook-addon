import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'react-theming',
  url: 'https://github.com/react-theming/storybook-addon-material-ui',
//  goFullScreen: false,
//  showLeftPanel: true,
//  showDownPanel: true,
//  showSearchBox: false,
//  downPanelInRight: false,
});

storybook.configure(() => require('./../example/stories/'), module);
