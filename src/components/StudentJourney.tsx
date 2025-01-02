const StudentJourney = () => {
    return (
        <section className="relative px-4 md:px-7 lg:px-14 text-center">
            {/* Background Video */}
            <h2 className="text-3xl md:text-4xl font-bold text-black">
                Student Journey
            </h2>
            <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mt-1 mb-6'></div>
            <video
                className="w-auto h-auto max-h-[calc(100vh-200px)] mx-auto object-cover object-center"
                loop
                autoPlay
                muted
            >
                <source src="/student-journey.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default StudentJourney;
