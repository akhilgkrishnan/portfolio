import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="CensorLabel"
        description="This project aims to develop an automated deep learning-based system for identifying censorable
          content in movies and adding statutory warnings accordingly. The system utilizes advanced techniques to detect
          and classify objectionable content within movies, ensuring compliance with regulatory guidelines and
          facilitating the inclusion of appropriate warnings."
        link="https://github.com/akhilgkrishnan/censorlabel"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.LIME}>OpenCV</Tags>
            <Tags color={ColorTags.SKY}>YoloV3</Tags>
            <Tags color={ColorTags.ROSE}>TkInter</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
          </>
        }
      />
      <Project
        name="GekayRealEstate"
        description="GekayRealEstate is a comprehensive real estate management system that offers seamless booking
          capabilities for a wide range of villas and homes listed on the website. The user can effortlessly browse
          through the available properties and make bookings with ease, simplifying the process of securing their
          desired accommodation. The platform provides a user-friendly interface and intuitive features, enabling users
          to swiftly find and reserve their preferred villa or home from the extensive listing."
        link="https://github.com/akhilgkrishnan/GekayRealEstate"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>Django</Tags>
            <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
            <Tags color={ColorTags.YELLOW}>Bootstrap</Tags>
          </>
        }
      />
      <Project
        name="UnivContact"
        description="UnivContact is an innovative contact management application designed specifically for university
        students. This app streamlines the process of managing and organizing contacts within the university community.
        With UnivContact, students can efficiently store and access important contact information for classmates,
        professors, administrative staff, and various campus organizations."
        link="https://github.com/akhilgkrishnan/UnivContact"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Ruby on Rails</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
