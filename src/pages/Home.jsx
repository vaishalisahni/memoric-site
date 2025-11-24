import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const PPT_FILE = "/mnt/data/WebSite_Ideas.pptx"; // local upload path you provided

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-10">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold leading-tight">Applied AI Studio</h1>
            <p className="mt-2 text-sm text-gray-600">
              A research, consulting and training company focused on making AI accessible and beneficial for businesses, educational institutions, and communities.
            </p>

            <div className="mt-4 flex gap-3">
              <Button className="flex-1">Explore Courses</Button>
              <Button variant="secondary" className="hidden sm:inline-flex items-center gap-2">
                <span>Download Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <a href={PPT_FILE} className="block mt-3 text-xs text-gray-500">Download site brief (PPT)</a>
          </div>

          {/* Hero image placeholder (mobile-first: hide on very small screens) */}
          <div className="hidden sm:block w-28 h-28 rounded-lg bg-gradient-to-br from-sky-200 to-indigo-200 shrink-0" />
        </div>
      </section>

      {/* Cards: what we do */}
      <section className="mt-5 space-y-3">
        <Card>
          <CardContent>
            <h3 className="font-semibold">What we do</h3>
            <p className="mt-2 text-sm text-gray-600">
              We conduct research on AI governance and economic impact, guide organizations through secure AI implementation, and provide hands-on training.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-semibold">Partnerships</h3>
            <p className="mt-2 text-sm text-gray-600">
              We partner with universities, businesses, and international organisations to deliver workshops, consulting projects, and training programmes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-semibold">Audience</h3>
            <p className="mt-2 text-sm text-gray-600">
              Programs for students, educators, executives and teams.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
