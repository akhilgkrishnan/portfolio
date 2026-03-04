import HeroSocial from '@components/HeroSocial';
import { TerminalWindow } from '@components/TerminalWindow';
import { Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
      {/* Avatar */}
      <div className="shrink-0">
        <div className="terminal-window p-2">
          <img
            className="size-64 md:size-80"
            src="/assets/images/avatar.webp"
            alt="Akhil G Krishnan - Senior Full Stack Developer profile picture"
            loading="eager"
          />
        </div>
      </div>

      {/* Terminal Bio */}
      <div className="flex-1">
        <TerminalWindow title="whoami">
          <div className="space-y-4">
            {/* Name with cursor */}
            <div className="flex items-center">
              <span className="text-terminal-green">$</span>
              <span className="ml-2 text-terminal-gray-300">whoami</span>
            </div>
            <h1 className="text-2xl font-bold">
              <span className="text-terminal-green">Akhil G Krishnan</span>
              <span className="wave ml-2">👋</span>
            </h1>
            <p className="text-sm text-terminal-gray-500">
              Ruby on Rails Contributor from India | Rails Issues Triage Team Member
            </p>

            {/* Bio as command output */}
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-terminal-green">$</span>
                <span className="ml-2 text-terminal-gray-300">cat ./about.txt</span>
              </div>
              <div className="text-terminal-gray-400 leading-relaxed">
                <p>
                  <span className="text-terminal-emerald">Senior Software Developer</span> at{' '}
                  <a
                    href="https://www.saeloun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link"
                  >
                    Saeloun Inc
                  </a>
                </p>
                <p className="mt-2">
                  <span className="text-terminal-gray-500">{'// '}</span>
                  5+ years of full-stack development experience
                </p>
                <p>
                  <span className="text-terminal-gray-500">{'// '}</span>
                  Specializing in Ruby on Rails, ReactJS, NextJS, NodeJS
                </p>
                <p>
                  <span className="text-terminal-gray-500">{'// '}</span>
                  <a
                    className="terminal-link"
                    href="https://contributors.rubyonrails.org/contributors/akhil-g-krishnan/commits"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rails Core Contributor
                  </a>{' '}
                  &{' '}
                  <a
                    className="terminal-link"
                    href="https://arc.net/l/quote/istxqczd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Issues Triage Team
                  </a>{' '}
                  member
                </p>
                <p>
                  <span className="text-terminal-gray-500">{'// '}</span>
                  Open source contributor & technical writer from India
                </p>
              </div>
            </div>

            {/* Social links as ls output */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center">
                <span className="text-terminal-green">$</span>
                <span className="ml-2 text-terminal-gray-300">ls -la ./social/</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://twitter.com/mrakhilg" className="terminal-link text-sm" target="_blank" rel="noopener noreferrer">
                  <HeroSocial
                    src="/assets/images/social/twitter-icon.png"
                    alt="Follow Akhil G Krishnan on Twitter"
                    name="twitter"
                  />
                </a>
                <a href="https://facebook.com/akhilmnr" className="terminal-link text-sm" target="_blank" rel="noopener noreferrer">
                  <HeroSocial
                    src="/assets/images/social/facebook-icon.png"
                    alt="Connect with Akhil G Krishnan on Facebook"
                    name="facebook"
                  />
                </a>
                <a href="https://linkedin.com/in/akhilgkrishnan" className="terminal-link text-sm" target="_blank" rel="noopener noreferrer">
                  <HeroSocial
                    src="/assets/images/social/linkedin-icon.png"
                    alt="View Akhil G Krishnan's LinkedIn profile"
                    name="linkedin"
                  />
                </a>
                <a href="https://instagram.com/akhilgkrishnan" className="terminal-link text-sm" target="_blank" rel="noopener noreferrer">
                  <HeroSocial
                    src="/assets/images/social/instagram-logo.png"
                    alt="Follow Akhil G Krishnan on Instagram"
                    name="instagram"
                  />
                </a>
                <a href="https://github.com/akhilgkrishnan" className="terminal-link text-sm" target="_blank" rel="noopener noreferrer">
                  <HeroSocial
                    src="/assets/images/social/github-logo.png"
                    alt="View Akhil G Krishnan's GitHub repositories"
                    name="github"
                  />
                </a>
                <a href="/rss.xml" className="terminal-link text-sm">
                  <HeroSocial
                    src="/assets/images/social/rss.png"
                    alt="Subscribe to Akhil G Krishnan's blog RSS feed"
                    name="rss"
                  />
                </a>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </Section>
);

export { Hero };
