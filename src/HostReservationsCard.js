import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Box from './Box.js';
import Icon from '../Icon';
import Text from '../Text';
import { ReactComponent } from '*.svg';

type Props = {|
    fee: number,
    host_income: number,
    people: number,
    price: number,
    renting_period: string,
    renting_duration: number,
    space_name:string,
    stage: string,
|};


export default class HostReservationCard extends ReactComponent<



