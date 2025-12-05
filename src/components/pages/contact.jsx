import Card from '../../ui/cards/card.jsx'
import React from 'react'
import FlowingButton from '../../ui/flowingbutton.jsx'
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';

const contact = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />
      <div className='flex-row flex-wrap justify-center gap-4 '>

        <div className="text-white containerz mb-1">
          <h1 className='mx-15 text-4xl p-2 pt-5'>Contact</h1>
          <p className='text-1xl text-neutral-500 p-2 mx-15'>The conversation starts here. Connect with me.</p>
        </div>
        <hr className="text-neutral-700 my-7 mx-16 w-11/12" />
        <Card title="" />
      </div>
      <FlowingButton />
    </div>
  )
}

export default contact