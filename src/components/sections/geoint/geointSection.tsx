import React from 'react';
import Geoint from './geoint';

function GeointSection() {
  return (
    <section className="bg-accent"
      style={{
        clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 95%)"
      }}>
      <Geoint />
    </section>
  )
}

export default GeointSection;