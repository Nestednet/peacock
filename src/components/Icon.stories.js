import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Box } from '../Box';
import Icon from '../Icon';


storiesOf('Icon', module).add('dark grey', ()=>
  <Box marginRight={1} padding={1}>
    <Icon icon="pin" accessibilityLabel="Pin" color="darkGray" />
  </Box>
  );