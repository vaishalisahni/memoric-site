import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full flex justify-center py-16 bg-gray-50">
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Header */}
        <div className="md:col-span-3 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us
          </h1>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-slate-600 leading-6">
            We're here to answer questions, discuss your AI training needs,
            or explore how we can support your organization.
          </p>
          <div>
            <p className="font-medium text-slate-700">Email</p>
            <p className="text-slate-600">info@memoricai.in</p>
          </div>
          <div>
            <p className="font-medium text-slate-700">Office</p>
            <p className="text-slate-600">Bangalore, India</p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 flex justify-center">
          <Card className="w-full max-w-md p-8 shadow-lg border">
            <form className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <Input name="name" placeholder="Your Name" required className="mt-1" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <Input name="email" type="email" placeholder="your@email.com" required className="mt-1" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message</span>
                <Textarea name="message" placeholder="Your Message..." required className="mt-1 h-32" />
              </label>

              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

      </div>
    </div>
  );
}
