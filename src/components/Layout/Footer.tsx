import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#2B292A] py-20 px-4 md:px-7 lg:px-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-5 md:gap-0'>
        {/* Address and Phone Number */}
        <div>
          <h4 className="text-white text-xl font-poppins mb-4">Address</h4>
          <p className="text-white text-sm">The Workbook, Ground floor, HiLITE Business Park, Poovangal, Kozhikode, Calicut, India 673014</p>
          <p className="text-white text-sm">Phone: <a href="tel:+916282118447" className="text-indigo-500">+91 6282 118 447</a></p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-white text-xl font-poppins mb-4">Follow Us</h4>
          <div className='flex space-x-4'>
            <Link href="https://wa.me/+916282118447" target="_blank" rel="noopener noreferrer">
              <Image src="/WhatsApp.webp" alt="WhatsApp" width={42} height={42} className="hover:opacity-80 h-8 w-8" />
            </Link>
            <Link href="https://www.instagram.com/jeta_studyabroad" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="Instagram" width={42} height={42} className="hover:opacity-80 h-8 w-8" />
            </Link>
            <Link href="https://www.linkedin.com/company/jeta-study-abroad/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={42} height={42} className="hover:opacity-80 h-8 w-8" />
            </Link>
            <Link href="https://www.youtube.com/@jetastudyabroad" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.png" alt="YouTube" width={42} height={42} className="hover:opacity-80 h-8 w-8" />
            </Link>
          </div>
        </div>

        {/* Email Information */}
        <div>
          <h4 className="text-white text-xl font-poppins mb-4">Mail ID</h4>
          <p className="text-white text-sm">For enquiries: <a href="mailto:jetastudyabroad@gmail.com" className="text-indigo-500">jetastudyabroad@gmail.com</a></p>
          <p className="text-white text-sm">For loans: <a href="mailto:loans.jetafin@gmail.com" className="text-indigo-500">loans.jetafin@gmail.com</a></p>
        </div>

        {/* Study Abroad in Countries */}
        <div>
          <h4 className="text-white text-xl font-poppins mb-4">Study Abroad in</h4>
          <ul className="space-y-4">
            <li><Link className='text-white text-sm' href='/study-in-uk'>Study in UK</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-canada'>Study in Canada</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-australia'>Study in Australia</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-austria'>Study in Austria</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-newzealand'>Study in New Zealand</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-ireland'>Study in Ireland</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-usa'>Study in USA</Link></li>
            <li><Link className='text-white text-sm' href='/study-in-europe'>Study in European countries</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
