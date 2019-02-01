import React from 'react'

import { storiesOf } from '@storybook/react'

import Mask from '../Mask'
// TODO: replace it?
var userAvatarThumb = 'https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-thumb.jpg'
var userAvatarDefault = 'https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-default.jpg'
var companyAvatarThumb = 'https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-thumb.jpg'
var companyAvatarDefault = 'https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-default.jpg'

storiesOf('Mask', module)
  .add('default', () =>
    <Mask height={70} shape='circle' width={70}>
      <div style={{ backgroundColor: '#0fa573', width: 70, height: 70 }} />
    </Mask>
  )
  .add('thumb user image', () =>
    <Mask height={70} width={70} shape='circle'>
      <img
        alt='nested user'
        src={userAvatarThumb}
        style={{ maxWidth: '100%', display: 'block' }}
      />
    </Mask>
  )
  .add('default user image', () =>
    <Mask height={140} width={140} shape='circle'>
      <img
        alt='nested user'
        src={userAvatarDefault}
        style={{ maxWidth: '100%', display: 'block' }}
      />
    </Mask>
  )
  .add('thumb company image', () =>
    <Mask height={70} width={70} shape='rounded'>
      <img
        alt='nested user'
        src={companyAvatarThumb}
        style={{ maxWidth: '100%', display: 'block' }}
      />
    </Mask>
  )
  .add('default company image', () =>
    <Mask height={140} width={140} shape='rounded'>
      <img
        alt='nested user'
        src={companyAvatarDefault}
        style={{ maxWidth: '100%', display: 'block' }}
      />
    </Mask>
  )
