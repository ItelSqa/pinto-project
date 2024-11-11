import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import {
  coachingheader,
  childskills,
  loginimage,
  homePageHi_ImStephanie,
} from "../../assets";
import SubscribeSection from "../../components/website/SubscribeSection";
import { Link } from "react-router-dom";
const about = [
  {
    id: 1,
    imgSrc: loginimage,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[38px] text-[24px] relative z-10 mb-3">
        HELLO...{" "}
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        As someone who cares deeply about the well-being of children - whether
        as a parent, teacher, or caregiver - you want the best for them. You
        want to understand them, support them through tough emotions, and
        communicate in ways that build trust and connection. With over 12 years
        of working closely with families and educators, I’m here to help you
        navigate that journey with confidence.
        <br />
        <br />
        <img src={homePageHi_ImStephanie} className="w-full" alt="hello" />
        and I specialise in Emotional Intelligence for anyone who lives or works
        with children.
        <br /> <br /> My approach equips you with practical tools and insights
        to connect with your child and handle their emotions, even in
        challenging moments. This work has taken me around the world - from
        speaking at international conferences to working hands-on with parents
        and educators to create emotionally intelligent, connected
        relationships.
      </p>
    ),
  },
  {
    id: 2,
    imgSrc: childskills,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[38px] text-[24px] relative z-10 mb-3">
        WHY <span style={{ color: "#C1989F" }}>EMOTIONAL INTELLIGENCE</span>
        <br /> PARENTS{" "}
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        You may have come across my work in my best-selling book From Chaos to
        Connection (Amazon), my podcast Emotionally Intelligent Parenting, or in
        print media where I share strategies and dive into topics like
        emotionally intelligent communication, managing anxiety, and even
        support for neurodivergent kids.
        <br />
        <br /> I’m a certified Social and Emotional Intelligence Coach and
        Trainer, accredited by the Institute for Social and Emotional
        Intelligence and recognised by the International Coaching Foundation
        (ICF). My work as a paediatric anxiety therapist empowers children and
        teens to build resilience and confidence while guiding you to support
        them effectively through anxious moments.
        <br /> <br /> Above all, I’m passionate about helping you raise
        resilient, emotionally aware children who thrive. Let’s work together to
        re-create your relationships where everyone feels heard, understood, and
        connected.
        <br /> <br /> Ready to take this journey?
      </p>
    ),
  },
];
function About() {
  // Array of course data

  return (
    <>
      <Header />
      {/* About Intro Section */}
      <section
        className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[436px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        style={{ backgroundImage: `url("${coachingheader}")` }}
      >
        <div className="flex relative flex-col -mb-5 max-w-full w-[1015px] max-md:mb-2.5">
          <h1 className="self-center text-6xl font-extrabold leading-none uppercase text-[#376489] max-md:text-4xl">
            About
          </h1>
        </div>
      </section>

      {about.map((course, index) => (
        <div
          key={course.id}
          className={` ${index % 2 === 0 ? "c_2" : "bg-[#F1E1E4] c_1"}`}
        >
          <div
            className={`container flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-end md:py-24 py-10 md:flex-nowrap flex-wrap-reverse relative`}
          >
            <div
              className={`md:w-[55%] w-[90%] mx-auto md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 ${
                index % 2 === 0 ? "left-[3%]" : "right-[3%]"
              } md:-translate-y-0 -translate-y-24`}
            >
              {course.title}
              {course.description}
              <Link
                to={`/upsale?courseId=${course.id}`}
                key={course.id + index}
              ></Link>
            </div>
            <div className="md:basis-[45%] flex items-center md:mr-6">
              <img
                src={course.imgSrc}
                alt={`course-${index + 1}`}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      ))}

      {/* About page Section */}

      <SubscribeSection />

      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
}

export default About;
