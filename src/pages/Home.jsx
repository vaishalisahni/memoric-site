import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full text-slate-900 relative overflow-hidden">

      {/* Hero Section with Gradient Background */}
      <div className="w-full bg-gradient-to-r from-[#0f1b33] to-[#1a2c4f] pt-20 pb-12 relative">
        {/* Accent blur circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          
          {/* Left Text */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Empowering AI for Everyone
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              We are a research, consulting, and training company focused on making AI
              accessible and beneficial for businesses, educational institutions,
              and communities. We help organizations adopt artificial intelligence
              responsibly and effectively.
            </p>
            <div className="mt-4">
              <Button className="bg-white text-[#0f1b33] hover:bg-gray-200 px-6 py-3 font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1">
            <Card className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full h-80 md:h-96 flex items-center justify-center">
              <div className="text-slate-900 font-semibold text-center px-4">
                Hero Image / Illustration
              </div>
            </Card>
          </div>

        </div>
      </div>

    </div>
  );
}
