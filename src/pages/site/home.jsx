import { useState } from "react";
import {
  blog2,
  blog3,
  blog4,
  imgCard1,
  imgCard2,
  imgCard3,
  imgCard4,
  maskLogoFive,
  maskLogoFour,
  maskLogoOne,
  maskLogoThree,
  maskLogoTwo,
  offereingOne,
  offereingThree,
  offereingTwo,
  secHomeImg,
  stephImg,
  stephhome,
  stephMob,
  canHelpYouHomePageBG,
  howItWorkBgHomePage,
  howitworksbrainicon,
  howitworkszoomicon,
  howitworkslighticon,
  howitworksDonorIcon,
  previewBlogHomePage,
  homePageHi_ImStephanie,
  brandBg,
} from "../../assets";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import SubscribeSection from "../../components/website/SubscribeSection";
import { Link } from "react-router-dom";

function Home() {
  const isMobileView = window.innerWidth <= 430;
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  const [isPodacastHover, setIsPodcastHover] = useState(false);
  const [isPodacastHover2, setIsPodcastHover2] = useState(false);
  const [isPodacastHover3, setIsPodcastHover3] = useState(false);
  const [isPodacastHover4, setIsPodcastHover4] = useState(false);

  return (
    <div>
      <Header />
      {/* Mobile Background */}
      <div
        className="h-[90vh] landing flex md:hidden bg-cover bg-center bg-no-repeat items-start py-12 justify-start"
        style={{ backgroundImage: `url(${stephMob})` }}
      >
        <div className="text-white container text-center flex flex-col justify-center items-center gap-3 w-[90%] bg-opacity-70">
          <h4 className="font-mognolia text-[20px] leading-[28px]">
            The future is emotionally intelligent.
          </h4>
          <h1 className="font-montserrat uppercase text-[24px] font-black leading-[40px]">
            Emotional Intelligence Speaker & Author
          </h1>
          <button className="uppercase bg-[#F1E1E4] font-semibold rounded-full w-[180px] h-[45px] text-[#274C69] mt-2">
            learn more
          </button>
        </div>
      </div>

      {/* Desktop Background */}
      <div
        className=" h-[80vh] landing hidden md:flex bg-cover bg-center bg-no-repeat items-center justify-start"
        style={{ backgroundImage: `url(${stephhome})` }}
      >
        <div className="container grid grid-cols-2 ">
          <div className="flex flex-col items-center gap-4 text-center text-white bg-opacity-70">
            <h4 className="font-mognolia text-[30px]">
              The future is emotionally intelligent.
            </h4>
            <h1 className="font-montserrat uppercase text-[45px] font-black leading-[60px]">
              Emotional Intelligence Speaker & Author
            </h1>
            <button className="uppercase bg-[#F1E1E4] font-semibold rounded-full w-[250px] h-[45px] text-[#274C69] ">
              learn more
            </button>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between gap-6 py-20 pb-0 md:flex-row md:pb-20 md:gap-20">
        <div className="md:basis-[55%]">
          {/* <h1 className="font-brittany md:text-[60px] text-[40px] font-normal text-newprimary">
            Hi, I m <span className="text-textPrimary">Stephanie</span>
          </h1> */}
          <img className="h-16" alt="sign" src={homePageHi_ImStephanie} />
          <p className="text-[#274C69] text-lg font-medium leading-[24.1px] font-montserrat mt-3">
            I’m passionate about helping both families and professionals unlock
            the power of emotional intelligence to create deeper connections and
            thriving environments. I started my journey by founding my
            emotionally intelligent parenting community and offering coaching,
            where I focused on guiding parents to raise emotionally resilient,
            confident, and kind kids. Through my workshops, courses, and
            podcast, I continue to teach families how to foster empathy,
            collaboration, and problem-solving, all while embracing an
            emotionally intelligent, (and punishment-free) approach to
            parenting. <br /> <br />
            As my work evolved, I expanded into the professional and corporate
            space, showing how emotional intelligence can transform teams,
            strengthen leadership, and improve collaboration. Now, I work with
            both families and professionals, delivering keynotes, running
            corporate training sessions, and consulting with leaders. My work in
            this space helps people to understand and manage emotions for
            stronger, healthier relationships - whether at home or in the
            workplace.
            <br />
            <br />
          </p>
        </div>
        <div className="md:basis-[45%]">
          <img src={stephImg} alt="" />
        </div>
      </div>
      <div className="container flex flex-col-reverse items-center justify-between gap-10 py-20 md:flex-row md:gap-16 sectionwithbg">
        <div className="md:basis-[42%]">
          <img src={secHomeImg} alt="" />
        </div>
        <div className="md:basis-[58%]">
          <h1 className="font-montserrat text-[48px] font-[800] text-newprimary">
            <span className="font-normal font-mognolia">Why </span>
            <span className="text-textPrimary">Emotional </span> Intelligence?
          </h1>
          <p className="text-[#274C69] text-lg font-medium leading-[24.1px] font-montserrat mt-5">
            Emotional Intelligence has never been more important than it is
            right now.
            <br /> <br />
            Whether you're a parent or a professional, being able to understand
            and manage emotions is key to navigating the challenges we all face
            today. With so much uncertainty - whether it’s economic shifts or
            the lasting impact of the pandemic - resilience is a must. Emotional
            Intelligence gives us the tools to stay calm, adapt, and bounce back
            when life throws us curveballs.
            <br />
            <br /> We’re also seeing a real disconnect in empathy and
            connection. People are feeling more distant from each other, and
            it’s taking a toll on our relationships, both at home and at work.
            Emotional Intelligence helps us close that gap by building empathy,
            understanding, and stronger bonds.
            <br />
            <br />
            For parents, it means raising kids who are confident and emotionally
            strong. For professionals, it means fostering teamwork and leading
            with compassion. Simply put, emotional intelligence helps us all
            thrive, no matter what life throws our way.
          </p>
        </div>
      </div>
      {isMobileView ? (
        <div
          style={{ backgroundImage: `url(${brandBg})` }}
          className=" bg-contain w-full h-[250px] space-x-3 logosSec flex items-center justify-between p-4  overflow-y-hidden flex-wrap gap-[15px]"
        >
          <img className="w-[157px] h-[57px]" src={maskLogoOne} alt="" />
          <img className="w-[157px] h-[57px]" src={maskLogoTwo} alt="" />
          <img className="w-[157px] h-[57px]" src={maskLogoThree} alt="" />
          <img className="w-[157px] h-[57px]" src={maskLogoFour} alt="" />
          <img className="w-[157px] h-[57px]" src={maskLogoFive} alt="" />
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${brandBg})` }}
          className=" bg-contain w-full h-[200px] space-x-3 logosSec flex items-center justify-between p-4  overflow-y-hidden"
        >
          <img src={maskLogoOne} alt="" />
          <img src={maskLogoTwo} alt="" />
          <img src={maskLogoThree} alt="" />
          <img src={maskLogoFour} alt="" />
          <img src={maskLogoFive} alt="" />
        </div>
      )}
      <div className="container py-24 text-center">
        <h3 className="text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]">
          EMOTIONAL INTELLIGENT PARENTING <br />
          <span className="text-textPrimary"> WITH STEPHANIE PINTO </span>
        </h3>
        <h4 className="font-mognolia font-normal text-textPrimary md:text-[50px] text-[40px] mt-6 mb-12">
          Podcast{" "}
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4 pb-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {/* <ProdcustCard />
          <ProdcustCard />
          <ProdcustCard />
          <ProdcustCard /> */}
          <div
            className="w-fit relative md:basis-[calc(100%/4-10px)]"
            onMouseEnter={() => setIsPodcastHover(true)}
            onMouseLeave={() => setIsPodcastHover(false)}
          >
            <div className="flex items-center justify-center">
              <img src={imgCard1} alt="" />
            </div>
            <div
              className={`w-[90%] lg:w-[90%] sm:w-[70%] object-none h-50 mx-auto  -translate-y-[20%]  pt-5 pb-8 px-3 ${
                isPodacastHover ? "bg-[#F1E1E4]" : "bg-[#C2D5E4]"
              }`}
            >
              <div className="relative">
                <div
                  className={`${
                    isPodacastHover
                      ? "bg-[#C1989F] text-[#F1E1E4]" : "bg-[#376489] text-[#F1E1E4]"
                  } absolute -top-[4.2rem] w-[60%] left-[50%]  -translate-x-[50%] h-[38px] flex items-center justify-center text-base font-medium`}
                >
                  Episode - 56
                </div>
                <h2
                  className={`${
                    isPodacastHover ?  "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  How We Keep 
                </h2>
                <h2
                  className={`${
                    isPodacastHover ?  "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   Our Kids 
                </h2>
                <h2
                  className={`${
                    isPodacastHover ?  "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   Safe Online
                </h2>
                <h3
                  className={`${
                    isPodacastHover ? "text-textPrimary" : "text-[#376489]"
                  } font-mognolia text-[32px] font-normal mb-6`}
                >
                (Without Banning Everything!)
                </h3>
                <span className="block mb-3 text-base font-medium text-newprimary">
                  
                </span>
                <button
                  className={`${
                    isPodacastHover ? "bg-[#C1989F] text-[#F1E1E4]" : "bg-[#376489] text-[#F1E1E4]"
                  } transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase font-semibold rounded-full w-[90%] h-[40px] mt-40 mb-14 text-[#F1E1E4] `}
                >
                  <Link to="https://open.spotify.com/episode/2SBCCrZOn3o2rBx6W6aMEL?si=dLRJAVIATqGHVkIVZqBEhg">
                  Listen Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div
            className="w-fit relative md:basis-[calc(100%/4-10px)]"
            onMouseEnter={() => setIsPodcastHover2(true)}
            onMouseLeave={() => setIsPodcastHover2(false)}
          >
            <div className="flex items-center justify-center">
              <img src={imgCard2} alt="" />
            </div>
            <div
              className={`${
                isPodacastHover2 ? "bg-[#F1E1E4]" : "bg-[#C2D5E4]"
              } w-[90%] object-none h-50 mx-auto  -translate-y-[20%]  pt-5 pb-4 px-3`}
            >
              <div className="relative">
                <div
                  className={`${
                    isPodacastHover2
                      ? "bg-[#C1989F] text-[#F1E1E4]"
                      : "bg-[#376489] text-[#F1E1E4]"
                  } absolute -top-[4.2rem] w-[60%] left-[50%] -translate-x-[50%] h-[38px] flex items-center justify-center text-base font-medium`}
                >
                  Episode - 55
                </div>
                <h2
                  className={`${
                    isPodacastHover2 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  Emotional Intelligence 
                </h2>
                <h2
                  className={`${
                    isPodacastHover2 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  in the 
                </h2>
                <h2
                  className={`${
                    isPodacastHover2 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  classroom
                </h2>
                <h3
                  className={`${
                    isPodacastHover2 ? "text-textPrimary" : "text-[#376489]"
                  } font-mognolia text-[32px] font-normal mb-6`}
                >
                  (and Beyond)
                </h3>
                <span className="block mb-3 text-base font-medium text-newprimary">
                 
                </span>
                <button
                  className={`${
                    isPodacastHover2 ? "bg-[#C1989F]" : "bg-[#376489]"
                  } transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase font-semibold rounded-full w-[90%] h-[40px] text-[#F1E1E4] mt-40 mb-8` }
                >
                  <Link to="https://open.spotify.com/episode/2GADqRh6RnzrB3cUyRHFcq?si=M5jry3QFROK_ugSa2hhiNg">
                  Listen Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div
            className="w-fit relative md:basis-[calc(100%/4-10px)]"
            onMouseEnter={() => setIsPodcastHover3(true)}
            onMouseLeave={() => setIsPodcastHover3(false)}
          >
            <div className="flex items-center justify-center">
              <img src={imgCard3} alt="" />
            </div>
            <div
              className={`w-[90%] lg:w-[90%] sm:w-[70%] object-none h-50 mx-auto -translate-y-[20%]  pt-5 pb-4 px-3 ${
                isPodacastHover3 ?  "bg-[#F1E1E4]" : "bg-[#C2D5E4]"
              }`}
            >
              <div className="relative">
                <div
                  className={`${
                    isPodacastHover3
                      ?  "bg-[#C1989F] text-[#F1E1E4]" : "bg-[#376489] text-[#F1E1E4]"
                      
                  } absolute -top-[4.2rem] w-[60%] left-[50%]  -translate-x-[50%] h-[38px] flex items-center justify-center text-base font-medium`}
                >
                  Episode - 54
                </div>
                <h2
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  Parenting on 
                </h2>
                <h2
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                 the same page: 
                </h2>
                <h2
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  my husband's 
                </h2>
                <h2
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  journey 
                </h2>
                <h2
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  into
                </h2>
                <h3
                  className={`${
                    isPodacastHover3 ? "text-textPrimary" : "text-[#376489]"
                  } font-mognolia text-[32px] font-normal mb-6`}
                >
                  Emotional Intelligence
                </h3>
                <span className="block mb-3 text-base font-medium text-newprimary">
                
                </span>
                <button
                  className={`${
                    isPodacastHover3 ? "bg-[#C1989F] text-[#F1E1E4]" : "bg-[#376489] text-[#F1E1E4]"
                  } transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase font-semibold rounded-full w-[90%] h-[40px] mt-20  text-[#F1E1E4]`}
                >
                  <Link to=" https://open.spotify.com/episode/6aypsF8OsHqf2ErA6054cf?si=I70opRmpRSW-G33LNrQ5cQ">
                  Listen Now
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div
            className="w-fit relative md:basis-[calc(100%/4-10px)]"
            onMouseEnter={() => setIsPodcastHover4(true)}
            onMouseLeave={() => setIsPodcastHover4(false)}
          >
            <div className="flex items-center justify-center">
              <img src={imgCard4} alt="" />
            </div>
            <div
              className={`${
                isPodacastHover4 ? "bg-[#F1E1E4]" : "bg-[#C2D5E4]" 
              } w-[90%] object-none h-50 mx-auto  -translate-y-[16%]  pt-5 pb-4 px-3`}
            >
              <div className="relative">
                <div
                  className={`${
                    isPodacastHover4
                      ? "bg-[#C1989F] text-[#F1E1E4]" 
                      : "bg-[#376489] text-[#F1E1E4]"
                  } absolute -top-[4.2rem] w-[60%] left-[50%]  -translate-x-[50%] h-[38px] flex items-center justify-center text-base font-medium`}
                >
                  Episode - 53
                </div>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                  What Really Is 
                </h2>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   Emotional 
                </h2>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                 Intelligence 
                </h2>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   and What Does 
                </h2>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   It 
                </h2>
                <h2
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } text-[26px] font-montserrat font-bold mb-2 uppercase px-3`}
                >
                   Really Look Like 
                </h2>
              
                <h3
                  className={`${
                    isPodacastHover4 ? "text-textPrimary" : "text-[#376489]"
                  } font-mognolia text-[32px] font-normal mb-6`}
                >
                  Parenting?
                </h3>
                <span className="block mb-3 text-base font-medium text-newprimary">
                  
                </span>
                <button
                  className={`${
                    isPodacastHover4 ?  "bg-[#C1989F]" : "bg-[#376489]" 
                  } transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase font-semibold rounded-full w-[90%] h-[40px] text-[#F1E1E4] mt-20 `}
                >
                  <Link to="https://open.spotify.com/episode/2SBCCrZOn3o2rBx6W6aMEL?si=dLRJAVIATqGHVkIVZqBEhg">
                  Listen Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="uppercase bg-[#376489] font-semibold rounded-full w-[330px] h-[55px] text-[#F1E1E4] mt-0">
        <Link to=" https://open.spotify.com/episode/0dgB9KrA8BS2k1pMOsDgct?si=bMLoPByoSCSJ5A_hLjby2g">
       
          All Episodes {" "}
          </Link>
        </button>
      </div>
      <div
        style={{ backgroundImage: `url("${canHelpYouHomePageBG}")` }}
        className=" min-h-[100vh] bg-cover bg-no-repeat wecanHelp flex items-center py-16 justify-start"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div>
            <h3 className="text-[#274C69] font-extrabold text-[48px] mb-4">
              Here’s How I can Help{" "}
              <span className="font-normal font-mognolia">You</span>
            </h3>
            <p className="text-[#274C69] font-semibold text-lg mb-3">
              If you’re a leader looking to build a more emotionally
              intelligent, resilient team, or a parent eager to raise
              emotionally strong, connected kids, I’m here to support you. After
              all, the workplace is a lot like a family; both are teams that
              rely on relationships, trust, and collaboration, where good
              communication and emotional support create joy and connection
              among everyone involved.
            </p>
            <p className="text-[#274C69] font-semibold text-lgm mb-4">
              For professionals, I offer consulting, insightful keynotes, and
              tailored presentations designed to inspire and equip your team
              with practical tools for navigating today’s challenges.
            </p>
            {/* <h3 className="font-normal font-mognolia text-[48px] text-[#274C69] mb-4">
          For parents{" "}
          </h3> */}
            <p className="text-[#274C69] font-semibold text-lg ">
              For parents,I provide online courses, a welcoming Facebook
              community, and my Emotionally Intelligent Parenting podcast.
              Through these resources, I’ll guide you in creating deeper
              connections and fostering emotional intelligence - whether in the
              workplace or at home.
            </p>
            <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase bg-[#376489] px-12 text-[17px] font-semibold rounded-full h-[45px] text-[#F1E1E4] mt-5">
              Book Free Consult
            </button>
          </div>
        </div>
      </div>
      {/* offereing  */}
      <div className="container py-20 text-center">
        <h3 className="text-[#376489] font-montserrat text-[40px] font-extrabold uppercase mb-24">
          Offerings
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-4 pb-14 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
          <div
            className="relative w-full md:basis-[calc(100%/3-30px)] mb-10"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="relative">
            <div
                className={`absolute left-[50%] -translate-x-[50%] -top-10 w-[75%] leading-[31.69px]   h-[90px] font-bold font-montserrat text-[22px] px-1 uppercase text-center flex items-center justify-center ${
                  isHover
                    ? "bg-[#c2d5e4d3] text-[#274C69]"
                    : "bg-[#f1e1e4ce] text-[#C1989F]"
                }`}
              >
                Keynotes and Presentations
              </div>
            </div>
            <img src={offereingOne} alt="" />
            <div
              className={`flex flex-col justify-between items-center px-4 py-4 bg-[#F1E1E4] w-[90%] mx-auto min-h-96 ${
                isHover ? "bg-[#c2d5e4d3]" : "bg-[#F1E1E4]"
              }`}
            >
              <p className="font-medium text-base leading-[23px]  font-montserrat text-[#274C69]">
                My keynotes and presentations on emotional intelligence empower
                audiences with engaging insights and practical tools. I aim to
                spark meaningful conversations and deepen understanding, whether
                I'm speaking to parents, educators, or corporate teams.
              </p>
              <button
                className={`transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase px-10 text-[16px] w-[80%] h-[40px] font-semibold rounded-full mt-3 ${
                  isHover
                    ? "bg-[#376489] text-[#F1E1E4]"
                    : "bg-[#C1989F] text-[#F1E1E4]"
                }`}
              >
                Read more
              </button>
            </div>
          </div>
          <div
            className="relative w-full md:basis-[calc(100%/3-30px)] mb-10"
            onMouseEnter={() => setIsHover2(true)}
            onMouseLeave={() => setIsHover2(false)}
          >
            <div className="relative">
              <div
                className={`absolute left-[50%] -translate-x-[50%] -top-10 w-[75%] leading-[31.69px]   h-[90px] font-bold font-montserrat text-[22px] px-1 uppercase text-center flex items-center justify-center ${
                  isHover2
                    ? "bg-[#c2d5e4d3] text-[#274C69]"
                    : "bg-[#f1e1e4ce] text-[#C1989F]"
                }`}
              >
                Training and Workshops
              </div>
            </div>
            <img src={offereingThree} alt="" />
            <div
              className={`flex flex-col justify-between items-center px-4 py-4 bg-[#F1E1E4] w-[90%] mx-auto min-h-96 ${
                isHover2 ? "bg-[#c2d5e4d3]" : "bg-[#F1E1E4]"
              }`}
            >
              <p className="text-[#274C69] font-medium text-base leading-[23px]  font-montserrat">
                My training sessions and workshops on emotional intelligence are
                interactive and tailored to meet the needs of your group.
                Participants gain practical skills and strategies that foster
                connection, teamwork and resilience.
              </p>
              <button
                className={`transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase px-10 text-[16px] w-[80%] h-[40px] font-semibold rounded-full mt-3 ${
                  isHover2
                    ? "bg-[#376489] text-[#F1E1E4]"
                    : "bg-[#C1989F] text-[#F1E1E4]"
                }`}
              >
                Read more
              </button>
            </div>
          </div>
          <div
            className="relative w-full md:basis-[calc(100%/3-30px)] mb-10"
            onMouseEnter={() => setIsHover3(true)}
            onMouseLeave={() => setIsHover3(false)}
          >
            <div className="relative">
            <div
                className={`absolute left-[50%] -translate-x-[50%] -top-10 w-[75%] leading-[31.69px]   h-[90px] font-bold font-montserrat text-[22px] px-1 uppercase text-center flex items-center justify-center ${
                  isHover3
                    ? "bg-[#c2d5e4d3] text-[#274C69]"
                    : "bg-[#f1e1e4ce] text-[#C1989F]"
                }`}
              >
                Online Courses{" "}
              </div>
            </div>
            <img src={offereingTwo} alt="" />
            <div
              className={`flex flex-col justify-between items-center px-4 py-4 bg-[#F1E1E4] w-[90%] mx-auto min-h-96 ${
                isHover3 ? "bg-[#c2d5e4d3]" : "bg-[#F1E1E4]"
              }`}
            >
              <p className="text-[#274C69] font-medium text-base leading-[23px]  font-montserrat">
                Designed for both parents and professionals, my online courses
                provide practical strategies and insights to deepen emotional
                awareness and create supportive environments. They cover a range
                of emotional intelligence topics, from managing triggers to
                understanding kids' behaviour and fostering teamwork in
                corporate settings.
              </p>
              <button
                className={`transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase px-10 text-[16px] w-[80%] h-[40px] font-semibold rounded-full mt-3 ${
                  isHover3
                    ? "bg-[#376489] text-[#F1E1E4]"
                    : "bg-[#C1989F] text-[#F1E1E4]"
                }`}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* how it will work  */}
      <div
        style={{ backgroundImage: `url("${howItWorkBgHomePage}")` }}
        className="flex items-center justify-center bg-no-repeat bg-cover howitwork"
      >
        <div className="relative py-[5rem] container flex flex-col items-center text-center w-full" >
          <h3 className="text-[#FAF5F0] text-5xl font-extrabold font-montserrat mb-17">
            “The future is emotionally intelligent. Let it start with you.”
          </h3>
          {/* <div className=" hidden sm:block md:block lg:block h-1 border-t border-gray-700 border-dashed border-spacing-10 w-[76%]" /> */}
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
            <div className="w-fit flex flex-col items-center justify-center gap-4 md:basis-[calc(100%/4-50px)] basis-[calc(100%/2-30px)]">
              {/* <div className=" p-[6px] bg-[#376489] rounded-full w-fit relative">
                <span className="text-[#376489] bg-[#C2D5E4] rounded-full flex items-center justify-center size-[36px] font-bold text-[24px] absolute -top-6 left-[50%] -translate-x-[50%] z-10">
                  1
                </span>
                <div className="rounded-full  border border-white md:size-[115px] size-[72px] flex items-center justify-center bg-[#376489]">
                  <img src={howitworksbrainicon} alt="howitworksbrainicon" />
                </div>
              </div> */}
              {/* <div>
                <h3 className="text-[#376489] uppercase  w-[70%] mx-auto md:text-[23px] text-base font-montserrat font-bold md:leading-[31px] leading-[26px]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-[#376489]   mx-auto md:text-[15px] text-xs font-montserrat font-medium leading-[22px] mt-3">
                  Lorem ipsum dolor sit amet consectetur. Felis tristique
                  vulputate aliquam turpis molestie elementum.{" "}
                </p>
              </div> */}
            </div>
            <div className="w-fit flex flex-col items-center justify-center gap-4 md:basis-[calc(100%/4-50px)] basis-[calc(100%/2-30px)]">
              {/* <div className=" p-[6px] bg-[#F1E1E4] rounded-full relative">
                <span className="text-[#FAF5F0] bg-[#C1989F] rounded-full flex items-center justify-center size-[36px] font-bold text-[24px] absolute -top-6 left-[50%] -translate-x-[50%] z-10">
                  2
                </span>
                <div className="rounded-full  border-2 border-[#C1989F]  md:size-[115px] size-[72px] flex items-center justify-center bg-[#F1E1E4]">
                  <img src={howitworkszoomicon} alt="howitworkszoomicon" />
                </div>
              </div> */}
              {/* <div>
                <h3 className="text-[#376489] uppercase    w-[70%] mx-auto md:text-[23px] text-base font-montserrat font-bold md:leading-[31px] teading-[25px]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-[#376489]  mx-auto md:text-[15px] text-xs font-montserrat font-medium leading-[22px] mt-3">
                  Lorem ipsum dolor sit amet consectetur. Felis tristique
                  vulputate aliquam turpis molestie elementum.{" "}
                </p>
              </div> */}
            </div>
            <div className="w-fit flex flex-col items-center justify-center gap-4 md:basis-[calc(100%/4-50px)] basis-[calc(100%/2-30px)]">
              {/* <div className=" p-[6px] bg-[#F1E1E4] rounded-full relative">
               <span className="text-[#FAF5F0] bg-[#C1989F] rounded-full flex items-center justify-center size-[36px] font-bold text-[24px] absolute -top-6 left-[50%] -translate-x-[50%] z-10">
                  3
                </span>
                <div className="rounded-full  border-2 border-[#C1989F]  md:size-[115px] size-[72px] flex items-center justify-center bg-[#F1E1E4]">
                  <img src={howitworkslighticon} alt="" />
                </div>
              </div> */}
              {/* <div>
                <h3 className="text-[#376489] uppercase  w-[70%] mx-auto md:text-[23px] text-base font-montserrat font-bold md:leading-[31px] leading-[26px]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-[#376489]   mx-auto md:text-[15px] text-xs font-montserrat font-medium leading-[22px] mt-3">
                  Lorem ipsum dolor sit amet consectetur. Felis tristique
                  vulputate aliquam turpis molestie elementum.{" "}
                </p>
              </div> */}
            </div>
            <div className="w-fit flex flex-col items-center justify-center gap-4 md:basis-[calc(100%/4-50px)] basis-[calc(100%/2-30px)]">
              {/* <div className=" p-[6px] bg-[#F1E1E4] rounded-full relative">
                <span className="text-[#FAF5F0] bg-[#C1989F] rounded-full flex items-center justify-center size-[36px] font-bold text-[24px] absolute -top-6 left-[50%] -translate-x-[50%] z-10">
                  4
                </span>
                <div className="rounded-full  border-2 border-[#C1989F]  md:size-[115px] size-[72px] flex items-center justify-center bg-[#F1E1E4]">
                  <img src={howitworksDonorIcon} alt="" />
                </div>
              </div> */}
              {/* <div>
                <h3 className="text-[#376489] uppercase  w-[70%] mx-auto md:text-[23px] text-base font-montserrat font-bold leading-[31px]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-[#376489]  mx-auto md:text-[15px] text-xs font-montserrat font-medium leading-[22px] mt-3">
                  Lorem ipsum dolor sit amet consectetur. Felis tristique
                  vulputate aliquam turpis molestie elementum.{" "}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* latest blog  */}
      <div className="py-20">
        <div className="container w-full mb-20 text-center">
          <h3 className="text-[48px] mb-16 text-[#376489] font-extrabold font-montserrat uppercase text-center">
            Latest <span className="text-textPrimary">Blogs</span>
          </h3>
          <div className="flex flex-wrap justify-between gap-3 md:flex-nowrap">
            <div
              style={{ backgroundImage: `url("${previewBlogHomePage}")` }}
              className="blogs bg-cover bg-no-repeat flex items-end py-4 px-6 text-center justify-center basis-[100%] lg:basis-[40%] sm:w-full md:w-full"
            >
              <div>
                <span className="text-[#FAF5F0] text-base font-medium">
                  SEPTEMBER 6, 2023
                </span>
                <p className="text-[#F1E1E4] text-[26px] font-bold leading-[31px] px-16 mt-3">
                  A Reminder To All Parents: You Don’t Have To Get It ‘Right’
                  All The Time.
                </p>
                <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase bg-[#C1989F] mb-3 px-10 text-[16px] w-[250px] h-[40px] font-semibold rounded-full text-[#F1E1E4] mt-3">
                  AVIALABLE SOON
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10 text-left basis-[100%] lg:basis-[56%] sm:w-full md:w-full">
              <div className="flex items-center gap-3 md:gap-5">
                <img src={blog3} alt="" className="md:w-auto w-[140px]" />
                <div>
                  <span className="text0base font-medium text-[#376489] font-montserrat">
                    OCTOBER 31, 2023
                  </span>
                  <p className="mt-2 text-[#376489] font-bold md:text-[22px] text-sm md:leading-[31px] leading-[22px] font-montserrat">
                    Why Validating Your Child's Emotions Can Backfire (And What
                    To Do Instead)
                  </p>
                  <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase bg-[#376489] px-10 text-base mx-auto  md:h-[40px] h-[36px] font-semibold rounded-full text-[#F1E1E4] mt-3">
                  Available soon
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-5">
                <img src={blog4} alt="" className="md:w-auto w-[140px]" />
                <div>
                  <span className="text0base font-medium text-[#376489] font-montserrat">
                    JUNE 29, 2023
                  </span>
                  <p className="mt-2 text-[#376489] font-bold md:text-[22px] text-sm md:leading-[31px] leading-[22px] font-montserrat">
                    Embracing the Chaos: Using Emotional Intelligence to Move
                    Through Anger and Fear.
                  </p>
                  <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase bg-[#376489] px-10 text-base mx-auto  md:h-[40px] h-[36px] font-semibold rounded-full text-[#F1E1E4] mt-3">
                  Available soon
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-5">
                <img src={blog2} alt="" className="md:w-auto w-[140px]" />
                <div>
                  <span className="text0base font-medium text-[#376489] font-montserrat">
                    APRIL 21, 2023
                  </span>
                  <p className="mt-2 text-[#376489] font-bold md:text-[22px] text-sm md:leading-[31px] leading-[22px] font-montserrat">
                    How To Stop Struggling And Start Embracing Your Child's Big
                    Emotions.
                  </p>
                  <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase bg-[#376489] px-10 text-base mx-auto  md:h-[40px] h-[36px] font-semibold rounded-full text-[#F1E1E4] mt-3">
                    Available soon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase mt-20 bg-[#C1989F] px-10 text-[16px] !mx-auto w-[330px] h-[50px] font-semibold rounded-full text-[#F1E1E4]">
            All Blogs Coming Soon
          </button>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default Home;
