// app/blog/us-visa-guide-2025/page.jsx
import React from 'react';

export const metadata = {
    title: 'US Visa Guide for Studying Abroad',
    description: 'A comprehensive guide to obtaining a US student visa with step-by-step instructions and expert advice.',
};

export default function USVisaGuide() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header Section */}
            <header className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Looking for a US Visa to Study Abroad? Here is Your Complete Guide.
                </h1>
                <img
                    src="/us-visa-banner.png"
                    alt="US Visa Guide"
                    className="w-full h-auto rounded-lg shadow-md mb-8"
                />
            </header>

            {/* Introduction */}
            <section className="mb-8">
                <p>
                    Studying in the USA is the dream of many students worldwide, especially those from Kerala. The United States offers prestigious institutions and diverse cultural experiences. However, obtaining a US student visa can seem daunting. This guide aims to simplify the process.
                </p>
            </section>

            {/* Step 1 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 1: Know the Types of Student Visas</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>F-1 Visa:</strong> For full-time academic programs with options for part-time on-campus work.</li>
                    <li><strong>J-1 Visa:</strong> For cultural exchange programs and short-term studies.</li>
                    <li><strong>M-1 Visa:</strong> For vocational training programs.</li>
                </ul>
            </section>

            {/* Step 2 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 2: Apply to an SEVP-Certified School</h2>
                <p>
                    Ensure the institution is authorized to enroll foreign students. Upon acceptance, you&apos;ll receive:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Form I-20:</strong> For F-1 and M-1 visas.</li>
                    <li><strong>Form DS-2019:</strong> For J-1 visas.</li>
                </ul>
            </section>

            {/* Step 3 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 3: Pay the SEVIS Fee</h2>
                <p>
                    Pay the SEVIS fee online at <a href="https://fmjfee.com" className="text-blue-500 underline">FMJfee.com</a> and save the receipt.
                </p>
            </section>

            {/* Step 4 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 4: Fill Out the DS-160 Form</h2>
                <p>
                    Complete the DS-160 Nonimmigrant Visa Application Form. Consult an expert to avoid mistakes.
                </p>
            </section>

            {/* Step 5 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 5: Schedule a Visa Interview</h2>
                <p>
                    Book your visa interview appointment early. You&apos;ll need:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Biometric appointment for fingerprinting</li>
                    <li>Visa interview at the US Embassy</li>
                </ul>
            </section>

            {/* Step 6 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 6: Prepare Required Documents</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>A valid passport</li>
                    <li>Form I-20 or DS-2019</li>
                    <li>SEVIS fee receipt</li>
                    <li>DS-160 confirmation page</li>
                    <li>Visa fee receipt</li>
                    <li>Academic transcripts</li>
                    <li>Proof of financial support</li>
                </ul>
            </section>

            {/* Step 7 */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 7: Post-Interview Process</h2>
                <p>
                    After the interview, you&apos;ll be notified of your visa status:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Approved:</strong> Collect your visa-stamped passport.</li>
                    <li><strong>Denied:</strong> Address the reasons and reapply.</li>
                </ul>
            </section>

            {/* Conclusion */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p>
                    Jeta Study Abroad offers comprehensive visa guidance and support. Whether in Calicut or anywhere in Kerala, trust Jeta to help you achieve your study abroad dreams.
                </p>
            </section>

        </div>
    );
}
