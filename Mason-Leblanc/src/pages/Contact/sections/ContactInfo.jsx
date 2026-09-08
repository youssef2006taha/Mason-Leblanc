import { Mail, Phone } from "lucide-react";
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  { icon: FaYoutube, href: "https://www.youtube.com/" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/youssef-taha-819982350/" },
  { icon: FaInstagram, href: "https://www.instagram.com/" },
  { icon: FaFacebookF, href: "https://www.facebook.com/" },
];

function ContactInfo() {
  return (
    <section className="bg-bg-main text-text-main py-20">
      <div className="container flex flex-col lg:flex-row justify-between gap-5">
          
          <div className="space-y-8 lg:max-w-[50%]">
            <div className="space-y-4">

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
                LET'S DISCUSS YOUR PROJECT!
              </h2>
              <p className="font-text text-text-muted text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam
              </p>

            </div>

            <div className="space-y-4">

              <a
                href="Email@demo.com"
                className="flex items-center gap-4 transition-all w-fit group"
              >
                <div className="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-inverse transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-base group-hover:text-primary-active transition-all">Email@demo.com</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 transition-all w-fit group"
              >
                <div className="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-inverse transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium text-base group-hover:text-primary-active transition-all">202-555-0148</span>
              </a>

            </div>

            <div className="flex gap-4 pb-2">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-primary text-text-inverse flex items-center justify-center hover:bg-primary-inverse hover:text-text-main transition-colors shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-bg-surface p-6.5 sm:p-8 rounded-2xl border border-bg-secondary/40 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-bg-main/60 border border-bg-secondary rounded-xl px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-bg-main/60 border border-bg-secondary rounded-xl px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-bg-main/60 border border-bg-secondary rounded-xl px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-inverse font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                Submit Project
              </button>

            </form>
          </div>

      </div>
    </section>
  );
}

export default ContactInfo;