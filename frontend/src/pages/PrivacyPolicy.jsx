import React from 'react'
import BodyContainer from '../components/BodyContainer'
import Footer from '../components/Footer'

import { useNavigationContext } from '../hooks/navigation/useNavigationContext'

const PrivacyPolicy = () => {
  const { isNavOpen } = useNavigationContext();

  return (
    <div className={isNavOpen ? 'hidden' : 'font-lato'}>
      <BodyContainer className="h-screen flex flex-col">
          <div className='flex-grow flex flex-col justify-center text-black-400 px-[var(--size-md)] p-[var(--size-l)]'>
              <h1 className='text-md font-bold text-black-600 mb-[24px]'>Privacy Policy</h1>
              <div className='flex flex-col gap-[8px] mb-[16px]'>
                  <p>Thank you for trusting us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our platform. Our goal is to support safe and efficient reunification of lost and found pets, while protecting your privacy and data.</p>
              </div>
              <ol className='flex flex-col gap-[12px]'>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>1. Information We Collect</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>We collect the following types of information to provide and improve our services:</p>
                      <ul className='list-disc list-inside'>
                        <li><span className='font-bold'>Contact Information </span>(e.g., name, email address, phone number): to facilitate communication regarding lost or found pets.</li>
                        <li><span className='font-bold'>Location Details</span> (e.g., city or neighborhood): to help users identify pets in their area.</li>
                        <li><span className='font-bold'>Pet Information</span> (e.g., descriptions, images): to publicly display posts.</li>
                        <li><span className='font-bold'>Technical Data</span> (e.g., IP address, browser type): to enhance site performance and prevent fraudulent use.</li>
                      </ul>
                      <p>We do not request or store sensitive financial or identification information.</p>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>2. How We Use Your Information</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>We use the information we collect for the following purposes:</p>
                      <ul className='list-disc list-inside'>
                        <li>To publish lost/found pet reports.</li>
                        <li>To enable user-to-user communication via the platform.</li>
                        <li>To improve our website functionality and user experience.</li>
                        <li>To maintain the safety and integrity of the platform.</li>
                      </ul>
                      <p>We do not sell, rent, or share your personal information for marketing purposes.</p>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>3.Information Sharing and Disclosure</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <ul className='list-disc list-inside'>
                        <li>Public pet listings will be visible to all visitors of the site.</li>
                        <li>We do not publicly display your email or phone number unless you explicitly include it in your listing.</li>
                        <li>We may share your information with trusted service providers (e.g., hosting, email platforms) solely to help us deliver our services. These third parties are bound by confidentiality and security obligations.</li>
                      </ul>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>4. Your Rights and Choices</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>You have the right to:</p>
                      <ul className='list-disc list-inside'>
                        <li>Access, update, or delete your post(s) at any time.</li>
                        <li>Request that your account and personal data be deleted.</li>
                        <li>Control what personal information is shared publicly.</li>
                      </ul>
                      <p>Please contact us if you wish to exercise any of these rights.</p>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>5. Data Security</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>We implement industry-standard measures to protect your information from unauthorized access, alteration, or disclosure. While no system can guarantee complete security, we are committed to safeguarding your data responsibly.</p>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>6. Children’s Privacy</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>Our platform is not intended for children under the age of 13. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal information, we will promptly delete it.</p>
                    </div>
                  </li>
                  <li className='flex flex-col gap-[8px]'>
                    <h3 className='text-sm font-semibold text-black-500'>7. Policy Updates</h3>
                    <div className='flex flex-col gap-[6px]'>
                      <p>We may update this Privacy Policy from time to time. If significant changes are made, we will notify users via email or a notice on our website. Your continued use of the site after such changes constitutes acceptance of the revised policy.</p>
                    </div>
                  </li>
              </ol>
          </div>
          <Footer />
      </BodyContainer>
    </div>
  )
}

export default PrivacyPolicy