import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import SimpleCard from '../SimpleCard'

var urlImage = 'https://instagram.fbcn9-1.fna.fbcdn.net/vp/6db13ca6004cae414266f8a1e520e8bd/5CC1539C/t51.2885-15/e35/c0.54.1080.1080a/s480x480/47690370_706764013057157_2395849565099235223_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net'

storiesOf('SimpleCard')
    .add('Default', () =>
        <Box minWidth={100} maxWidth={236} padding={2} column={12} >
            <SimpleCard                title='Baby'
                description='Petit Gran'
            >
            </SimpleCard>
        </Box>
    )
    .add('Inverted', () =>
    <Box minWidth={100} maxWidth={236} padding={2} column={12} >
        <SimpleCard            title='Baby'
            description='Petit Gran'
            inverted
        >
        </SimpleCard>
    </Box>
    )
    .add('Top Image', () =>
    <Box minWidth={100} maxWidth={236} padding={2} column={12} >
        <SimpleCard            srcImage={urlImage}
            title='Baby'
            description='Petit Gran'
        >
        </SimpleCard>
    </Box>
    )
    .add('Highlight left ', () =>
    <Box minWidth={100} maxWidth={236} padding={2} column={12} >
        <SimpleCard            srcImage={urlImage}
            title='Baby'
            description='Petit Gran'
            highlight='left'
        >
        </SimpleCard>
    </Box>
    )
    .add('Avatar', () =>
    <Box minWidth={100} maxWidth={236} padding={2} column={12} >
        <SimpleCard            srcImage={urlImage}
            title='Baby'
            description='Petit Gran'
            avatar
        >
        </SimpleCard>
    </Box>
    )


    ;