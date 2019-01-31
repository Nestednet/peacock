import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import ComposedCard from '../ComposedCard';
import Text from '../Text';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Icon from '../Icon';



var piso2 = "http://nuevo-estilo.micasarevista.com/var/decoracion/storage/images/nuevo-estilo/casas-lujo/minipiso-muebles-a-medida/1770763-1-esl-ES/un-piso-pequeno-pero-maton_tres-elementos_video.gif";
var piso = "https://co.habcdn.com/photos/business/gallery/restitucion-y-embellecimiento-de-pisos-de-madera_12040.jpg";


storiesOf('Composed Card')
    .add('Gestalt components', ()=>
        <ComposedCard
            media = {piso}
            title = "La mesa de Palaua init"
            subtitle = {
                <Box 
                    position = "relative"
                    display = "flex"
                    direction = "row"
                >
                    <Text color = "green">
                        794,5€
                    </Text>
                    <Text color = "gray">
                        /month
                    </Text>
                </Box>
            }
            iconInfo1 = "pin"
            iconInfo2 = "pin"
            messageInfo1 = "6 people"
            messageInfo2 = "3 months"
            nameSelector = "Hide Transactions"
        ></ComposedCard>
    )
    .add('Gestalt boxes', ()=>
        <Box name = "card" position = "relative" column={4} padding = {3} shadowed shape ={"rounded"}>
            <Box name = "badge" position={"absolute"} top right padding = {5}>
                <Badge status={"alarm"}>Payment Failed</Badge>
            </Box>
 
            <Box name = "flex" paddingX = {5} paddingY = {6} display = "flex" direction = {"row"}>
                
                <Box name = "avatar" column={4} > 
                    <Box shadowed padding = {1}>
                        <Avatar profile = 'company'></Avatar>
                    </Box> 
                </Box>

                <Box position = "relative" name = "info" paddingX = {3} column = {10}>
                    <Box name = "title" paddingY = {3}>
                        <Text size = {"sm"} bold> La mesa de Palaua init </Text>
                    </Box>

                    <Box name = "price"display = {"flex"} direction = {"row"}>
                        <Text size = {"xs"} color = {"nested_emph_color"} bold>
                            794,5€
                        </Text>
                        <Text size = {"xs"} color = {"gray"}>
                            /month
                        </Text> 
                        <Box paddingX={2}></Box>
                        <Text size = {"xs"} color = {"nested_emph_color"} bold>
                            79,5€
                        </Text>
                        <Text size = {"xs"} color = {"gray"}>
                            fee
                        </Text> 
                    </Box>

                    <Box display = {"flex"} direction = {"row"} paddingY = {10}>
                        
                        <Icon icon="person" color = {"gray"}></Icon>
                        
                        <Box paddingX = {1}>
                        <Text size = {"xs"} color = {"gray"}>6 people</Text>
                        </Box>
                        <Box column = {1}></Box>
                        <Box paddingX= {1}>
                            <Icon icon="pinterest" color = {"gray"}></Icon>
                        </Box>
                        
                        <Text size = {"xs"} color = {"gray"}>3 Months</Text>
                    </Box>
 
                </Box>

            </Box>
        </Box>
    )
    ;

        /*        
    */