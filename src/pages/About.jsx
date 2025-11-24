import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-10 space-y-4">
      <h2 className="text-xl font-bold">About Us</h2>

      <Card>
        <CardContent>
          <p className="text-sm text-gray-700 leading-relaxed">
            MemoricAI (Applied AI Studio) is a research, consulting, and training company focused on making AI accessible and beneficial for businesses, educational institutions, and communities. We help organizations adopt artificial intelligence responsibly and effectively, by combining research, governance best-practices and practical training.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold">Our Approach</h3>
          <p className="text-sm text-gray-700 mt-2">
            We deliver practical solutions through workshops, consulting projects, and custom training programmes tailored to organisations and educational institutions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
