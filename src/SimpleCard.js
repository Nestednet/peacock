import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from './Box.js';
import Avatar from './Avatar.js';
import styles from './Card.module.css';
import Text from './Text.js';
import Mask from './Mask.js';
import Image from './Image.js';

type Props = {|
    srcImage?: string,
    highlight?: 'left' | 'right' | 'top' | 'bottom',
    title?: string,
    description?: string,
    inverted?: bool,
    avatar?: bool,
|};


export default class SimpleCard extends React.Component<Props, State> {
    static propTypes = {
        src: PropTypes.string,
        highlight: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
        title: PropTypes.string,
        description: PropTypes.string,
        inverted: PropTypes.bool,
        avatar: PropTypes.bool,
    }

    render() {
        const { srcImage, highlight, title, description, inverted = false, avatar = false} = this.props;
        
        const classes = classnames(styles.card, {
            // If, like @chrislloyd, you can't remember Javascript equality rules,
            // == null checks for `null` or `undefined` and leaves out `false`.
            [styles.highlightLeft]: highlight === 'left',
            [styles.highlightRight]: highlight === 'right',
            [styles.highlightTop]: highlight === 'top',
            [styles.highlightBottom]: highlight === 'bottom',
            [styles.hover]: true,
          });

        var position = "relative"
        var display = avatar ? "flex" : "block";
        var direction = avatar ? "row" : "column";
        var align = (srcImage && !avatar) || (!srcImage) ? "center" : "";
        
        return(
            <Box
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                position={position}
                display={display}
                direction={direction}
            >
                {srcImage && avatar && <Avatar size="lg" src={srcImage} name="Keerthi" profile='user'/> }
                {srcImage && !avatar && <Image alt = "nested" naturalHeight = {1} naturalWidth={1} src = {srcImage}></Image>}
                
                <Box>
                    {inverted && <Text align = {align} size="md"><Box paddingX={3}>{description}</Box></Text>}
                    <Text align={align} bold size="xl">
                        {inverted  && <Box paddingX={3}> {title} </Box> }
                        {!inverted && <Box paddingX={3} paddingY={2}>{title}</Box>}
                    </Text>
                    {!inverted && <Text align = {align} size="md"><Box paddingX={3}>{description}</Box></Text>}
                </Box>
                <div className={classes} />
            </Box>    
            
            
        );

          
    }
}