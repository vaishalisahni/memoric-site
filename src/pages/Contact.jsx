import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  // For now Submit is UI-only; later we can wire to Frappe endpoint.
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form ready to be connected to backend. Data:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pt-6 pb-10">
      <h2 className="text-xl font-bold">Contact Us</h2>

      <form className="mt-4 space-y-3" onSubmit={onSubmit}>
        <Input placeholder="Name" value={form.name} onChange={e => update("name", e.target.value)} />
        <Input placeholder="Company Name" value={form.company} onChange={e => update("company", e.target.value)} />
        <Input placeholder="Email" value={form.email} onChange={e => update("email", e.target.value)} />
        <Input placeholder="Phone" value={form.phone} onChange={e => update("phone", e.target.value)} />
        <Textarea placeholder="Why are you interested?" value={form.message} onChange={e => update("message", e.target.value)} />
        <Button type="submit" className="w-full">Submit</Button>
      </form>

      <p className="mt-3 text-xs text-gray-500">Your message will be sent to <b>info@memoricai.in</b></p>
      <p className="mt-2 text-xs text-gray-400">Office: Bangalore, India</p>
    </div>
  );
}
