import {
  GradientText,
  HeroAvatar,
  HeroSocial,
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
            I'm a Senior Software Developer at <strong>Saeloun Inc</strong>.
            with 4+ years of full-stack development experience, specializing in
            Ruby on Rails, ReactJS, NextJS, and NodeJS. I code daily, stay
            updated on tech write technical articles, contribute to open source,
            and mentor developers. I'm also on the Rails Issues Triage team.
          </p>
        </div>
      }
      avatar={
        <img
          className="h-96 w-96"
          src="/assets/images/avatar.webp"
          alt="Avatar image"
          loading="eager"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/mrakhilg">
            <HeroSocial
              src="/assets/images/social/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://facebook.com/akhilmnr">
            <HeroSocial
              src="/assets/images/social/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://linkedin.com/in/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://instagram.com/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/instagram-logo.png"
              alt="Instagram icon"
            />
          </a>
          <a href="https://github.com/akhilgkrishnan">
            <HeroSocial
              src="/assets/images/social/github-logo.png"
              alt="Github icon"
            />
          </a>
          <a href="/rss.xml">
            <HeroSocial src="/assets/images/social/rss.png" alt="RSS icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
