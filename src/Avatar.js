import * as React from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js';
import Image from './Image.js';
import Mask from './Mask.js';

const DefaultAvatar = ({ name, profile, shape, onError }: { name: string, profile: string, shape: string}) => {
  
  const src = profile === 'user' ? 
  "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/user_avatar-default.jpg"
  : "https://s3-eu-west-1.amazonaws.com/nestednet-images/default-templates/avatars/company_avatar-default.jpg";

  
  return (
    <Mask shape={shape} wash>
    <Image
      alt={name}
      color="#EFEFEF"
      naturalHeight={1}
      naturalWidth={1}
      src={src}
      onError={onError}
    />
    </Mask>
  );
};

type State = {| isImageLoaded: boolean |};

type AvatarProps = {|
  name: string,
  outline?: boolean,
  size?: 'sm' | 'md' | 'lg',
  src?: string,
  profile?: string,
|};

const sizes = {
  sm: 24,
  md: 40,
  lg: 72,
};

export default class Avatar extends React.PureComponent<AvatarProps, State> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    outline: PropTypes.bool,
    src: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    profile: PropTypes.oneOf(['user' , 'company']) 
  };

  state = {
    isImageLoaded: true,
  };

  handleImageError = () => this.setState({ isImageLoaded: false });

  render() {
    const { name, outline, size, src, profile } = this.props; 
    const { isImageLoaded } = this.state;
    const width = size ? sizes[size] : '100%';
    const height = size ? sizes[size] : '';
    
    const shape = profile === 'user' ? 'circle' : 'square';

    return (
      <Box
        color="white"
        {...(outline
          ? {
              dangerouslySetInlineStyle: {
                __style: {
                  boxShadow: '0 0 0 2px #fff',
                },
              },
            }
          : {})}
        width={width}
        height={height}
        position="relative"
        shape={shape}
      >
        {src && isImageLoaded ? (
          <Mask height = {height} shape={shape} wash>
            <Image
              alt={name}
              color="#EFEFEF"
              naturalHeight={1}
              naturalWidth={1}
              src={src}
              onError={this.handleImageError}
            />
          </Mask>
        ) : (
          <DefaultAvatar name={name} profile={profile} shape={shape} onError={this.handleImageError} />
        )}
      </Box>
    );
  }
}
