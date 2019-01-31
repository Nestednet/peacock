import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Button from '../Button';
import Card from '../CardNested';
import ComposedCard from '../ComposedCard';
import Divider from '../Divider';
import Icon from '../Icon';
import Image from '../Image';
import Mask from '../Mask';
import Text from '../Text';
import Playground from '../Playground';
import Avatar from '../Avatar';


var tallImage = "https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg";


storiesOf('Playground')
    .add('Working', ()=>
        <Playground
            avatarComponent = {
                <Avatar  
                    size="md"
                    src="https://66.media.tumblr.com/a7e72d11f9e6b681f033064909a6948b/tumblr_p66leeBofk1vric4fo2_250.jpg"
                    name="Keerthi"
                    profile='user'
                >
                </Avatar>
            }
        
        ></Playground>
    )
    .add('Error?', ()=>
    <Playground
        avatarComponent = {
            <Box color={"blue"}>
                hey wassup
            </Box>
        }
    
    ></Playground>
);
    