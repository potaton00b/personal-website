import { siteContent } from "@/content/site";

export default function Contact() {
  const { contact, email, githubUrl, githubHandle, linkedinUrl, linkedinHandle } = siteContent;

  return (
    <section id="contact" className="space-y-4 pb-6">
      <h2 className="text-h2 font-bold">{contact.heading}</h2>
      <div className="space-y-4">
        <p className="text-body">{contact.intro}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-body font-medium">
          <a
            href={`mailto:${email}`}
            className="hover:underline"
            style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}
          >
            Email: {email}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}
          >
            GitHub: {githubHandle}
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}
          >
            LinkedIn: {linkedinHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
