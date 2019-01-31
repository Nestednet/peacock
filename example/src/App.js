import React, { Component } from 'react'

import { Badge } from 'peacock'
import { Text } from 'peacock'

export default class App extends Component {
  render () {
    return (
      <div>
        <Badge>
          <Text>Hi!</Text>
        </Badge>
      </div>
    )
  }
}
