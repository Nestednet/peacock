import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Box } from '../Box';
import Image from '../Image';
import Text from '../Text';

var user_avatar_thumb = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-thumb.jpg";
var user_avatar_default = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-default.jpg";
var company_avatar_thumb = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-thumb.jpg";
var company_avatar_default = "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-default.jpg";

var tallImage = "https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg";
var wideImage = "https://66.media.tumblr.com/9001ec158102a2296c8536ab88ec4b36/tumblr_o1xkhcxIeP1uk1185o1_500.png";


storiesOf('Image', module).add('default', ()=>
    <Image
    alt="example.com"
    color="rgb(111, 91, 77)"
    naturalHeight={564}
    naturalWidth={564}
    src={company_avatar_default}
    />
  )
  .add('+ Box', () => 
    <Box column={6} paddingX={2}>
      <Image
        alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
        color="rgb(231, 186, 176)"
        naturalHeight={564}
        naturalWidth={564}
        src={company_avatar_default}
      >
        <Box padding={3}>
          <Text color="white">
            Tropic greens: The taste of Petrol and Porcelain
          </Text>
        </Box>
      </Image>
    </Box>
  )

  .add('cover', ()=>
    <Box height={100} width={100}>
      <Image
        alt="tall"
        color="#000"
        fit="cover"
        naturalHeight={1}
        naturalWidth={1}
        src={wideImage}
      />
    </Box>
  );
