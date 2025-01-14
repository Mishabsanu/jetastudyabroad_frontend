"use client";
import { useState } from "react";

const faqs = [
    {
        question: "Is there visa assistance from JETA Study Abroad?",
        answer: `Definitely. At JETA Study Abroad we have a team dedicated to simplifying the visa process for you. With our strong embassy connections and expertise in documentation, we can deliver a 99.9% success rate in securing study visas. From initial consultation to final approval, we guide you through every step of making your transition to studying abroad as seamless as possible.`,
    },
    {
        question: "How do you help students to choose the right university?",
        answer: `We facilitate your access to highly experienced professionals who can guide you to your dream university after analyzing your academic background, interests and career goals. We also provide insights into university rankings, course content, campus facilities, and location preferences to help you make an informed decision.`,
    },
    {
        question: "Does JETA offer scholarships and financial aid?",
        answer: `Yes. We provide students with access to no-collateral loans covering up to 99% of their education costs, ensuring a stress-free journey toward their academic goals. Additionally, we offer an exclusive free course in forex trading, empowering our students with practical skills to generate income and support their living expenses while studying abroad.`,
    },
    {
        question: "Do you provide pre-departure assistance?",
        answer: `Of course. JETA is renowned for our orientation and guidance for the students throughout their journey to the dream campus. We offer pre-departure assistance including everything from travel tips to assuring all necessary documentation is in place, to ensure a smooth transition for students and ease for their families.`,
    },
    {
        question: "How can I connect with JETA study abroad consultancy?",
        answer: `You can reach us through our website, phone, email or by visiting our office in HiLite Business Park, Calicut. Book a free consultation with our expert team through our website.`,
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
                        Frequently Asked Questions
                    </h2>
                    <div className='bg-[#0f75bc] w-20 h-[3px] mx-auto mt-2'></div>
                </div>

                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${openIndex === index ? "bg-indigo-50" : ""
                                }`}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                                onClick={() => toggleAccordion(index)}
                                aria-controls={`accordion-content-${index}`}
                                aria-expanded={openIndex === index}
                            >
                                <h5 className="font-poppins text-xl font-medium">{faq.question}</h5>
                                <svg
                                    className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id={`accordion-content-${index}`}
                                className={`accordion-content w-full px-0 mt-3 overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <p className="text-base text-gray-900 font-rubik leading-6">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
