import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '../Box'
import Image from '../Image'
import Text from '../Text'

var companyAvatarDefault = 'https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-default.jpg'
var wideImage = 'https://66.media.tumblr.com/9001ec158102a2296c8536ab88ec4b36/tumblr_o1xkhcxIeP1uk1185o1_500.png'

storiesOf('Image', module).add('default', () =>
  <Image
    alt='example.com'
    color='rgb(111, 91, 77)'
    naturalHeight={564}
    naturalWidth={564}
    src={companyAvatarDefault}
  />
)
  .add('+ Box', () =>
    <Box column={6} paddingX={2}>
      <Image
        alt='Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave'
        color='rgb(231, 186, 176)'
        naturalHeight={564}
        naturalWidth={564}
        src={companyAvatarDefault}
      >
        <Box padding={3}>
          <Text color='white'>
            Tropic greens: The taste of Petrol and Porcelain
          </Text>
        </Box>
      </Image>
    </Box>
  )

  .add('cover', () =>
    <Box height={100} width={100}>
      <Image
        alt='tall'
        color='#000'
        fit='cover'
        naturalHeight={1}
        naturalWidth={1}
        src={wideImage}
      />
    </Box>
  )
