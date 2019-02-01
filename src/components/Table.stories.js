import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Button from '../Button'
import Text from '../Text'
import TableElement from '../TableElement'
import Table from '../Table'
import Badge from '../Badge'

storiesOf('Table ')
  .add('each row has same content', () =>
    <Table columns={['Starts at', 'Concept', 'Amount', 'Status', 'Payment Method', 'Invoice']}>
      <TableElement>
        <Text color='gray' size='xs' align='center'>{'July 26, 2018'}</Text>                <Text size='xs' bold align='center'>{'August rent'}</Text>
        <Text size='xs' color='green' align='center'>{'794,5'}€</Text>                <Badge status={'good'}>{'Paid'}</Badge>
        <Box color='gray' shape='rounded' padding={2} column={8}>
          <Text bold size='xs' align='center'>{'IBAN:****3256'}</Text>
        </Box>
        <Button color='blue' text='Download' onClick={() => { console.log('hey') }} />
      </TableElement>
      <TableElement
      >
        <Text color='gray' size='xs' align='center'>{'August 27, 2018'}</Text>                <Text size='xs' bold align='center'>{'September rent'}</Text>
        <Text size='xs' color='green' align='center'>{'794,5'}€</Text>                <Badge status={'alarm'}>{'Pending'}</Badge>
        <Box color='gray' shape='rounded' padding={2} column={8}>
          <Text bold size='xs' align='center'>{'IBAN:****3256'}</Text>
        </Box>
        <Button color='blue' text='Download' onClick={() => { console.log('hey') }} />

      </TableElement>
    </Table>
  )
