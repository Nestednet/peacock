import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from './Box.js';
import styles from './Card.module.css';
import Text from './Text.js';
import Image from './Image.js';


type Props = {|
    src?: string,
    highlight?: 'left' | 'right' | 'top' | 'bottom',
    title?: string,
    description?: string
|};


export default class CardNested extends React.Component<Props, State> {
    static propTypes = {
        src: PropTypes.string,
        highlight: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
        title: PropTypes.string,
        description: PropTypes.string,
    }

    render() {
        const { src, highlight, title, description } = this.props;
        const classes = classnames(styles.card, {
            // If, like @chrislloyd, you can't remember Javascript equality rules,
            // == null checks for `null` or `undefined` and leaves out `false`.
            [styles.hover]: true,
          });

        return(
            <Box
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            position="relative"
            >
            <Image alt = {"nested"} naturalHeight = {1} naturalWidth={1} src = {src}></Image>
            <Box>
            <Text align="center" bold size="xl">
                <Box paddingX={3} paddingY={2}>
                 {title}
                </Box>
            </Text>
            <Text align = "center">{description}</Text>
            </Box>
            <div className={classes} />
            </Box>
        );
    }
}