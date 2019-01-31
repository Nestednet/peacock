import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Box } from '../Box';
import Badge from '../Badge';
import Mask from '../Mask';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';
import Avatar from '../Avatar';



  storiesOf('Avatar', module).add('loaded image user', ()=>
  <Box >
  <Avatar
  size="md"
  src="https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg"
  name="Keerthi"
  profile='user'
  />
  </Box>
  ).add('default user', ()=>
  <Avatar
  size="md"
  name="Mike"
  profile='user'
  />
  )
  .add('default host', ()=>
    <Avatar
    size="md"
    name="Miguel"
    profile='host'
    />
  )
  .add('loaded image host', ()=>
  <Box display="flex" direction="row">
    <Box column={4}>
      <Avatar
      size="lg"
      src="https://66.media.tumblr.com/9001ec158102a2296c8536ab88ec4b36/tumblr_o1xkhcxIeP1uk1185o1_500.png"
      name="Keerthi"
      profile='host'
      />
    </Box>
  </Box>
  )
  .add('several options', ()=>
  <Box display="flex" direction="row">
  <Box width={40}>
    <Avatar name="Julia" profile ='host' />
  </Box>
  <Box column={2}>
    <Avatar name="Julia" profile ='user' />
  </Box>
  <Box column={4}>
    <Avatar name="Keerthi" profile='user' src="https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg" />
  </Box>
</Box>
  
  
  )
