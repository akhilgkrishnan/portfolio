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
            I am a Full Stack Developer with over 4+ years of experience in
            application development.
          </p>{' '}
          <p>
            Currently, I hold the position of{' '}
            <strong>
              Senior Software Developer at{' '}
              <a
                className="underline"
                href="http://saeloun.com"
                target="_blank"
              >
                Saeloun Inc.
              </a>
            </strong>
            , where my primary focus is on building web applications using Ruby
            on Rails, ReactJS, NextJS and NodeJS.
          </p>{' '}
          <p>
            My typical day revolves around coding, staying updated with new
            technologies, engaging in continuous learning through books, and
            actively contributing to open source projects. I also have a passion
            for writing technical articles, sharing my knowledge with the
            community, and mentoring aspiring developers to help them enhance
            their skills and become better professionals. I'm a member of Rails
            Issues Triage team.
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
