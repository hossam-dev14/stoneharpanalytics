import React from 'react';
import Imint from './Imint';

function ImintSection() {
  return (
    <section className="bg-accent"
      style={{
        clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 100%)"
      }}>
      <Imint />
    </section>
  )
}

export default ImintSection;