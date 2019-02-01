import React from 'react'

import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Text from '../Text'

import HostReservationCard from '../HostReservationCard'

storiesOf('Reservation Card')
  .add('Host Single', () =>
    <Box display={'flex'} direction={'row'}>
      <HostReservationCard
        fee={30}
        host_income={50}
        people={3}
        price={60}
        renting_period={'month'}
        space_name={'palaua'}
        stage={'completed'}
      />

    </Box>
  )
  .add('Host + Several', () =>
    <Box >
      <HostReservationCard
        fee={30}
        host_income={50}
        people={3}
        price={60}
        renting_duration={1}
        renting_period={'month'}
        space_name={'gracia'}
        stage={'payment failed'} />
      <HostReservationCard
        fee={30}
        host_income={50}
        people={3}
        price={60}
        renting_duration={1}
        renting_period={'month'}
        space_name={'sarria'}
        stage={'pending'}
      />
      <HostReservationCard
        fee={30}
        host_income={50}
        people={3}
        price={60}
        renting_duration={1}
        renting_period={'month'}
        space_name={'rubí'}
        stage={'completed'}
      />
    </Box>
  )
  .add('Host + Children', () =>
    <HostReservationCard
      fee={30}
      host_income={50}
      people={3}
      price={60}
      renting_period={'month'}
      space_name={'palaua'}
      stage={'completed'}
    >
      <Text> El total es de 500 €</Text>
    </HostReservationCard>
  )
