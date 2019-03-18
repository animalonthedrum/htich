import React, { Component } from 'react'
import SplitText from 'react-pose-text';


const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 90
    }
  };

export default class AnimateText extends Component {
  render() {
    return (
      <div>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            React Pose Text
        </SplitText>
      </div>
    )
  }
}
