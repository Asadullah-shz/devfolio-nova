
import { Divider, Dropdown, Space, theme } from "antd";
import FlowingButton from '../ui/flowingbutton'

const { useToken } = theme;

const HeroPage = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen text-white z-10"
            style={{
                backgroundColor: 'transparent',
                fontFamily: 'sans-serif'
            }}
        >
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                    width: '50vw',
                    height: '50vw',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    background: 'radial-gradient(circle, rgba(67, 65, 69, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: -1,
                }}
            />

            <main className="flex flex-col items-center max-w-4xl px-4">
                <h1 className="text-white italic font-exo-2" style={{
                    fontSize: '7.5rem',
                    lineHeight: 1,
                    letterSpacing: '-0.025em',
                    userSelect: 'none',
                    fontFamily: 'exo-2',
                }}>
                    Asad
                </h1>

                <p className="mt-8 text-lg text-gray-400 text-center max-w-xl">
                    I engineer high-performance{' '}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#9d63ff',
                            borderBottom: '1px solid rgba(157, 99, 255, 0.5)'
                        }}
                        className="hover:text-white transition duration-200"
                    >
                        Web Apps
                    </a>{' '}
                    that blend seamless user experiences with scalable architecture.
                </p>
            </main>

            <FlowingButton />
        </div>
    );
};

export default HeroPage;