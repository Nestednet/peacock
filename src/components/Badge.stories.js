import React from 'react';

import { storiesOf } from '@storybook/react'
import Badge from '../Badge'

storiesOf('Badge').add('Warning badge', () => <Badge status={'warning'}>Warning!</Badge>)
  .add('Alert badge', () => <Badge status={'alarm'}>Alarm!</Badge>)
  .add('Good badge', () => <Badge status={'good'}>Good!</Badge>)
