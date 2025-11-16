
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About AcademicSorcess</h1>
          <p className="mt-4 text-xl text-gray-600">Empowering students with the resources they need to succeed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At AcademicSorcess, our mission is to make high-quality educational materials accessible and affordable for every student. We believe that with the right tools, anyone can achieve their academic goals. We are a platform built by students, for students, understanding the challenges and pressures of modern education.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We curate a vast collection of e-books, comprehensive notes, professional presentations, and other digital resources across a wide range of subjects and universities. Our goal is to save you time, reduce stress, and help you learn more effectively.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/aboutus/800/600" alt="Team working" className="rounded-lg shadow-2xl" />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v1h16V5a2 2 0 00-2-2H5zm14 4H5v1h14V7zm0 4H5v1h14v-1zm0 4H5v1h14v-1zm0 4H5a2 2 0 00-2 2v1h16v-1a2 2 0 00-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
              <p className="text-gray-600">Every resource is reviewed by experts to ensure quality and accuracy.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M18 10a6 6 0 11-12 0 6 6 0 0112 0zm-6 8a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">We believe in fair pricing to make education accessible to everyone.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4H4zm11 0v5h5V4h-5zM4 15v5h5v-5H4zm11 0v5h5v-5h-5z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-600">Download your purchased materials instantly and start learning right away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
