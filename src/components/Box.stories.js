import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '../Box'
import Avatar from '../Avatar'
import Text from '../Text'
import Button from '../Button'

storiesOf('Box', module)
  .add('Gestalts box', () =>
    <Box position='relative' color='green' height={200}>
      <div>Blah Blah</div>
    </Box>)
  .add('Right', () =>
    <Box
      alignItems='center'
      direction='row'
      display='flex'
      marginStart={-1}
      marginEnd={-1}
    >
      <Box paddingX={1}>
        <Avatar name='chrislloyd' size='md' />
      </Box>
      <Box paddingX={1} flex='grow'>
        <Text bold>Chris Lloyd</Text>
        <Text>joined 2 years ago</Text>
      </Box>
      <Box paddingX={1}>
        <Button text='Follow' size='sm' color='red' />
      </Box>
    </Box>

  )
