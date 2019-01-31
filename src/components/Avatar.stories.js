import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Avatar from '../Avatar';

var tallImage = "https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg";
var wideImage = "https://66.media.tumblr.com/9001ec158102a2296c8536ab88ec4b36/tumblr_o1xkhcxIeP1uk1185o1_500.png";

storiesOf('Avatar', module)
  .add('Round default', ()=>
  <Avatar
  size="md"
  name="Mike"
  profile='user'
  />
  )

  .add('Round image', ()=>
  <Box >
    <Avatar
    size="md"
    src={tallImage}
    name="Keerthi"
    profile='user'
    />
  </Box>
  )

  .add('Square default', ()=>
    <Avatar
    size="md"
    name="Miguel"
    profile='company'
    />
  )
  .add('Square image', ()=>
    <Avatar
      size = "md"
      src={wideImage}
      name="Keerthi"
      profile="company"
    />
  );