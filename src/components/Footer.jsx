export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-2xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MemoricAI — Bangalore, India • info@memoricai.in
      </div>
    </footer>
  );
}
