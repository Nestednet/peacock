import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Box from '../Box';
import Text from '../Text';
import Button from '../ButtonNested';

storiesOf('Button Nested', module)
  .add('pill', () => 
    <Button 
        color = 'green'
        buttonIcon = 'pin'
        text="Submit" 
        onClick={action('clicked')}
        inline="false"
        isPill = "true"
        >
    </Button>
)
.add('icon', () => 
    <Box column={4}>
        <Button 
            buttonIcon='pin'
            text="button" 
            onClick={action('clicked')}
            inline = {false}
            >
        El Pin
        </Button>
    </Box>
)

.add('expanded', () => 
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
);