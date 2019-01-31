import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from './Box.js';
import Avatar from './Avatar.js';
import styles from './Card.module.css';
import Text from './Text.js';
import Mask from './Mask.js';
import Image from './Image.js';
import Divider from './Divider.js';
import Icon from './Icon.js';

type Props = {|
    avatar? : bool, 
    bold? : bool,
    centered? : bool,
    children? : React.Node,
    description? : string,
    divider? : bool,
    highlight? : 'left' | 'right' | 'top' | 'bottom',
    inverted? : boolean, 
    title? : string,
    titleColor? : string,
    srcImage? : string,
    subtitleColor? : string,
|};

export default class DecoratedCard extends React.Component<Props, State> {
    static propTypes = {
        srcImage  : PropTypes.string,
        highlight  : PropTypes.oneOf(['left' , 'right' , 'top' , 'bottom']),
        title  : PropTypes.string,
        descriptino  : PropTypes.string,
        inverted  : PropTypes.bool,
        avatar  : PropTypes.bool, 
        children : PropTypes.node,
        titleColor : PropTypes.string,
        subtitleColor : PropTypes.string,
        centered : PropTypes.bool,
        bold : PropTypes.bool, 
        divider: PropTypes.bool, 
    }

    render(){
        const {
            srcImage, highlight, title, description, children, 
            bold = false,
            centered = true,
            inverted = false, 
            avatar = false,  titleColor = "darkGray", subtitleColor = "gray"} = this.props;
        
        
        const classes = classnames(styles.card, {
            // If, like @chrislloyd, you can't remember Javascript equality rules,
            // == null checks for `null` or `undefined` and leaves out `false`.
            [styles.highlightLeft]: highlight === 'left',
            [styles.highlightRight]: highlight === 'right',
            [styles.highlightTop]: highlight === 'top',
            [styles.highlightBottom]: highlight === 'bottom',
            [styles.hover]: true,
          });

          var align = centered ? "center" : ""; 
          
          var lujo = "https://www.arqhys.com/wp-content/fotos/2011/07/Fotos-de-apartamentos-lujosos.jpg";
          if (!srcImage){
              return(
                <Box width = {215} height = {240} position = "relative" >
                    
                    <Mask width = {215} height = {140}>
                        <Image alt = "Luxury Nested" naturalWidth={1} naturalHeight = {1} src = {lujo}></Image>
                    </Mask>
                    <Box shape="roundedLeft" color ="pine" maxWidth={70} position="absolute" right top marginY = {12}> 
                        <Text bold color ="navy"> 11€/day</Text>
                    </Box>
                    <Box paddingX = {3}>
                        <Text size = "xs" bold>La mesa de Palaua init</Text>
                        <Text size = "xs">Horta, Barcelona</Text>
                        <Box paddingY = {3} display = "flex" direction = "row"> 
                            <Box display = "flex" direction = "row">
                                <Icon size = {12} icon="pin" accessibilityLabel="Pin" color="darkGray"></Icon>
                                <Text size = "xs">14 People</Text>
                            </Box>
                            <Box display = "flex" direction = "row">
                                <Icon size ={12} icon="pin" accessibilityLabel="Pin" color="darkGray"></Icon>
                                <Text size = "xs">Desk</Text>
                            </Box>
                        </Box>
        
                    </Box>
                    <div className={classes} />
                </Box>    
              )
          }
          

          return(
            <Box
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            position="relative"
            display = "flex"
            direction = "row"
            >
                { srcImage && 
                     <Avatar
                     size="lg"
                     src={srcImage}
                     name="Keerthi"
                     profile='company'
                     />
                }
                
                <Box>
                    {inverted && <Text align = {align} size="sm" color = {subtitleColor}>{description}</Text>}
                    <Text align= {align} bold={bold} size="xl" color={titleColor}>
                        <Box paddingX={3} paddingY={2}>
                        {title}
                        </Box>
                    </Text>
                    {!inverted && 
                        <Text align = {align} size="sm" color = {subtitleColor}>
                            {!centered && <Box paddingX = {3}> {description}</Box> }
                            {centered && {description}}
                        </Text>}

                    {children &&<Divider/>}
                    {children && <Box>{children}</Box>}

                </Box>
                <div className={classes} />
            </Box>    
          );
    }
}
