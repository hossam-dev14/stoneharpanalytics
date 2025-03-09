import React from 'react'
import Approach from './approach'
import { bgImgs } from '@/consts'

function ApproachSection() {
  return (
    <section className=' '>
      <div className="relative bg-accent" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 105%);" }}>
        <div
          className="absolute inset-0 -z-0"
          style={{
            backgroundImage: `url("${bgImgs.img_6}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 92%)",
          }}
        />
        <Approach />
      </div>
    </section>
  )
}

export default ApproachSection