import MovingParticleBackground from '../components/animations/movingparticalbg.jsx';
import Card2 from '../components/cards/card2.jsx';
import FlowingButton from '../components/common/FlowingButton.jsx';

const PROJECTS_DATA = [
  {
    badgeText: '2024-Present',
    title: 'Web App Developer',
    subtitle: 'Scalable Full-Stack Solutions',
    description: 'Architecting and building robust web applications using modern frameworks. Focusing on performance, scalability, and delivering seamless user experiences.',
    logoText: 'APP',
    teamMembers: [
      'https://i.pravatar.cc/150?img=3',
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      'https://images.pexels.com/photos/6110/man-holiday-people-face.jpg'
    ],
  },
  {
    badgeText: '2023-2024',
    title: 'Wordpress Developer',
    subtitle: 'Custom Theme & Plugin Development',
    description: 'Developing bespoke WordPress themes and plugins to deliver tailored content management solutions. Optimizing for speed, security, and SEO.',
    logoText: 'WP',
    teamMembers: [
      'https://i.pravatar.cc/150?img=6',
      'https://i.pravatar.cc/150?img=4',
      'https://i.pravatar.cc/150?img=5',
    ],
  },
  {
    badgeText: '2021-2023',
    title: 'Web Designer',
    subtitle: 'UI/UX Design & Visual Aesthetics',
    description: 'Crafting immersive digital experiences with a focus on **user-centric design** and visual storytelling. Prioritizing intuitive interfaces and accessibility.',
    logoText: 'UI/UX',
    teamMembers: [
      'https://i.pravatar.cc/150?img=1',
      'https://i.pravatar.cc/150?img=2',
      'https://images.pexels.com/photos/31449274/pexels-photo-31449274.jpeg',
    ],
  },
];

function Experience() {
  return (
    <div className="min-h-screen relative">
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />


      <div className="text-white containerz mb-1 px-4 sm:px-6 lg:px-8">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl mx-7 p-2 pt-5 font-bold'>
          Experience
        </h1>
        <p className='text-sm sm:text-base lg:text-xl mx-7 text-neutral-500 p-2'>
          A blend of professional duty and personal passion.
        </p>
      </div>

      <hr className="text-neutral-700 my-4 sm:my-7 mx-4 sm:mx-8 lg:mx-16 w-[calc(100%-2rem)] sm:w-11/12" />


      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-20 gap-8 sm:gap-12 lg:gap-20 relative px-4 sm:px-6">


        <div className="flex flex-col items-center w-full space-y-8 sm:space-y-12 lg:space-y-16">
          {PROJECTS_DATA.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  relative w-full max-w-xl lg:max-w-md
                  ${isLeft ? 'lg:self-start lg:ml-8 xl:ml-20' : 'lg:self-end lg:mr-8 xl:mr-20'}
                `}
              >
                <Card2 {...project} />


                {index < PROJECTS_DATA.length - 1 && (
                  <div
                    className={`
                      hidden lg:block absolute top-1/2 
                      ${isLeft ? 'left-full' : 'right-full'} 
                      w-20 xl:w-32 h-32 xl:h-40 
                      border-t-2 ${isLeft ? 'border-r-2' : 'border-l-2'} 
                      border-gray-700 
                      ${isLeft ? 'rounded-tr-[3rem]' : 'rounded-tl-[3rem]'}
                      ${isLeft ? '-translate-y-8 translate-x-8' : '-translate-y-8 -translate-x-8'}
                      pointer-events-none opacity-50
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <FlowingButton />
    </div>
  );
}

export default Experience;