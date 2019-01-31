import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import TableElement from '../TableElement';
import Badge from '../Badge';

storiesOf('Table element')
    .add('default', ()=>
        <TableElement 
        >
            <Text color = "gray" size = "xs">{"July26, 2018"}</Text>    
            <Text size = "xs" bold>{"August rent"}</Text>
            <Text size = "xs" color = "green">{"794,5"}€</Text>                 
            <Badge status={"good"}>{"Paid"}</Badge>
            <Box color = "gray" shape = "rounded" padding={2} column ={8}>
                <Text bold size = "xs">{"IBAN:****3256"}</Text>
            </Box>
            <Button color = "darkGray" text = "Download" inline></Button>

        </TableElement>

    );
