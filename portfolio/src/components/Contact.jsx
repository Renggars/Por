import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mt-28 sm:px-10 md:px-20 lg:px-16 xl:px-72">
        <div className="w-full">
          <div className="max-w-full mx-auto text-center mb-5">
            <h2 className="font-bold text-3xl mb-2  sm:text-4xl lg:text-5xl text-black">
              Contact
            </h2>
            <h4 className="font-semibold text-lg text-green-main">
              Connect With Us
            </h4>
          </div>
        </div>

        <form action="https://getform.io/f/zazkpxob" method="POST" encType="multipart/form-data" target="_blank"
        >
          <div className="w-full lg:full lg:mx-auto">
            <div className="w-full px-8 mb-3">
              <label for="name" className="text-base font-bold text-green-main">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-200 text-slate-700 p-2 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
              ></input>
            </div>
            <div className="w-full px-8 mb-3">
              <label
                for="email"
                className="text-base font-bold text-green-main"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-200 text-slate-700 p-2 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
              ></input>
            </div>
            <div className="w-full px-8 mb-6">
              <label
                for="message"
                className="text-base font-bold text-green-main"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="w-full bg-slate-200 text-slate-700 p-3 rounded-xl focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main h-44"
              ></textarea>
            </div>
            <div className="w-full text-center">
              <button className="text-base font-semibold text-white bg-green-main py-1 px-9 rounded-full sm:w-32 lg:w-60 xl:w-72 hover:opacity-80 hover:shadow-lg transition duration-500">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
