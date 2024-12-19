import dynamic from "next/dynamic";

// Dynamically import React Player without SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const StudentJourney = () => {
    return (
        <section className="py-20 px-4 md:px-7 lg:px-14 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Student Journey
            </h2>

            {/* Responsive Video Player */}
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                <ReactPlayer
                    url="/student-journey.mp4" // Replace with your video URL
                    playing
                    loop
                    muted // Add this line to enable autoplay
                    controls={false}
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
};

export default StudentJourney;
