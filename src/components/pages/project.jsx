import React from 'react'
import MagicBento from '../../ui/animations/magicbento.jsx'
import TechProjectsBento from '../../ui/animations/techproject.jsx'
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx'

const project = () => {
  const myCustomCardData = [
    {
      color: '#141416b1',
      title: 'Devfolio',
      description: 'A modern, responsive portfolio template designed for developers to showcase their work and skills.',
      label: 'Dec 4, 2025',
      // views: '3.1K',
      url: 'https://github.com/Asadullah-shz/dev-folio',
    },
    {
      color: '#141416b1',
      title: 'Ecommerce2.0 ',
      description: 'A scalable, feature-rich e-commerce platform with real-time inventory, secure payments, and an intuitive user interface.',
      label: 'Oct 28, 2025',
      // views: '3.1K',
      url: 'https://github.com/Asadullah-shz/Ecommerce2.0',
    },
    {
      color: '#141416b1',
      title: 'Portfolio',
      description: 'A comprehensive showcase of my personal projects, case studies, and technical achievements, demonstrating my journey as a developer.',
      label: 'Aug 06, 2025',
      //  views: '3.1K',
      url: 'https://github.com/Asadullah-shz/Devfolio',
    },
    {
      color: '#141416b1',
      title: 'Pixel Hub',
      description: 'A comprehensive digital marketplace built for creators to sell digital assets. Features include instant delivery, secure payment processing, and a customizable storefront.',
      label: 'Jul 21, 2025',
      // views: '3.1K',
      url: 'https://github.com/Asadullah-shz/Pixel-Hub',
    },
    {
      color: '#141416',
      title: 'Banking System',
      description: 'A secure and user-friendly banking system with features such as account management, transaction history, and secure payments.',
      label: 'Jul 21, 2025',
      //  views: '3.1K',
      url: 'https://github.com/Asadullah-shz/Banking-2.0',
    },
    {
      color: '#141416',
      title: 'Security System',
      description: 'A secure and user-friendly security system with features such as access control, monitoring, and alerting.',
      label: 'March 09, 2025',
      // views: '3.1K',
      url: 'https://github.com/Asadullah-shz/Security-System',
    },

  ];
  const myNewProjects = [
    // {
    //   color: '#141416b1',
    //   title: 'Asad',
    //   description: 'Zodbird is an e2e typed tinybird.co client library for typescript, leveraging zod for type safety and transformations',
    //   date: 'May 21, 2023',
    //   views: '7.6K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'chronark.com',
    //   description: 'The website you\'re looking at',
    //   date: 'Mar 28, 2023',
    //   views: '7.7K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'Upstash Core Analytics',
    //   description: 'Low level utilities to build analytics tools on top of Redis.',
    //   date: 'Feb 13, 2023',
    //   views: '2.6K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'React.js CLI',
    //   description: 'A CLI React component to interact with Upstash Redis databases.',
    //   date: 'Feb 5, 2023',
    //   views: '3.1K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'envshare.dev',
    //   description: 'EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.',
    //   date: 'Jan 16, 2023',
    //   views: '5.4K'
    // },
    // {
    //   color: '#141416b1',
    //   title: '@upstash/edge-flags',
    //   description: 'Feature flags for your edge functions.',
    //   date: 'Dec 12, 2022',
    //   views: '1.3K'
    // },
    // {
    //   color: '#141416b1',
    //   title: '@chronark/access',
    //   description: 'A minimal library for access control. It is designed to be used together with opaque access tokens by providing a simple interface to define roles with different access permissions and verifying requests to resources.',
    //   date: 'Nov 13, 2022',
    //   views: '2.4K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'QStash',
    //   description: 'QStash is a fully managed serverless queue and messaging service designed for the serverless era.',
    //   date: 'Jul 18, 2022',
    //   views: '4.8K'
    // },
    // {
    //   color: '#141416b1',
    //   title: '@upstash/qstash',
    //   description: 'A typescript client and consumer for QStash.',
    //   date: 'Jul 18, 2022',
    //   views: '1.4K'
    // },
    // {
    //   color: '#141416b1',
    //   title: 'envshare.dev',
    //   description: 'EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.',
    //   date: 'Jan 16, 2023',
    //   views: '5.4K'
    // },
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />
      <div className="overflow-x-hidden containerz">
        <div className="text-white containerz mb-1">
          <h1 className='mx-15 text-4xl p-2 pt-5'>Projects</h1>
          <p className='text-1xl text-neutral-500 p-2 mx-15'>Some of the projects are from work and some are on my own time.</p>
        </div>
        <hr className="text-neutral-700 my-7 mx-16 w-11/12" />
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
        <hr className="text-neutral-700 my-7 mx-16 p-5 w-11/12" />
        <TechProjectsBento projectsData={myNewProjects} />
        <div className='h-20'></div>

      </div>
      <FlowingButton />
    </div>
  )
}

export default project