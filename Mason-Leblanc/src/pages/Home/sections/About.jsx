import aboutImg from "../../../assets/about.jpg";
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  { icon: FaYoutube, href: "https://www.youtube.com/" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/youssef-taha-819982350/" },
  { icon: FaInstagram, href: "https://www.instagram.com/" },
  { icon: FaFacebookF, href: "https://www.facebook.com/" },
];

function About() {
  return (
    <section className="relative py-10">
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden z-0">
        <img
          src={aboutImg}
          alt="About Hero"
          className="w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-main"/>
      </div>

      <div className="container relative z-10 !pt-80">
        <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          <div className="flex md:flex-col gap-4 shrink-0 pt-2">
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

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <p className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
            </p>
            
            <p className="text-text-muted">
              Erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex
            </p>
            
            <p className="text-text-muted">
              Pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut.
            </p>
            
            <p className="text-text-muted">
              Nam et quam sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa.
            </p>

            <div className="pt-4">
              <a 
                href="#" 
                className="inline-block text-primary hover:text-primary-hover tracking-widest uppercase border-b-2 font-heading font-semibold text-lg"
              >
                READ FULL BIO
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;