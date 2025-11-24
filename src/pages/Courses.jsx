import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COURSES = [
  {
    title: "Applied AI Fundamentals",
    desc: "Hands-on training for students, educators, and professionals to use AI tools effectively."
  },
  {
    title: "AI for Business Leaders",
    desc: "Strategy-focused program for executives to apply AI in business."
  },
  {
    title: "AI Governance & Policy",
    desc: "Responsible AI, data governance, ethics and compliance."
  }
];

export default function Courses() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-10">
      <h2 className="text-xl font-bold">Courses</h2>

      <div className="mt-4 space-y-4">
        {COURSES.map((c, i) => (
          <Card key={i}>
            <CardContent>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                </div>
                <div className="shrink-0">
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
