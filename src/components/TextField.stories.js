import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Box } from '../Box';
import Label from '../Label';
import Text from '../Text';
import TextField from '../TextField';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this._handleChange.bind(this);
      this.state = {
        value: ""
      };
    }
    _handleChange({ value }) {
      this.setState({ value });
    }
    render() {
      return (
        <Box>
          <Box marginBottom={2}>
            <Label htmlFor="email">
              <Text>Email</Text>
            </Label>
          </Box>
          <TextField
            id="email"
            onChange={this.handleChange}
            placeholder="Email Address"
            value={this.state.value}
            type="email"
          />
        </Box>
      );
    }
  }

storiesOf('TextField').add('Default', ()=>
  <Example></Example>
);