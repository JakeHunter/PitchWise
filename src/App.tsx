import React from "react";
import Logo from "./assets/Pitchwise.jpeg";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <img
          src={Logo}
          alt="Company Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h1 className="text-4xl font-bold">Pitch Wise</h1>
      </header>

      {/* Product Description Section */}
      <section className="mb-8 text-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600">
            For entrepreneurs who find it difficult to get helpful feedback on
            their startup ideas. The web app is a social platform that allows
            people to get real feedback from other entrepreneurs. Our solution
            focuses on community-driven feedback and bridging the gap between
            casual social media feedback and expensive, formal advisory
            services.
          </p>
        </div>
      </section>

      {/* Survey Link Section */}
      <section className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Take Our Survey</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeL5qRCF066yh-fznXfEUUDcqI972DpXNfxEE8FLd-xfivccQ/viewform"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Survey
        </a>
      </section>

      {/* Contact Form Section */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              className="block text-left font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
