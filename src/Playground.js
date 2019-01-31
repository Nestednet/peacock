import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Card.module.css';


import Avatar from './Avatar.js';
import Badge from './Badge.js';
import Box from './Box.js';
import Icon from './Icon.js';
import Image from './Image.js';
import Mask from './Mask.js';
import Text from './Text.js';
import SelectList from './SelectList.js';


type Props = { |
  avatarComponent ? : React.node.Avatar,
  |
}

export default class Playground extends React.Component < Props, State > {
  static propTypes = {
    avatarComponent: PropTypes.Avatar,
  }

  render() {
    const {
      avatarComponent
    } = this.props;

    return (
      avatarComponent
    );
  }
}
