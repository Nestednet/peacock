import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Card.module.css';


import Avatar from './Avatar.js';
import Badge from './Badge.js';
import Box from './Box.js';
import Icon from './Icon.js';
import Text from './Text.js';
import SelectList from './SelectList.js';


type Props = {|
    media?: string,
    title: string,
    subtitle: React.node,
    iconInfo1: string,
    iconInfo2: string,
    messageInfo1: string,
    messageInfo2: string,    
    nameSelector: string,
    

|}

export default class ComposedCard extends React.Component<Props, State>{
    static propTypes = {
        media: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.node.Text,
        iconInfo1: PropTypes.string,
        iconInfo2: PropTypes.string,
        messageInfo1: PropTypes.string,
        messageInfo2: PropTypes.string,
        nameSelector: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.handleChange = this._handleChange.bind(this);
        this.state = {
          city: "def"
        }
      }

    _handleChange({ value }) {
        this.setState({
          city: value,
        })
    }
    

    render(){


        const{
           media, title, subtitle, iconInfo1, iconInfo2, messageInfo1, messageInfo2, nameSelector
        } = this.props;

        const cityOptions = [
            {
                value: "def",
                label: nameSelector
            },
            {
              value: "bos",
              label: "Boston"
            },
            {
              value: "la",
              label: "Los Angeles"
            },
            {
              value: "sf",
              label: "San Francisco"
            }
        ]

        const classes = classnames(styles.card, {
            // If, like @chrislloyd, you can't remember Javascript equality rules,
            // == null checks for `null` or `undefined` and leaves out `false`.
            [styles.bordered]: true,
          });

        return(
            <Box width = {460} height = {190} position = "relative">
                <Box display = "flex" direction = "row" paddingY = {6} paddingX = {5}>
                    <Box display = {"block"} position={"absolute"} top right padding={4} >
                        <Badge status={'alarm'}>Payment failed</Badge>
                    </Box>
                    <Box paddingX = {3} paddingY = {2}>
                        <Avatar size ="lg"></Avatar>
                    </Box>
                    <Box>
                        <Text bold size="md">
                            <Box paddingX={3} paddingY={2}>
                                {title}
                            </Box>
                        </Text>
                        <Box paddingX={3}>{subtitle}</Box>
                        <Box paddingX={3}display = "flex" direction = "row">
                            <Icon size = {12} icon = {iconInfo1} color = "gray"/>
                            <Text size = "xs">{messageInfo1}</Text>
                            <Box paddingX={3} display = "flex" direction = "row">
                                <Icon size = {12} icon = {iconInfo1} color = "gray"/>
                                <Text size = "xs">{messageInfo2}</Text> 
                            </Box>
                        </Box>

                    </Box>
                    
                    

                </Box>
                <Box paddingY = {5}>
                    <SelectList
                        id="city"
                        name="city"
                        onChange={this.handleChange}
                        options={cityOptions}
                        placeholder="Select city"
                        value={this.state.city}
                    />
                </Box>
                <div className = {classes} />
            </Box>

        );
    }
}