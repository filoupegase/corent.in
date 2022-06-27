import React from 'react';
import { styled } from './lib/styles/stitches.config';


const App = () => {
  return (
      <>
        <Heading1>
          Hi there! I'm Coco
          {/*<Wave>👋</Wave>*/ }
        </Heading1>
        <h2>
          I'm a frontend web developer based in Paris, France
        </h2>
      </>
  );
}

const Heading1 = styled("h1", {
  margin: '0 0 0.5em -1px'
})

export default App;
