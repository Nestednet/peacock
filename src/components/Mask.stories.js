import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Mask from '../Mask';

var user_avatar_thumb = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-thumb.jpg";
var user_avatar_default = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-default.jpg";
var company_avatar_thumb = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-thumb.jpg";
var company_avatar_default = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-default.jpg";

storiesOf('Mask', module)
  .add('default', () => <Mask height={70} shape="circle" width={70}>
<div style={{ backgroundColor: '#0fa573', width: 70, height: 70 }} />
</Mask>)
  .add('thumb user image', ()=>   
  <Mask height={70} width = {70} shape="circle">
  <img
    alt="nested user"
    src= {user_avatar_thumb}
    style={{ maxWidth: '100%', display: 'block' }}
  />
  </Mask>
  )
  .add('default user image', () => 
  <Mask height={140} width = {140} shape="circle">
  <img
    alt="nested user"
    src= {user_avatar_default}
    style={{ maxWidth: '100%', display: 'block' }}
  />
  </Mask>
  )
  .add('thumb company image', ()=>   
  <Mask height={70} width = {70} shape="rounded">
  <img
    alt="nested user"
    src= {company_avatar_thumb}
    style={{ maxWidth: '100%', display: 'block' }}
  />
  </Mask>
  )
  .add('default company image', () => 
  <Mask height={140} width = {140} shape="rounded">
  <img
    alt="nested user"
    src= {company_avatar_default}
    style={{ maxWidth: '100%', display: 'block' }}
  />
  </Mask>
  );
