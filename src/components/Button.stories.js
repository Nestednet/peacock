import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button  from '../Button';
import Box from '../Box';
import Text from '../Text';

storiesOf('Button', module)
  .add('example', () => (
    <Box color="darkGray" maxWidth={320} shape="rounded" padding={4}>
      <Box marginBottom={4}>
          <Text color="white">
          Explore today’s trending ideas, curated finds, and personalized
          picks.
          </Text>
      </Box>
      <Box display="flex" direction="row" marginLeft={-2} marginRight={-2}>
          <Box display="flex" direction="row" column={6} paddingX={2}>
          <Button color="transparent" text="Later" />
          </Box>
          <Box column={6} paddingX={2}>
          <Button color="white" text="Learn more" />
          </Box>
      </Box>
   </Box>

  ))
  ;