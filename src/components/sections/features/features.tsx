import React from 'react'
import Container from '@/components/container'
import { GraduationCap, Wrench, AlarmClock } from 'lucide-react';
import FeatureCard from '@/components/ui/cardFeature';
import { features } from '@/consts';

// const features = [
//   {
//     iconName: "GraduationCap",
//     title: "Expert",
//     description: "Seasoned intelligence professionals"
//   },
//   {
//     iconName: "AlarmClock",
//     title: "Rapid Response",
//     description: "24/7 operational support"
//   },
//   {
//     iconName: "Wrench",
//     title: "Advanced Tools",
//     description: "Cutting-edge analytics platform"
//   }
// ];

export default function Features() {
  return (
    <div className="relative bg-secondary-light/90 py-12">

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url("./images/bg/bg-3.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: "center",
        }}
      />

      <Container className='px-8'>
        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.iconName}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

