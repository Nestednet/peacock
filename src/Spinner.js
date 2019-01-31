// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js';
import Icon from './Icon.js';
import styles from './Spinner.module.css';

const SIZE = 40;

type Props = {|
  accessibilityLabel: string,
  show: boolean,
|};

export default function Spinner({ accessibilityLabel, show }: Props) {
  return show ? (
      <div className={styles.spinner}>
        <div className={styles.dot}></div>
        <div className={styles.circle}></div>
      </div>
  ) : (
    <div />
  );
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
};
