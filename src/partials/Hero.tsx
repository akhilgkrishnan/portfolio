import HeroSocial from '@components/HeroSocial';
import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Akhil G Krishnan</GradientText>{' '}
          <span className="wave">👋</span>
        </>
      }
      description={
        <div className="mt-6 text-xl leading-9">
          <p>
            I'm a Senior Software Developer at{' '}
            <strong>
              <a href="https://www.saeloun.com" target="_blank">
                Saeloun Inc
              </a>
            </strong>
            . with 5+ years of full-stack development experience, specializing
            in Ruby on Rails, ReactJS, NextJS, and NodeJS. I code daily, stay
            updated on tech write technical articles, contribute to open source,
            and mentor developers. Additionally, I am part of the{' '}
            <a
              className="text-blue-600"
              href="https://arc.net/l/quote/istxqczd"
              target="_blank"
            >
              Rails Issues Triage
            </a>{' '}
            team and also undertake freelance work.
          </p>
        </div>
      }
      avatar={
        <img
          className="size-96"
          src="/assets/images/avatar.webp"
          alt="Akhil G Krishnan - Senior Full Stack Developer profile picture"
          loading="eager"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/mrakhilg">
            <HeroSocial
              src="/assets/images/social/twitter-icon.png"
              alt="Follow Akhil G Krishnan on Twitter"
            />
          </a>
          <a href="https://facebook.com/akhilmnr">
            <HeroSocial
              src="/assets/images/social/facebook-icon.png"
              alt="Connect with Akhil G Krishnan on Facebook"
            />
          </a>
          <a href="https://linkedin.com/in/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/linkedin-icon.png"
              alt="View Akhil G Krishnan's LinkedIn profile"
            />
          </a>
          <a href="https://instagram.com/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/instagram-logo.png"
              alt="Follow Akhil G Krishnan on Instagram"
            />
          </a>
          <a href="https://github.com/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/github-logo.png"
              alt="View Akhil G Krishnan's GitHub repositories"
            />
          </a>
          <a href="/rss.xml">
            <HeroSocial src="/assets/images/social/rss.png" alt="Subscribe to Akhil G Krishnan's blog RSS feed" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
