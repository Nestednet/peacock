import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Button from '../Button';
import Card from '../CardNested';
import DecoratedCard from '../DecoratedCard';
import Divider from '../Divider';
import Icon from '../Icon';
import Image from '../Image';
import Mask from '../Mask';
import Text from '../Text';





var piso2 = "http://nuevo-estilo.micasarevista.com/var/decoracion/storage/images/nuevo-estilo/casas-lujo/minipiso-muebles-a-medida/1770763-1-esl-ES/un-piso-pequeno-pero-maton_tres-elementos_video.gif";
var piso = "https://co.habcdn.com/photos/business/gallery/restitucion-y-embellecimiento-de-pisos-de-madera_12040.jpg";


storiesOf('Decorated Card')
 
    .add('Gray ', ()=>
    <Box minWidth = {100} maxWidth={350} padding={2} column={12} >
        <DecoratedCard 
            srcImage = {piso}
            title = "Passeig de la Bonanova"
            description = "BARCELONA"
            centered = {false}
        >
            <Text size = 'xs' color = "gray"><Box paddingX={3}> 5 Spaces</Box></Text>
        </DecoratedCard>
    </Box>
    )
    .add('Green', ()=> 
    <Box minWidth = {100} maxWidth={350} padding={2} column={12} >
        <DecoratedCard 
            srcImage = {piso2}
            title = "Carrer d'Enric Granados"
            description = "BARCELONA"
            highlight = "right"
            centered = {false}
        >
            <Text size = 'xs' color = "green"><Box paddingX={3}> 5 Spaces</Box></Text>
        </DecoratedCard>
    </Box>
    )
    .add('Testing', ()=>
        <DecoratedCard></DecoratedCard>
    )
    ;