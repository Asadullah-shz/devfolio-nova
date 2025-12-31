import MovingParticleBackground from '../components/animations/movingparticalbg.jsx';

const FlowingButton = () => (
  <button className="relative px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium text-white transition-all duration-300 ease-out bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50">
    Go Home
  </button>
);

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <MovingParticleBackground
        particleCount={50}
        glowColor={'200, 200, 200'}
      />


      <div className="relative z-10 p-6 sm:p-8 text-center text-white backdrop-blur-sm bg-black/40 rounded-2xl sm:rounded-3xl border border-gray-700 shadow-2xl max-w-xl w-full mx-4 transition-all duration-500 hover:scale-[1.02]">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">


          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gray-300 animate-pulse-slow">
            404
          </h1>


          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-gray-100">
            Page Not Found
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-sm px-4 sm:px-0">
            You've ventured into the unknown. The page you are looking for has vanished into the digital ether.
          </p>


          <a href="/" className="pt-2 sm:pt-4">
            <FlowingButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;