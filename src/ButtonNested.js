import * as React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';
import styles from './Button.module.css';
import Box from './Box.js';
import Text from './Text.js';
import Icon from './Icon.js';

type Props = {|
    accessibilityExpanded?: boolean,
    accessibilityHaspopup?: boolean,
    accessibilityLabel?: string,
    color?: 'green', //TODO: assignar als colors de nested
    disabled?: boolean,
    inline?: boolean,
    name?: string,
    onClick?: ({ event: SyntheticMouseEvent }) => void,
    size?: 'sm' | 'md' |'lg',
    text: string,
    type?: 'submit' | 'button',
    isPill?: boolean,
    buttonIcon?: string,
|};



export default function Button(props: Props) {
    const{
        accessibilityExpanded,
        accessibilityHaspopup,
        accessibilityLabel,
        color = 'green',
        disabled = false,
        inline = false,
        isPill = false,
        buttonIcon,
        name,
        onClick,
        size = 'md',
        text,
        type = 'button',
    } = props;

    const textColor = {
        blue: 'white',
        gray: 'darkGray',
        red: 'white',
        transparent: 'white',
        white: 'darkGray',
        green: 'white',
    };

    const classes = classnames(styles.button, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.solid]: color !== 'transparent',
        [styles[color]]: !disabled,
        [styles.disabled]: disabled,
        [styles.enabled]: !disabled,
        [styles.inline]: inline,
        [styles.block]: !inline,
        [styles.pill]: isPill,
    });
    

    return(
        <button 
            aria-expanded = {accessibilityExpanded}
            aria-haspopup = {accessibilityHaspopup}
            aria-label = {accessibilityLabel}
            className = {classes}
            disabled = {disabled}
            name = {name}
            onClick = {event => onClick && onClick({ event })}
            type={type}    
        >
            {buttonIcon && 
                <Box
                    position="relative"
                    display = "flex"
                    direction = "row"
                    alignItems = "center"
                >
                    <Icon icon={buttonIcon} accessibilityLabel={buttonIcon} color={disabled ? 'gray' : textColor[color]} /> 
                    <Text align = "center" color={disabled ? 'gray' : textColor[color]} overflow = "normal" size={size} >
                        {text}
                    </Text>
                    
                </Box>
                              
            }
            {!buttonIcon &&
                <Text
                    align = "center"
                    color={disabled ? 'gray' : textColor[color]}
                    overflow = "normal"
                    size={size}
                >
                    {text}
                </Text>
            
            }

        </button>
    );

}

Button.propTypes = {
    accessibilityExpanded: PropTypes.bool,
    accessibilityHaspopup: PropTypes.bool,
    accessibilityLable: PropTypes.string, 
    color: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white', 'green']),
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit']),
    isPill: PropTypes.bool,
    buttonIcon: PropTypes.string,
};
