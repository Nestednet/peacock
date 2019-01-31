import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Box from '../Box';
import Button from '../Button';
import Card from '../CardNested';
import ComposedCard from '../ComposedCard';
import Divider from '../Divider';
import Icon from '../Icon';
import Image from '../Image';
import Mask from '../Mask';
import Text from '../Text';
import Toast from '../Toast';

var urlImage = "https://instagram.fbcn9-1.fna.fbcdn.net/vp/6db13ca6004cae414266f8a1e520e8bd/5CC1539C/t51.2885-15/e35/c0.54.1080.1080a/s480x480/47690370_706764013057157_2395849565099235223_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net";

class ToastExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showConfirmationToast: false,
      };
      this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
    }
    handleConfirmationClick({ event }) {
      this.setState(prevState => ({ showConfirmationToast: !prevState.showConfirmationToast }));
    };
    render() {
      return (
        <Box>
          <Button
            inline
            text={ this.state.showConfirmationToast ? 'Close toast' : 'Show confirmation toast' }
            onClick={this.handleConfirmationClick}
            size='md'
          />
          <Box
            fit
            dangerouslySetInlineStyle={{
              __style: {
                bottom: 50,
                left: '50%',
                transform: 'translateX(-50%)',
              },
            }}
            paddingX={1}
            position='fixed'
          >
            {this.state.showConfirmationToast ? (
                <Toast
                  text={['Saved to', 'Home decor']}
                  thumbnail={
                    <Image
                      alt='Saved to home decor board'
                      naturalHeight={564}
                      naturalWidth={564}
                      src="https://instagram.fbcn9-1.fna.fbcdn.net/vp/6db13ca6004cae414266f8a1e520e8bd/5CC1539C/t51.2885-15/e35/c0.54.1080.1080a/s480x480/47690370_706764013057157_2395849565099235223_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net"
                    />
                  }
                />
            ) : null}
          </Box>
        </Box>
      );
    }
  }

  storiesOf("Toast")
    .add("Default", ()=>
        <ToastExample></ToastExample>
    
    
    )