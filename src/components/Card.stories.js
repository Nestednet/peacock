import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Button from '../Button';
import Card from '../Card';
import  CardNested from '../CardNested';
import Avatar from '../Avatar';
import Text from '../Text';
import Link from '../Link';

var imatge = "https://instagram.fbcn9-1.fna.fbcdn.net/vp/6db13ca6004cae414266f8a1e520e8bd/5CC1539C/t51.2885-15/e35/c0.54.1080.1080a/s480x480/47690370_706764013057157_2395849565099235223_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net";


storiesOf('Card')
    .add('Example', ()=>
    <Box minWidth = {100} maxWidth={236} padding={2} column={12} >
      <Card
        image={
          <Avatar
            name="Albert"
            src={imatge}
          />
        }
      >
        <Text align="center" bold size="xl">
          <Link href="https://pinterest.com">
            <Box paddingX={3} paddingY={2}>
              Albert
            </Box>
          </Link>
        </Text>
        <Text align = "center">Aquest és més petit</Text>
      </Card>
  </Box>
).add('Demo', ()=>
    <Box minWidth = {100} maxWidth={236} padding={2} column={12} >
        <CardNested 
            src = {imatge}
            title = "Baby"
            description = "Petit Gran"
        >
        </CardNested>
    </Box>
);
