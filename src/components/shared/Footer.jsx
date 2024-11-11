import { Link } from "react-router-dom";
import { award1, award2 } from "../../assets";

import Icons from "../Icons";
const footerItems = [
  { name: "Contact Us", link: "/contact" },
  { name: "Resources", link: "/publicResources" },
  { name: "Podcast", link: "/podcast" },
  { name: "Books", link: "/books" },
];

const courses = [
  {
    name: "Raising Emotionally Intelligent Kids For parents",
    link: "/courses-info",
  },
  {
    name: "Chaos to Connection 10 Week Parenting Course",
    link: "/courses-info",
  },
  {
    name: "Supporting Anxious and Sensitive Kids",
    link: "/courses-info",
  },
  {
    name: "From Reactive To Responsive Parenting: End The Yelling With Emotional Intelligence",
    link: "/courses-info",
  },
  {
    name: "EFT Tapping Emotional Intelligence & Freedom Technique",
    link: "/courses-info",
  },
  {
    name: " Decoding & Defusing your child’s Challenging Behavior",
    link: "/courses-info",
  },
];

function Footer() {
  return (
    <section className="px-8 py-10 bg-white md:px-2">
      <section className="flex flex-col items-start justify-between p-8 md:flex-row gap-7 md:gap-5 cContainer md:p-2">
        {/* Logo and Social Links */}
        <div className="md:basis-[25%] mb-5 md:mb-0 p-4 md:p-0 flex-col space-y-4 hidden lg:block">
          <img
            src={Icons.BrandLogo}
            alt="Brand Logo"
            className=" md:w-[247px] w-[200px]  "
          />
          <ul className="flex items-center space-x-4">
            {[
              Icons.twitter,
              Icons.facebook,
              Icons.telegram,
              Icons.youtube,
              Icons.tiktok,
              Icons.discard,
            ].map((icon, index) => (
              <li
                key={index}
                className="bg-[#376489] p-2 rounded-lg flex items-center justify-center w-[36px] h-[36px]"
              >
                <img src={icon} alt="social icon" />
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div className="md:basis-[13%] pt-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            About
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            {footerItems.map((item, index) => (
              <li key={index} className="py-1 transition-all hover:underline">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div className="md:basis-[18%] pt-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            Courses
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            {courses.map((course, index) => (
              <li key={index} className="py-1 transition-all hover:underline">
                <Link to={course.link}>{course.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards Section */}
        <div className="md:basis-[30%] pt-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            Awards
          </h2>
          <ul className="flex items-center gap-3">
            <li>
              <img src={award1} alt="Award 1" className="w-[60px] md:w-auto" />
            </li>
            <li>
              <img src={award2} alt="Award 2" className="w-[60px] md:w-auto" />
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#C1989F] text-[#FAF5F0] text-center py-4 text-[20px] font-semibold">
        © 2024 Stephanie Pinto. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
