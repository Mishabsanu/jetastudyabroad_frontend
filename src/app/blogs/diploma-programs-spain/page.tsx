// app/blog/diploma-programs-spain/page.jsx
import React from 'react';

export const metadata = {
    title: "Spain's Finest Diploma Programs",
    description: "Explore Spain's top diploma programs in Tourism Management and Spanish Cuisine, offering immersive education and rich cultural experiences.",
};

export default function DiplomaProgramsSpain() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header Section */}
            <header className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Start Your Adventure: Presenting Spain&apos;s Finest Diploma Programs
                </h1>
                <img
                    src="/spain-diploma-banner.png"
                    alt="Diploma Programs in Spain"
                    className="w-full h-auto rounded-lg shadow-md mb-8"
                />
            </header>

            {/* Introduction */}
            <section className="mb-8">
                <p>
                    Spain offers a unique blend of culture, education, and opportunities. Whether you&apos;re passionate about tourism or culinary arts, the Diploma in Tourism Management and the Diploma in Spanish Cuisine are designed to set you apart.
                </p>
            </section>

            {/* Tourism Management Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Diploma in Tourism Management</h2>
                <p>
                    Dive into a vibrant learning environment with a mix of language lessons, practical work, and insightful lectures. The program also includes a hands-on internship to solidify your skills.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><strong>Duration:</strong> 12 months (Face-to-Face)</li>
                    <li><strong>Language Training:</strong> 260 hours (A1 & A2 levels)</li>
                    <li><strong>Hospitality Studies:</strong> 340 hours</li>
                    <li><strong>Internship:</strong> 480 hours with accommodation, meals, and €300 stipend</li>
                    <li><strong>Cost:</strong> €5,500 (+ €500 reservation fee)</li>
                </ul>
            </section>

            {/* Spanish Cuisine Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Diploma in Spanish Cuisine</h2>
                <p>
                    Experience the essence of Mediterranean cuisine while mastering modern culinary techniques. This program combines classroom learning with internships at top Spanish restaurants.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><strong>Duration:</strong> 12 months (Face-to-Face)</li>
                    <li><strong>Language Training:</strong> 260 hours (A1 & A2 levels)</li>
                    <li><strong>Culinary Arts:</strong> 340 hours</li>
                    <li><strong>Internship:</strong> 480 hours with accommodation, meals, and €300 stipend</li>
                    <li><strong>Cost:</strong> €5,500 (+ €500 booking deposit)</li>
                </ul>
            </section>

            {/* Why Spain Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Spain?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>International Recognition:</strong> Diplomas accredited by Spain&apos;s Ministry of Labor.</li>
                    <li><strong>Extensive Internships:</strong> Real-world preparation with hands-on experience.</li>
                    <li><strong>Cultural Immersion:</strong> Learn Spanish and embrace the Spanish lifestyle.</li>
                    <li><strong>Affordable Excellence:</strong> High-quality education with financial support options.</li>
                </ul>
            </section>

            {/* Conclusion */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Take the First Step Today</h2>
                <p>
                    Jeta Study Abroad is here to make your journey to Spain seamless. From program counseling to visa assistance, we provide end-to-end support. Contact us today and let’s turn your dream into reality!
                </p>
            </section>

        </div>
    );
}
