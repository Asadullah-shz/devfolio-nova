import React from 'react'
import MagicBento from '../../ui/animations/magicbento.jsx'
import TechProjectsBento from '../../ui/animations/techproject.jsx'
import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx'

const project = () => {
  const myCustomCardData = [
  {
    color: '#141416b1',
    title: 'Analytics',
    description: 'Track user behavior im asad from pakkistan who are u mf',
    label: 'May 21, 2023',
    views: '3.1K',
  },
  {
    color: '#141416b1',
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Feb 5, 2023',
    views: '3.1K',
  },
  {
    color: '#141416b1',
    title: 'Collaboration',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora totam ipsa aperiam facilis non dolor consequatur necessitatibus minima reiciendis blanditiis incidunt perspiciatis, sint aut laudantium laboriosam eos esse quisquam voluptatibus officia repudiandae? Et, molestias! Deserunt velit, sit, eligendi explicabo molestias sequi assumenda necessitatibus quam consequuntur harum atque, commodi nisi placeat vitae asperiores officia ipsa dicta nulla delectus! Consequatur, rem praesentium corporis iure non asperiores, impedit sequi tenetur facere a ipsam! Consectetur repellat corporis placeat asperiores voluptatum eligendi reprehenderit doloribus nesciunt, totam molestiae facere magnam animi eaque quidem harum at!',
    label: 'Teamwork',
    views: '3.1K',
  },
  {
    color: '#141416b1',
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Feb 5, 2023',
    views: '3.1K',
  },
  {
    color: '#141416',
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Feb 5, 2023',
    views: '3.1K',
  },
  {
    color: '#141416',
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Feb 5, 2023',
    views: '3.1K',
  },
   
];
const myNewProjects = [
  {
    color: '#141416b1',
    title: 'Asad',
    description: 'Zodbird is an e2e typed tinybird.co client library for typescript, leveraging zod for type safety and transformations',
    date: 'May 21, 2023',
    views: '7.6K'
  },
  {
    color: '#141416b1',
    title: 'chronark.com',
    description: 'The website you\'re looking at',
    date: 'Mar 28, 2023',
    views: '7.7K'
  },
  {
    color: '#141416b1',
    title: 'Upstash Core Analytics',
    description: 'Low level utilities to build analytics tools on top of Redis.',
    date: 'Feb 13, 2023',
    views: '2.6K'
  },
  {
    color: '#141416b1',
    title: 'React.js CLI',
    description: 'A CLI React component to interact with Upstash Redis databases.',
    date: 'Feb 5, 2023',
    views: '3.1K'
  },
  {
    color: '#141416b1',
    title: 'envshare.dev',
    description: 'EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.',
    date: 'Jan 16, 2023',
    views: '5.4K'
  },
  {
    color: '#141416b1',
    title: '@upstash/edge-flags',
    description: 'Feature flags for your edge functions.',
    date: 'Dec 12, 2022',
    views: '1.3K'
  },
  {
    color: '#141416b1',
    title: '@chronark/access',
    description: 'A minimal library for access control. It is designed to be used together with opaque access tokens by providing a simple interface to define roles with different access permissions and verifying requests to resources.',
    date: 'Nov 13, 2022',
    views: '2.4K'
  },
  {
    color: '#141416b1',
    title: 'QStash',
    description: 'QStash is a fully managed serverless queue and messaging service designed for the serverless era.',
    date: 'Jul 18, 2022',
    views: '4.8K'
  },
  {
    color: '#141416b1',
    title: '@upstash/qstash',
    description: 'A typescript client and consumer for QStash.',
    date: 'Jul 18, 2022',
    views: '1.4K'
  },
   {
    color: '#141416b1',
    title: 'envshare.dev',
    description: 'EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.',
    date: 'Jan 16, 2023',
    views: '5.4K'
  },
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