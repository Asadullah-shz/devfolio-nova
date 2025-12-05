import MagicBento from '../../ui/animations/magicbento.jsx';
import TechProjectsBento from '../../ui/animations/techproject.jsx';
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx';

const Project = () => {
  const myCustomCardData = [
    {
      color: '#141416b1',
      title: 'Devfolio',
      description: 'A modern, responsive portfolio template designed for developers to showcase their work and skills.',
      label: 'Dec 4, 2025',
      url: 'https://github.com/Asadullah-shz/dev-folio',
    },
    {
      color: '#141416b1',
      title: 'Ecommerce2.0',
      description: 'A scalable, feature-rich e-commerce platform with real-time inventory, secure payments, and an intuitive user interface.',
      label: 'Oct 28, 2025',
      url: 'https://github.com/Asadullah-shz/Ecommerce2.0',
    },
    {
      color: '#141416b1',
      title: 'Portfolio',
      description: 'A comprehensive showcase of my personal projects, case studies, and technical achievements.',
      label: 'Aug 06, 2025',
      url: 'https://github.com/Asadullah-shz/Devfolio',
    },
    {
      color: '#141416b1',
      title: 'Pixel Hub',
      description: 'A comprehensive digital marketplace built for creators to sell digital assets with instant delivery.',
      label: 'Jul 21, 2025',
      url: 'https://github.com/Asadullah-shz/Pixel-Hub',
    },
    {
      color: '#141416',
      title: 'Banking System',
      description: 'A secure and user-friendly banking system with account management and transaction history.',
      label: 'Jul 21, 2025',
      url: 'https://github.com/Asadullah-shz/Banking-2.0',
    },
    {
      color: '#141416',
      title: 'Security System',
      description: 'A secure and user-friendly security system with access control, monitoring, and alerting.',
      label: 'March 09, 2025',
      url: 'https://github.com/Asadullah-shz/Security-System',
    },
  ];

  const myNewProjects = [];

  return (
    <div className="min-h-screen relative">
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />

      <div className="overflow-x-hidden">

        <div className="text-white containerz mb-1 px-4 sm:px-6 lg:px-8">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl mx-7 p-2 pt-5 font-bold'>
            Projects
          </h1>
          <p className='text-sm sm:text-base lg:text-xl mx-7 text-neutral-500 p-2'>
            Some of the projects are from work and some are on my own time.
          </p>
        </div>


        <hr className="text-neutral-700 my-4 sm:my-7 mx-4 sm:mx-8 lg:mx-16 w-[calc(100%-2rem)] sm:w-11/12" />


        <div>
          <MagicBento
            cardData={myCustomCardData}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={30}
            glowColor="158, 158, 158"
          />
        </div>

        <hr className="text-neutral-700 my-6 sm:my-10 mx-4 sm:mx-8 lg:mx-16 w-[calc(100%-2rem)] sm:w-11/12" />


        <div>
          <TechProjectsBento projectsData={myNewProjects} />
        </div>


        <div className='h-10 sm:h-16 lg:h-20'></div>
      </div>


      <FlowingButton />
    </div>
  );
};

export default Project;