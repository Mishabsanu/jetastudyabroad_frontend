const StudentJourney = () => {
    return (
        <section className="relative py-10 md:py-20 px-4 md:px-7 lg:px-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
                Student Journey
            </h2>
            <div className="bg-[#0f75bc] w-20 h-[3px] mx-auto mt-1 mb-6"></div>
            <div className="relative overflow-hidden">
                <video
                    className="max-h-[calc(100vh-200px)]"
                    loop
                    autoPlay
                    muted
                    preload="auto"
                    width={1920}
                    height={1080}
                >
                    <source src="/student-journey.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Please upgrade your browser.
                </video>
            </div>
        </section>
    );
};

export default StudentJourney;
