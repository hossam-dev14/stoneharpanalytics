import React from 'react';
import OurMission from './ourMission';

export default function OurMissionSection() {
  return (
    <section
      className="bg-accent"
      style={{
        clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 95%)"
      }}>
      <OurMission />
    </section >
  );
}
