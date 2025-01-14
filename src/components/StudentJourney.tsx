const StudentJourney = () => {
    return (
        <section className="relative py-10 md:py-20 px-4 md:px-7 lg:px-14 text-center">
            {/* Background Video */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                Student Journey
            </h2>
            <div className='bg-[#FFFF] w-20 h-[3px] mx-auto mt-1 mb-6'></div>
            <div className="relative overflow-hidden">
                <video
                    className="w-auto h-auto max-h-[calc(100vh-200px)] mx-auto object-cover object-center rounded-md"
                    loop
                    autoPlay
                    muted
                    width={1920}
                    height={1080}
                >
                    <source src="/student-journey.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default StudentJourney;
