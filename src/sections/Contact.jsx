import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xkgbjezd");

  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800/30 to-gray-900 flex items-center justify-center p-6">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-900/30 text-center">
          <p className="text-green-400 text-xl">Thanks for your message! I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800/30 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-900/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-300 mb-3">Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              Let's explore the geospatial world together!
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></span>
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="w-full p-3 rounded-lg bg-gray-900/50 border border-blue-900/50 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="your@email.com"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="mt-2 text-red-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message (include your WhatsApp/phone number if you'd like a quick response)
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full p-3 rounded-lg bg-gray-900/50 border border-blue-900/50 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Type your message here... 
To get a quick response, please include your WhatsApp or Contact number."
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="mt-2 text-red-400 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform
                ${state.submitting 
                  ? 'bg-blue-600/50 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25'
                }
                text-white`}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;