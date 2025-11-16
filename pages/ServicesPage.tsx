
import React, { useState } from 'react';

const services = [
  {
    title: 'E-Books',
    description: 'In-depth digital textbooks and guides covering a vast array of subjects, perfect for comprehensive learning.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.253-7.494H12m0 0H6.747M12 6.253l2.25 2.25M12 6.253L9.75 8.5" /></svg>,
  },
  {
    title: 'PDF Notes',
    description: 'Concise, ready-made lecture notes and summaries to help you review key concepts and prepare for exams efficiently.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  },
  {
    title: 'PowerPoint Presentations',
    description: 'Professionally designed presentation templates and ready-to-use slides for your class projects and seminars.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    title: 'University Notes',
    description: 'A vast collection of curated notes from top universities, helping you gain insights and perspectives from the best.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v-7.5l4-2.222m14 0l4 2.222v7.5m-4 6l4-2.222M1 12l4 2.222m14 0l-4 2.222m-12 4l4 2.222 4-2.222" /></svg>,
  },
];

const faqs = [
  { question: 'How do I access my purchased products?', answer: 'Once your purchase is complete, you will receive an email with a download link. You can also access all your purchased items from your account dashboard under "My Downloads".' },
  { question: 'What formats are the documents in?', answer: 'E-books and notes are typically in PDF format. Presentations are in PPTX format, compatible with Microsoft PowerPoint and Google Slides.' },
  { question: 'Can I get a refund?', answer: 'Due to the digital nature of our products, we generally do not offer refunds. However, if you experience technical issues or believe the product was misrepresented, please contact our support team.' },
  { question: 'Are the notes specific to certain universities?', answer: 'Many of our notes are course-specific to particular universities, which will be clearly marked. We also offer general subject guides that are useful for students at any institution.' },
];

const FaqItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{faq.question}</span>
                <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>}
        </div>
    );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">A comprehensive suite of academic resources to support your learning journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary-light p-8 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, index) => <FaqItem key={index} faq={faq} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
