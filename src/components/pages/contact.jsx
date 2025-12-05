import Card from '../../ui/cards/card.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx';
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />

      <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8'>

        <div className="text-white w-full mb-1">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl mx-15 p-2 pt-5 font-bold'>
            Contact
          </h1>
          <p className='text-sm sm:text-base lg:text-xl mx-15 text-neutral-500 p-2'>
            The conversation starts here. Connect with me.
          </p>
        </div>


        <hr className="text-neutral-700 my-4 sm:my-7 w-full max-w-7xl" />


        <div className="w-full max-w-7xl">
          <Card title="" />
        </div>
      </div>

      <FlowingButton />
    </div>
  );
};

export default Contact;