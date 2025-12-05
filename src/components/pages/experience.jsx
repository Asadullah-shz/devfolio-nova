import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import Card2 from '../../ui/cards/card2.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx'

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

]
function Experience() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }} >
            <MovingParticleBackground
                particleCount={50}
                glowColor={'200, 200, 200'}
            />

            <div className="text-white containerz mb-1">
                <h1 className='mx-15 text-4xl p-2 pt-5'>Experience</h1>
                <p className='text-1xl text-neutral-500 p-2 mx-15'>A blend of professional duty and personal passion.</p>
            </div>
            <hr className="text-neutral-700 my-7 mx-16 w-11/12" />

            <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-20 gap-20 relative ">

                <div className="flex flex-col items-center w-full ">
                    {PROJECTS_DATA.map((project, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`relative ${isLeft ? 'self-start md:ml-20' : 'self-end md:mr-20'} mt-10`}
                            >
                                <Card2 {...project} />
                                {index < PROJECTS_DATA.length - 1 && (
                                    <div
                                        className={`hidden md:block absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} w-32 h-40 border-t-2 border-${isLeft ? 'r' : 'l'}-2 border-gray-700 rounded-${isLeft ? 'tr' : 'tl'}-[3rem] ${isLeft ? '-translate-y-8 translate-x-8' : '-translate-y-8 -translate-x-8'} pointer-events-none opacity-50`}
                                    ></div>
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