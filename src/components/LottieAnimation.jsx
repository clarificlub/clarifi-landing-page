import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = ({ animationPath, style }) => {
  return (
    <Player
      autoplay
      loop
      src={animationPath}
      style={style}
    />
  );
};

export default LottieAnimation;