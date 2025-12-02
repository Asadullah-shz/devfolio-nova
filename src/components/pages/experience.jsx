import MovingParticleBackground from '../../ui/animations/movingparticalbg.jsx';
import Card2 from '../../ui/card2.jsx';
import FlowingButton from '../../ui/flowingbutton.jsx'
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

            <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-20 gap-20 relative">

                <div className="self-start md:ml-20 relative">
                    <Card2 />
                    <div className="hidden md:block absolute top-1/2 left-full w-32 h-40 border-t-2 border-r-2 border-gray-700 rounded-tr-[3rem] -translate-y-8 translate-x-8 pointer-events-none opacity-50"></div>
                </div>


                <div className="self-end md:mr-20 -mt-20 relative">
                    <Card2 />

                    <div className="hidden md:block absolute top-1/2 right-full w-32 h-40 border-t-2 border-l-2 border-gray-700 rounded-tl-[3rem] -translate-y-8 -translate-x-8 pointer-events-none opacity-50"></div>
                </div>


                <div className="self-start md:ml-20 -mt-20 relative">
                    <Card2 />
                    <div className="hidden md:block absolute top-1/2 left-full w-32 h-40 border-t-2 border-r-2 border-gray-700 rounded-tr-[3rem] -translate-y-8 translate-x-8 pointer-events-none opacity-50"></div>
                </div>

                <div className="self-end md:mr-20 -mt-20 relative">
                    <Card2 />
                </div>
            </div>

            <FlowingButton />
        </div>
    );
}

export default Experience;