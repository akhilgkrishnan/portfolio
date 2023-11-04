import { AppConfig } from '@utils/AppConfig';
import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="flex justify-center border-t border-gray-600 pt-5">
      <div className="text-sm">
        <div className="text-center">
          © Copyright {new Date().getFullYear()} {AppConfig.author}.
        </div>
        <div>
          Built with 🧡,{' '}
          <a
            href="https://astro.build"
            className="text-blue-400"
            target="_blank"
          >
            AstroJS 🚀
          </a>
          and hosted on{' '}
          <a
            href="https://www.netlify.com/"
            className="text-blue-400"
            target="_blank"
          >
            Netlify 🌐
          </a>
          .
        </div>
      </div>
    </div>
  </Section>
);

export { Footer };
