import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0f75bc] text-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex bg-white w-fit mb-6">
          <Image src="/jeta-logo.png" alt="Company Logo" className='w-full h-auto' width={180} height={60} />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address and Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Address</h4>
            <p className="text-sm">
              The Workbook, Ground floor, HiLITE Business Park, Poovangal, Kozhikode, Calicut, India 673014
            </p>
            <p className="text-sm mt-2">
              Phone: <a href="tel:+916282118447" className="hover:underline">+91 6282 118 447</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://wa.me/+916282118447" target="_blank" rel="noopener noreferrer">
                <Image src="/WhatsApp.webp" alt="WhatsApp" width={40} height={40} className="hover:opacity-80" />
              </Link>
              <Link href="https://www.instagram.com/jeta_studyabroad" target="_blank" rel="noopener noreferrer">
                <Image src="/insta.png" alt="Instagram" width={40} height={40} className="hover:opacity-80" />
              </Link>
              <Link href="https://www.linkedin.com/company/jeta-study-abroad/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="hover:opacity-80" />
              </Link>
              <Link href="https://www.youtube.com/@jetastudyabroad" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.png" alt="YouTube" width={40} height={40} className="hover:opacity-80" />
              </Link>
            </div>
          </div>

          {/* Email Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Enquiries: <a href="mailto:jetastudyabroad@gmail.com" className="text-white hover:underline">jetastudyabroad@gmail.com</a>
            </p>
            <p className="text-sm mt-2">
              Loans: <a href="mailto:loans.jetafin@gmail.com" className="text-white hover:underline">loans.jetafin@gmail.com</a>
            </p>
          </div>

          {/* Study Abroad Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Study Abroad</h4>
            <ul className="space-y-2">
              {[
                { href: '/study-in-uk', text: 'Study in UK' },
                { href: '/study-in-canada', text: 'Study in Canada' },
                { href: '/study-in-australia', text: 'Study in Australia' },
                { href: '/study-in-austria', text: 'Study in Austria' },
                { href: '/study-in-newzealand', text: 'Study in New Zealand' },
                { href: '/study-in-ireland', text: 'Study in Ireland' },
                { href: '/study-in-usa', text: 'Study in USA' },
                { href: '/study-in-europe', text: 'Study in European countries' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm border-t border-gray-600 pt-6">
          <p>&copy; {new Date().getFullYear()} JETA Study Abroad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
