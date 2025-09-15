import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="text-center pb-5" id="contact">
      <div className="container">
        <p className="text-lg font-semibold">Let’s build something impactful.</p>
        📧 <span className="font-medium">Reach out:</span>{' '}
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="underline hover:text-blue-600 transition-colors duration-200"
        >
          {GENERAL_INFO.email}
        </a>

        <div className="mt-2">
          <a
            href="https://github.com/ratna1308/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-none text-muted-foreground hover:underline hover:text-white"
          >
            Design & built by Ratna Sonawane
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
