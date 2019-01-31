import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Box } from '../Box';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Text from '../Text';
import Button from '../Button';


class SpinnerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.setState(prevState => ({
      ...prevState,
      show: !prevState.show
    }));
  }
  render() {
    return (
      <Box>
        <Box paddingY={2}>
          <Button
            inline
            text={!this.state.show ? "Show spinner" : "Hide spinner"}
            onClick={this.handleClick}
            size="md"
          />
        </Box>
        <Spinner show={this.state.show} accessibilityLabel="Example spinner" />
      </Box>
    );
  }
}

storiesOf('Spinner').add("default",()=>
    <SpinnerExample></SpinnerExample>
)