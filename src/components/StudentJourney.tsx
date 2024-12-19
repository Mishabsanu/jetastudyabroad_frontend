import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const StudentJourney = () => {
    const player = useMemo(
        () => (
            <ReactPlayer
                url="/student-journey.mp4"
                playing
                loop
                muted
                controls={false}
                width="100%"
                height="100%"
            />
        ),
        []
    );

    return (
        <section className="py-20 px-4 md:px-7 lg:px-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Student Journey
            </h2>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                {player}
            </div>
        </section>
    );
};

export default StudentJourney;
