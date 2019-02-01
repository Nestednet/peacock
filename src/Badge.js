import * as React from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js'
import classnames from 'classnames';
import styles from './Badge.module.css';

const SIZE_SCALE: { [size: ?string]: number } = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  };

type Props = {|
    align?: 'left' | 'right' | 'center' | 'justify',
    status?: 'warning' | 'alarm' | 'good' | 'info' ,
    inline?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    shape?: 'pill' | 'rounded-rectangle'
|};

export default function Badge({
    align = 'center',
    status = 'info',
    shape = 'pill',
    children,
    inline = true,
    size = 'md',
}: Props) {
    const scale = SIZE_SCALE[size];

    const classes = classnames(
        styles.badge,
        styles[shape],
        styles[status],
      );

    const Tag = inline ? 'span' : 'div';
    return (
        <Tag className={classes}>{children}</Tag>
    );
}

Badge.propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    status: PropTypes.oneOf(['warning', 'alarm', 'good', 'info']),
    inline: PropTypes.bool,
    children: PropTypes.node,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

