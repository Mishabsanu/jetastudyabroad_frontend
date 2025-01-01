const StudentJourney = () => {
    return (
        <section className="relative px-4 md:px-7 lg:px-14 text-center">
            {/* Background Video */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Student Journey
            </h2>
            <video
                className="w-auto h-auto object-cover object-center"
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
