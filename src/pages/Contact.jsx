import React from "react";

export default function Contact() {
  return (
    <div className="w-full flex justify-center py-12 bg-gray-50">
      <div className="max-w-5xl w-full px-4">

        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-semibold">Contact Us</h1>
        </header>

        {/* Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div className="space-y-6 pr-4">
            <h2 className="text-xl font-semibold">Get In Touch</h2>
            <p className="text-slate-600 text-sm leading-6">
              We're here to answer questions, discuss your AI training needs,
              or explore how we can support your organization.
            </p>

            {/* Email */}
            <div>
              <p className="font-medium">Email</p>
              <p className="text-slate-600">info@memoricai.in</p>
            </div>

            {/* Office */}
            <div>
              <p className="font-medium">Office</p>
              <p className="text-slate-600">Bangalore, India</p>
            </div>
          </div>

          {/* Form Section — FIXED WIDTH LIKE SCREENSHOT */}
          <div className="md:col-span-2 flex justify-center">
            <form
              className="bg-white p-6 rounded-xl shadow-md border w-[500px]"
            >
              <label className="block mb-4">
                <span className="text-sm">Name</span>
                <input
                  name="name"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2"
                  placeholder="Your name"
                />
              </label>

              <label className="block mb-4">
                <span className="text-sm">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2"
                  placeholder="your@email.com"
                />
              </label>

              <label className="block mb-4">
                <span className="text-sm">Message</span>
                <textarea
                  name="message"
                  required
                  className="mt-1 block w-full rounded border px-3 py-2 h-32"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </label>

              <button
                type="button"
                className="px-6 py-2 rounded bg-sky-600 text-white w-full"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
