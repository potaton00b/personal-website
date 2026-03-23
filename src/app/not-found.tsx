export default function NotFound() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-24 space-y-6">
      <h1 className="text-h1 font-black tracking-tight">404</h1>
      <p className="text-h2 font-medium">Page not found.</p>
      <p className="text-body" style={{ color: "#777777" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block font-medium text-[14px] hover:underline"
        style={{ textUnderlineOffset: "4px" }}
      >
        ← Back home
      </a>
    </div>
  );
}
