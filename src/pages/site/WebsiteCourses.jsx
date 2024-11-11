import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import {
  courseImgFive,
  courseImgFour,
  courseImgOne,
  courseImgSix,
  courseImgThree,
  courseImgTwo,
  coachingheader,
} from "../../assets";
import SubscribeSection from "../../components/website/SubscribeSection";
import { Link } from "react-router-dom";
const courses = [
  {
    id: 27,
    imgSrc: courseImgOne,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        Raising Emotionally Intelligent Kids For parents
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
         The Introduction to Raising Emotionally Intelligent Kids
         course was created to help parents navigate the emotional
         complexities of raising children in today's fast-paced world.
         This course will take you through the process of unlearning
         outdated emotional responses, mastering calm reactions, and
         passing on the life-changing skills of emotional intelligence
         to your child. It combines evidence-based practices and
         practical strategies for a modern, emotionally intelligent
         family dynamic
        <br />
        <br />
         The course includes an exclusive emotional intelligence quiz
         for both parents and children, allowing you to discover your
         family's emotional strengths and areas for growth. Through
         reflection and hands-on strategies, you will transform your
        family's emotional well-being.
        <br /> 
      </p>
    ),
  },
  {
    id: 2,
    imgSrc: courseImgTwo,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        Chaos to Connection 10 Week Parenting Course
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        The "Introduction to Chaos to Connection" 10-Week Program is designed to help 
        parents navigate the challenges of parenting with calm, confidence, and 
        emotional intelligence. Through this transformational journey, you’ll 
        uncover the science behind your child’s behavior, build emotionally 
        intelligent strategies, and foster a deeper connection with your kids. 
        By the end, you'll move from reactive to responsive parenting, creating a 
        harmonious, respectful home where both you and your child thrive.
        <br />
      </p>
    ),
  },
  {
    id: 145,
    imgSrc: courseImgThree,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        Supporting Anxious and Sensitive Kids
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        This course is designed to equip parents with the knowledge and tools to support anxious and sensitive children. 
        You’ll learn how to recognise the signs of anxiety, understand the thinking patterns that fuel it, and gain 
        effective strategies to help your child break free from anxiety’s grip.
        <br />

      </p>
    ),
  },
  {
    id: 4,
    imgSrc: courseImgFour,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        From Reactive To Responsive Parenting: End The Yelling With Emotional Intelligence
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        From Reactive To Responsive Parenting: End The Yelling With Emotional Intelligence 
        is designed to empower parents who feel trapped in the cycle of raising their 
        voice at their kids. The course helps you break free from reactive parenting 
        and equips you with emotional intelligence strategies to remain calm, even 
        during challenging situations. By diving into the root causes of frustration, 
        this course enables you to shift from feeling triggered and overwhelmed to 
        becoming calm, confident role models for your children.
        <br />       
      </p>
    ),
  },
  {
    id: 143,
    imgSrc: courseImgFive,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        EFT Tapping Emotional Intelligence & Freedom Technique
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        This mini course equips you with a practical and powerful tool to manage stress, 
        anxiety, anger, and overwhelm using EFT Tapping. By the end, you will know exactly 
        how to access your calm so you can stay connected and focused during difficult moments. 
        Unlocking this ability will help foster emotional intelligence, confidence, and 
        resilience. Through the evidence-based method of EFT, which includes emotional 
        intelligence and elements of CBT, you will gain a life-changing technique to 
        transform your emotional well-being.
        <br />
      </p>
    ),
  },
  {
    id: 69,
    imgSrc: courseImgSix,
    title: (
      <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
        Decoding & Defusing your child’s Challenging Behavior
      </h2>
    ),
    description: (
      <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
        
        This masterclass is designed to help parents decode the challenging behaviors their children display 
        and provide practical, effective strategies to defuse those moments without resorting to punitive 
        measures. You'll gain insights into the latest research on brain development and the nervous system,
        allowing you to respond with calmness and confidence when your child exhibits difficult behaviours.

        <br />
        
      </p>
    ),
  },
];
function WebsiteCourses() {
  // Array of course data

  return (
    <>
      <Header />
      {/* Courses Intro Section */}
      <section
        className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[436px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        style={{ backgroundImage: `url("${coachingheader}")` }}
      >
        <div className="flex relative flex-col -mb-5 max-w-full w-[1015px] max-md:mb-2.5">
          <h1 className="self-center text-6xl font-extrabold leading-none uppercase text-[#376489] max-md:text-4xl">
            Courses
          </h1>
          <p className="mt-8 text-xl font-medium leading-7 text-[#274C69] max-md:max-w-full align-middle justify-center">
            Whether you&apos;re looking to learn about emotional intelligence at
            home or in the workplace,
            <br />
            you&apos;ll find courses on topics like parenting strategies,
            workplace teamwork, and personal development to enhance your
            emotional awareness and skills
          </p>
        </div>
      </section>

      {/* Courses Section */}
      {courses.map((course, index) => (
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
              <h3 className="text-[#C1989F] font-extrabold font-montserrat md:text-[40px] text-[28px] relative z-10">
                Course - {index + 1}
              </h3>
              {course.title}
              {course.description}
              <Link
                to={`/upsale?courseId=${course.id}`}
                key={course.id + index}
              >
                <button className="uppercase bg-[#376489] relative z-10 px-10 text-[16px] md:w-[330px] w-[180px] h-[45px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  Apply Now
                </button>
              </Link>
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

      <SubscribeSection />
      <Footer />
    </>
  );
}

export default WebsiteCourses;
