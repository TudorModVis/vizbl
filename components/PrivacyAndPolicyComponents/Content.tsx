'use client'

import { useLenis } from '@studio-freight/react-lenis'

const Content = () => {

  const lenis = useLenis(() => {})

  return (
    <div className='justify-center flex flex-col items-center'>
        <div className='uppercase mt-[3.5rem] text-custom-white ss:text-[4rem] text-[2.5rem] flex justify-between items-center ss:w-[39.5rem] max-ss:max-w-[25rem] w-full max-ss:px-[1rem] font-bold'>
          <h1>Privacy</h1>
          <div className='ss:w-[5rem] w-[3rem] h-[1px] bg-custom-white'/>
          <h1>Policy</h1>
        </div>

        <div className='text-custom-white text-[1.125rem] mt-[3rem] ss:w-[39.5rem] w-full max-ss:px-[1rem] text-justify font-[300]'>
          <p className='text-gray-border'>Last updated March 30, 2024</p>

          <p className='mt-[2rem]'>This privacy notice for Studio Modvis SRL (doing business as ViZBL) ( <b className='font-bold'>'we'</b>, <b className='font-bold'>'us'</b>, or <b className='font-bold'>'our'</b>), describes how and why we might collect, store, use, and/or share (' <span className='font-bold'>process</span>') your information when you use our services ('<span className='font-bold'>Services</span>'), such as when you:</p>

          <ul className='ml-[2rem] my-[1rem]' style={{ listStyle: 'square' }}>
            <li>Visit our website at <a target='_blank' className='underline' href="https://www.myvizbl.com">https://www.myvizbl.com</a>, or any website of ours that links to this privacy notice</li>
            <li>Download and use our mobile application (ViZBL Extension), or any other application of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <p><b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at help@myvizbl.com.</p>

          <h2 className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>SUMMARY OF KEY POINTS</h2>

          <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <span onClick={() => { lenis?.scrollTo('#tableofcontents', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>table of contents</span> below to find the section you are looking for.</p>
          <p className='mt-[1rem]'><span className='font-bold'>What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#personalinfo', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>personal information you disclose to us.</span></p>
          <p className='mt-[1rem]'><span className='font-bold'>Do we process any sensitive personal information? </span>We do not process sensitive personal information.</p>
          <p className='mt-[1rem]'><span className='font-bold'>Do we receive any information from third parties? </span>We do not receive any information from third parties.</p>
          <p className='mt-[1rem]'><span className='font-bold'>How do we process your information? </span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <span onClick={() => { lenis?.scrollTo('#infouse', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>how we process your information.</span></p>
          <p className='mt-[1rem]'><span className='font-bold'>In what situations and with which parties do we share personal information?</span>We may share information in specific situations and with specific third parties. Learn more about<span onClick={() => { lenis?.scrollTo('#shareinfo', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>when and with whom we share your personal information.</span></p>
          <p className='mt-[1rem]'><span className='font-bold'>How do we keep your information safe?</span>We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <span onClick={() => { lenis?.scrollTo('#whoshare', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>how we keep your information safe.</span></p>
          <p className='mt-[1rem]'><span className='font-bold'>What are your rights?</span>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <span onClick={() => { lenis?.scrollTo('#privacyrights', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline'>your privacy rights.</span></p>
          <p className='mt-[1rem]'><span className='font-bold'>How do you exercise your rights?</span>The easiest way to exercise your rights is by submitting a <a target='_blank' href='https://app.termly.io/notify/f18b8d71-109a-4c71-976f-2d869042fc47' className='underline'>data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p className='mt-[1rem]'>Want to learn more about what we do with any information we collect? <span onClick={() => { lenis?.scrollTo('#tableofcontents', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline'>Review the privacy notice in full.</span></p>

          <h2 className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]' id='tableofcontents'>TABLE OF CONTENTS</h2>

          <ul className='uppercase ml-[2rem] underline list-decimal'>
            <li onClick={() => { lenis?.scrollTo('#infocollect', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>WHAT INFORMATION DO WE COLLECT?</span></li>
            <li onClick={() => { lenis?.scrollTo('#infouse', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW DO WE PROCESS YOUR INFORMATION?</span></li>
            <li onClick={() => { lenis?.scrollTo('#legalbases', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></li>
            <li onClick={() => { lenis?.scrollTo('#whoshare', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></li>
            <li onClick={() => { lenis?.scrollTo('#sociallogins', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></li>
            <li onClick={() => { lenis?.scrollTo('#inforetain', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW LONG DO WE KEEP YOUR INFORMATION?</span></li>
            <li onClick={() => { lenis?.scrollTo('#infosafe', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW DO WE KEEP YOUR INFORMATION SAFE?</span></li>
            <li onClick={() => { lenis?.scrollTo('#infominors', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>DO WE COLLECT INFORMATION FROM MINORS?</span></li>
            <li onClick={() => { lenis?.scrollTo('#privacyrights', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>WHAT ARE YOUR PRIVACY RIGHTS?</span></li>
            <li onClick={() => { lenis?.scrollTo('#DNT', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>CONTROLS FOR DO-NOT-TRACK FEATURES</span></li>
            <li onClick={() => { lenis?.scrollTo('#uslaws', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></li>
            <li onClick={() => { lenis?.scrollTo('#otherlaws', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></li>
            <li onClick={() => { lenis?.scrollTo('#policyupdates', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>DO WE MAKE UPDATES TO THIS NOTICE?</span></li>
            <li onClick={() => { lenis?.scrollTo('#contact', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></li>
            <li onClick={() => { lenis?.scrollTo('#request', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}><span className='cursor-pointer'>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></li>
          </ul>

          <h2 id='infocollect' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>1. WHAT INFORMATION DO WE COLLECT?</h2>

          <p className='text-[1.25rem] font-bold'>Personal information you disclose to us</p>
          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> We collect personal information that you provide to us.</p>
          <p className='mt-[1rem]'>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p className='mt-[1rem]'><span className='font-bold'>Personal Information Provided by You. </span>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul className='ml-[2rem] my-[1rem]' style={{ listStyle: 'square' }}>
            <li>email addresses</li>
            <li>names</li>
            <li>usernames</li>
            <li>billing addresses</li>
            <li>debit/credit card numbers</li>
          </ul>
          <p><span className='font-bold'>Sensitive Information. </span>We do not process sensitive information.</p>
          <p className='mt-[1rem]'><span className='font-bold'>Social Media Login Data. </span>We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#sociallogins', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>'HOW DO WE HANDLE YOUR SOCIAL LOGINS?'</span> below.</p>
          <p className='mt-[1rem]'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          <p className='text-[1.25rem] font-bold mt-[1rem]'>Information automatically collected</p>
          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p className='mt-[1rem]'>The information we collect includes:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
            <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
          </ul>

          <h2 id='infouse' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p className='mt-[1rem] font-bold'>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li><span className='font-bold'>To facilitate account creation and authentication and otherwise manage user accounts. </span>We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
            <li><span className='font-bold'>To deliver and facilitate delivery of services to the user. </span>We may process your information to provide you with the requested service.</li>
            <li><span className='font-bold'>To enable user-to-user communications. </span>We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
            <li><span className='font-bold'>To save or protect an individual's vital interest. </span>We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
          </ul>

          <h2 id='legalbases' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>
          <p className='font-bold underline mt-[1rem]'>If you are located in the EU or UK, this section applies to you.</p>
          <p className='mt-[1rem]'>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li><span className='font-bold'>Consent. </span>We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <span className='underline' onClick={() => { lenis?.scrollTo('#withdrawconsent', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}> withdrawing your consent.</span></li>
            <li><span className='font-bold'>Performance of a Contract. </span>We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
            <li><span className='font-bold'>Legal Obligations. </span>We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li><span className='font-bold'>Vital Interests. </span>We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>
          <p className='font-bold underline mt-[1rem]'>If you are located in Canada, this section applies to you.</p>
          <p className='mt-[1rem]'>We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can <span className='underline' onClick={() => { lenis?.scrollTo('#withdrawconsent', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}> withdraw your consent.</span> at any time.</p>
          <p className='mt-[1rem]'>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
            <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
          </ul>

          <h2 id='whoshare' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p className='mt-[1rem]'>We may need to share your personal information in the following situations:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li><span className='font-bold'>Business Transfers. </span>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><span className='font-bold'>When we use Google Analytics. </span>We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a target='_blank' className='underline' href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a target='_blank' href="https://policies.google.com/privacy" className='underline'>Google Privacy & Terms page.</a></li>
          </ul>

          <h2 id='sociallogins' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short:</span> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
          <p className='mt-[1rem]'>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
          <p className='mt-[1rem]'>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

          <h2 id='inforetain' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          
          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>
          <p className='mt-[1rem]'>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than   the period of time in which users have an account with us. </p>
          <p className='mt-[1rem]'>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <h2 id='infosafe' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>We aim to protect your personal information through a system of organisational and technical security measures.</p>
          <p className='mt-[1rem]'>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
        
          <h2 id='infominors' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>8. DO WE COLLECT INFORMATION FROM MINORS?</h2>

          <p><span className='font-bold'>In Short: </span>We do not knowingly collect data from or market to children under 18 years of age.</p>
          <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at help@myvizbl.com.</p>

          <h2 id='privacyrights' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
          <p className='mt-[1rem]'>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#contact', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</span> below.</p>
          <p className='mt-[1rem]'>We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p className='mt-[1rem]'>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a target='_blank' href="https://ec.europa.eu/newsroom/article29/items/612080/en" className='underline'>Member State data protection authority</a> or <a target='_blank' href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" className='underline'>UK data protection authority</a>.</p>
          <p className='mt-[1rem]'>If you are located in Switzerland, you may contact the <a target='_blank' href="https://www.edoeb.admin.ch/edoeb/en/home.html" className='underline'>Federal Data Protection and Information Commissioner</a>.</p>
          <p className='mt-[1rem]' id='withdrawconsent'><span className='font-bold underline'>Withdrawing your consent: </span>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#contact', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</span> below.</p>
          <p className='mt-[1rem]'>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
          <p className='mt-[1rem] text-[1.25rem] font-bold'>Account Information</p>
          <p className='mt-[1rem]'>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>Log in to your account settings and update your user account.</li>
          </ul>
          <p className='mt-[1rem]'>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
          <p className='mt-[1rem]'>If you have questions or comments about your privacy rights, you may email us at help@myvizbl.com.</p>
        
          <h2 id='DNT' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

          <h2 id='uslaws' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          
          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>If you are a resident of California or Virginia, you are granted specific rights regarding access to your personal information.</p>
          <p className='mt-[1rem] font-bold'>What categories of personal information do we collect?</p>
          <p className='mt-[1rem]'>We have collected the following categories of personal information in the past twelve (12) months:</p>
          <table className='mt-[1rem] text-left'>
            <thead>
              <tr>
                <th className='border p-[0.5rem]'>Category</th>
                <th className='border p-[0.5rem]'>Examples</th>
                <th className='border p-[0.5rem]'>Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-[0.5rem]'>A. Identifiers</td>
                <td className='border p-[0.5rem]'>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                <td className='border p-[0.5rem] text-center'>YES</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>B. Personal information as defined in the California Customer Records statute</td>
                <td className='border p-[0.5rem]'>Name, contact information, education, employment, employment history, and financial information</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>C. Protected classification characteristics under state or federal law</td>
                <td className='border p-[0.5rem]'>Gender and date of birth</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>D. Commercial information</td>
                <td className='border p-[0.5rem]'>Transaction information, purchase history, financial details, and payment information</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]' >E. Biometric information</td>
                <td className='border p-[0.5rem]'>Fingerprints and voiceprints</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem] '>F. Internet or other similar network activity</td>
                <td className='border p-[0.5rem] '>Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                <td className='border p-[0.5rem]  text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>G. Geolocation data</td>
                <td className='border p-[0.5rem]'>Device location</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td className='border p-[0.5rem]'>Images and audio, video or call recordings created in connection with our business activities</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>I. Professional or employment-related information</td>
                <td className='border p-[0.5rem]'>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>J. Education Information</td>
                <td className='border p-[0.5rem]'>Student records and directory information</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>K. Inferences drawn from collected personal information</td>
                <td className='border p-[0.5rem]'>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
              <tr>
                <td className='border p-[0.5rem]'>L. Sensitive personal Information</td>
                <td className='border p-[0.5rem]'></td>
                <td className='border p-[0.5rem] text-center'>NO</td>
              </tr>
            </tbody>
          </table>
          <p className='mt-[1rem]'>We will use and retain the collected personal information as needed to provide the Services or for:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>Category A - As long as the user has an account with us</li>
          </ul>
          <p className='mt-[1rem]'>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>
          <p className='font-bold mt-[1rem]'>How do we use and share your personal information?</p>
          <p className='mt-[1rem]'>Learn about how we use your personal information in the section, <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#infouse', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>'HOW DO WE PROCESS YOUR INFORMATION?'</span></p>
          <p className='mt-[1rem]'>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <span className='underline cursor-pointer' onClick={() => { lenis?.scrollTo('#whoshare', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}}>'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'</span></p>
          <p className='mt-[1rem]'>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.</p>
          <p className='mt-[1rem]'>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>
          <p className='text-[1.25rem] font-bold mt-[1rem]'>California Residents</p>
          <p className='mt-[1rem]'>California Civil Code Section 1798.83, also known as the 'Shine The Light' law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
          <p className='mt-[1rem]'>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>
          <p className='mt-[1rem] underline font-bold'>CCPA Privacy Notice</p>
          <p className='mt-[1rem]'>This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</p>
          <p className='mt-[1rem]'>The California Code of Regulations defines a 'residents' as:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'none' }}>
            <li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li>
            <li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
          </ul>
          <p className='mt-[1rem]'>All other individuals are defined as 'non-residents'.</p>
          <p className='mt-[1rem]'>If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>
          <p className='font-bold mt-[1rem]'>Your rights with respect to your personal data</p>
          <p className='underline mt-[1rem]'>Right to request deletion of the data — Request to delete</p>
          <p className='mt-[1rem]'>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
          <p className='mt-[1rem] underline'>Right to be informed — Request to know</p>
          <p className='mt-[1rem]'>Depending on the circumstances, you have a right to know:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>whether we collect and use your personal information;</li>
            <li>the categories of personal information that we collect;</li>
            <li>the purposes for which the collected personal information is used;</li>
            <li>whether we sell or share personal information to third parties;</li>
            <li>the categories of personal information that we sold, shared, or disclosed for a business purpose;</li>
            <li>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</li>
            <li>the business or commercial purpose for collecting, selling, or sharing personal information; and</li>
            <li>the specific pieces of personal information we collected about you.</li>
          </ul>
          <p className='mt-[1rem]'>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
          <p className='mt-[1rem] underline'>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</p>
          <p className='mt-[1rem]'>We will not discriminate against you if you exercise your privacy rights.</p>
          <p className='mt-[1rem] underline'>Right to Limit Use and Disclosure of Sensitive Personal Information</p>
          <p className='mt-[1rem]'>We do not process consumer's sensitive personal information.</p>
          <p className='mt-[1.5rem] underline'>Verification process</p>
          <p className='mt-[1rem]'>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
          <p className='mt-[1rem]'>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>
          <p className='mt-[1rem] underline'>Other privacy rights</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>You may object to the processing of your personal information.</li>
            <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
            <li>You can designate an authorised agent to make a request under the CCPA on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with the CCPA.</li>
            <li>You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
          </ul>
          <p className='mt-[1rem]'>To exercise these rights, you can contact us by submitting a <a target='_blank' href="https://app.termly.io/notify/f18b8d71-109a-4c71-976f-2d869042fc47" className='underline'>data subject access request</a>, by email at help@myvizbl.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>
          <p className='font-bold text-[1.25rem] mt-[1rem]'>Virginia Residents</p>
          <p className='mt-[1rem]'>Under the Virginia Consumer Data Protection Act (VCDPA):</p>
          <p className='mt-[1rem]'>'Consumer' means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.</p>
          <p className='mt-[1rem]'>'Personal data' means any information that is linked or reasonably linkable to an identified or identifiable natural person. 'Personal data' does not include de-identified data or publicly available information.</p>
          <p className='mt-[1rem]'>'Sale of personal data' means the exchange of personal data for monetary consideration.</p>
          <p className='mt-[1rem]'>If this definition of 'consumer' applies to you, we must adhere to certain rights and obligations regarding your personal data.</p>
          <p className='mt-[1rem] underline'>Your rights with respect to your personal data</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>Right to be informed whether or not we are processing your personal data</li>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccuracies in your personal data</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to obtain a copy of the personal data you previously shared with us</li>
            <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ('profiling')</li>
          </ul>
          <p className='mt-[1rem] underline'>Exercise your rights provided under the Virginia VCDPA</p>
          <p className='mt-[1rem]'>You may contact us by email at help@myvizbl.com or submit a <a target='_blank' className='underline' href="https://app.termly.io/notify/f18b8d71-109a-4c71-976f-2d869042fc47">data subject access request</a>.</p>
          <p className='mt-[1rem]'>If you are using an authorised agent to exercise your rights, we may deny a request if the authorised agent does not submit proof that they have been validly authorised to act on your behalf.</p>
          <p className='mt-[1rem] underline'>Verification process</p>
          <p className='mt-[1.5rem]'>We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an authorised agent, we may need to collect additional information to verify your identity before processing your request.</p>
          <p className='mt-[1rem]'>Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.</p>
          <p className='mt-[1rem] underline'>Right to appeal</p>
          <p className='mt-[1rem]'>If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at help@myvizbl.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the <a target='_blank' href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint" className='underline'>Attorney General to submit a complaint</a>.</p>
        
          <h2 id='otherlaws' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>You may have additional rights based on the country you reside in.</p>
          <p className='text-[1.25rem] font-bold mt-[1rem]'>Australia and New Zealand</p>
          <p className='mt-[1rem]'>We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).</p>
          <p className='mt-[1rem]'>This privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.</p>
          <p className='mt-[1rem]'>If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</p>
          <ul className='ml-[2rem] mt-[1rem]' style={{ listStyle: 'square' }}>
            <li>offer you the products or services that you want</li>
            <li>respond to or help with your requests</li>
            <li>manage your account with us</li>
            <li>confirm your identity and protect your account</li>
          </ul>
          <p className='mt-[1rem]'>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section <span onClick={() => { lenis?.scrollTo('#request', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?'</span></p>
          <p className='mt-[1rem]'>If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the <a target='_blank' href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us" className='underline'>Office of the Australian Information Commissioner</a> and a breach of New Zealand's Privacy Principles to the <a target='_blank' href="https://www.privacy.org.nz/your-rights/making-a-complaint-to-the-privacy-commissioner/" className='underline'>Office of New Zealand Privacy Commissioner</a>.</p>
          <p className='text-[1.25rem] font-bold mt-[1rem]'>Republic of South Africa</p>
          <p className='mt-[1rem]'>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section <span onClick={() => { lenis?.scrollTo('#request', { duration: 2, easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 })}} className='underline cursor-pointer'>'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?'</span></p>
          <p className='mt-[1rem]'>If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:</p>
          <p className='mt-[1rem] underline'><a target='_blank' href="https://inforegulator.org.za/">The Information Regulator (South Africa)</a></p>
          <p>General enquiries: <a target='_blank' href="mailto: enquiries@inforegulator.org.za" className='underline'>enquiries@inforegulator.org.za</a></p>
          <p>Complaints (complete POPIA/PAIA form 5): <a href="mailto: PAIAComplaints@inforegulator.org.za" className='underline'>PAIAComplaints@inforegulator.org.za</a> & <a href="mailto: POPIAComplaints@inforegulator.org.za" className='underline'>POPIAComplaints@inforegulator.org.za</a></p>

          <h2 id='policyupdates' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>

          <p className='mt-[1rem]'><span className='font-bold'>In Short: </span>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p className='mt-[1rem]'>We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
        
          <h2 id='contact' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

          <p className='mt-[1rem]'>If you have questions or comments about this notice, you may email us at help@myvizbl.com or contact us by post at:</p>
          <p className='mt-[1rem]'>Studio Modvis SRL</p>
          <p>Strada Mihail Sadoveanu 24, Chișinău, Moldova</p>
          <p>Chișinău, Chișinău MD2044</p>
          <p>Moldova</p>

          <h2 id='request' className='uppercase text-[1.5rem] font-bold mt-[3rem] mb-[1rem]'>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

          <p className='mt-[1rem] mb-[15.5rem]'>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a <a target='_blank' href="https://app.termly.io/notify/f18b8d71-109a-4c71-976f-2d869042fc47" className='underline'>data subject access request</a>.</p>

        </div>
    </div>

  )
}

export default Content