import React from 'react';
import Faq from './Faq';
import {
  Youtube,
  Airbnb,
  Linear,
  Paypal,
  Zoom,
  Uber,
  Pointer,
  Happy,
  Art,
  Techniques,
  Grading
} from "../../src/lib/images";
import VideoVertical from "../../public/assets/video-vertical.svg";
import ColorFilter from "../../public/assets/colorfilter.svg";
import AudioSquare from "../../public/assets/audio-square.svg";
import Arrow from "../../public/assets/arrow-2.svg";
import TruckFast from "../../public/assets/truck-fast.svg";
import VideoPlay from "../../public/assets/video-play.svg";
import Timer from "../../public/assets/timer.svg";
import Star from "../../public/assets/star.svg";
import Craft from "../../public/assets/craft.svg";
import Quality from "../../public/assets/quality.svg";
import Ahead from "../../public/assets/ahead.svg";
import TickCircle from "../../public/assets/tick-circle.svg"
import Strategy from "../../public/assets/strategic.svg";
import Talent from "../../public/assets/talent.svg";
import Timely from "../../public/assets/timely.svg";
import "../styles.css"

interface Props {
  src: string;
}

const Main = () => {
  const pointerSrc = Pointer.src;
  const airbnbSrc = Airbnb.src;
  const zoomSrc = Zoom.src;
  const paypalSrc = Paypal.src;
  const linearSrc = Linear.src;
  const youtubeSrc = Youtube.src;
  const uberSrc = Uber.src;
  const videoVerticalSrc = VideoVertical.src;
  const colorFilterSrc = ColorFilter.src;
  const audioSquareSrc = AudioSquare.src;
  const arrowSrc = Arrow.src;
  const truckFastSrc = TruckFast.src;
  const videoPlaySrc = VideoPlay.src;
  const timerSrc = Timer.src;
  const starSrc = Star.src;
  const qualitySrc = Quality.src;
  const craftSrc = Craft.src;
  const aheadSrc = Ahead.src;
  const tickCircleSrc = TickCircle.src;
  const strategySrc = Strategy.src;
  const talentSrc = Talent.src;
  const timelySrc = Timely.src;
  const happySrc = Happy.src;
  const artSrc = Art.src;
  const techniquesSrc = Techniques.src;
  const gradingSrc = Grading.src;

  return (
    <main>
      <section className="font-jakarta-sans bg-gradient-to-b mx-0 lg:mx-[160px] from-white to-[#f3f4f6] rounded-b mb-20">
        <div className="bg-[url('/public/assets/dots.svg')] bg-no-repeat bg-left-bottom">
          <div className="bg-[url('/public/assets/collage.svg')] bg-no-repeat bg-right-bottom pb-[20px] md:pb-[120px] px-4 pt-[110px] text-center left-0 right-0">
            <h1 className="m-auto leading-[35px] text-[#1D2939] text-xl sm:text-3xl md:text-4xl sm:leading-10 font-extrabold">
              Crafting Visual Stories
              <br />{" "}
              <span className="md:text-[#1D2939] text-[#ff601f]">
                {" "}
                Beyond{" "}
              </span>{" "}
              Imagination
            </h1>
            <p className="text-[12px] w-[300px] sm:w-[400px] leading-8 md:w-auto px-4 m-auto py-10">
              Elevate your brand, Experience the power of storytelling through
              the lens of creativity and innovation.
            </p>
            <button className="bg-[#FF601F] tracking-wider font-bold text-[12px] text-white p-3 px-6 rounded hover:transform hover:scale-105 hover:duration-700 flex m-auto">
              LET'S TALK
              <img src={pointerSrc} alt="Pointer" className="w-[27px] pl-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FDA29B] py-8 px-4 mb-4 lg:px-20">
        <p className="text-center text-black text-[12px] sm:text-[14px]">
          Join 4,000+ companies already growing
        </p>
        <div className="flex justify-around flex-wrap gap-8 sm:gap-10 my-8 leading-10">
          <img src={airbnbSrc} alt="Airbnb Icon" />
          <img src={linearSrc} alt="Linear Icon" />
          <img src={paypalSrc} alt="Paypal icon" />
          <img src={youtubeSrc} alt="Youtube Icon" />
          <img src={uberSrc} alt="Uber Icon" />
          <img src={zoomSrc} alt="Zoom Icon" />
        </div>
      </section>
      
      <section className="bg-[#101828] p-20 py-[100px] text-center font-extrabold">
        <p className="wetext text-2xl sm:text-5xl leading-[35px] text-black/40">
          WE ARE MORE THAN
        </p>{" "}
        <p className="wetext text-2xl sm:text-5xl leading-[35px] text-black/40 pt-6">
          JUST A WEBSITE.
        </p>
      </section>

      <section>
        <p className="text-black sm:text-4xl text-center sm:m-auto sm:w-[600px] pt-10 w-[300px] m-auto px-4">
          ...we are your creative partner in{" "}
          <span className="text-[#FF601F]">visual</span> storytelling...
        </p>
      </section>

      <section className="flex justify-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-4 lg:mx-20">
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={videoVerticalSrc}
              alt="Video Vertical Ico"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Video Editing
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={colorFilterSrc}
              alt="Color filter Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Color Grading
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={audioSquareSrc}
              alt="Audio Square Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Audio Editing
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={arrowSrc}
              alt="Arrow Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Transitions and Effects
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={truckFastSrc}
              alt="Truck Fast Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Motion Graphics
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={videoPlaySrc}
              alt="Video Play Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Visual Effects
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={timerSrc}
              alt="Timer Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Time-Lapse
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
          <div className="bg-[#F2F4F7] w-[280px] sm:w-[220px] lg:w-[200px] p-6 rounded-xl">
            <img
              src={starSrc}
              alt="Star Icon"
              className="m-auto bg-white rounded-full p-2"
            />
            <h3 className="text-[12px] py-4 text-center font-bold">
              Video Cleanup
            </h3>
            <p className="text-[10px] w-[150px] m-auto text-center">
              Comprehensive video editing to enhance the visual appeal
            </p>
          </div>
        </div>
      </section>

      <button className="flex my-8 border border-black py-1 px-4 text-[10px] font-bold m-auto items-center">
        EXPLORE ALL SERVICES
        <svg
          width="20"
          height="24"
          viewBox="0 0 25 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-2"
        >
          <path
            d="M19.5 5L5.5 19M19.5 5V18.1765M19.5 5H6.32353"
            stroke="black"
            stroke-width="3"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
      </button>

      <section className="border-t border-black/25 pt-16 pb-12">
        <p className="text-black sm:text-4xl text-center sm:m-auto sm:w-[600px] pt-10 w-[300px] m-auto px-4">
          ...but, what makes us so special?
        </p>

        <div className="bg-white lg:mx-20 mx-0 lg:px-0 px-4 pt-10 lg:py-0 my-8">
          <div className="mb-7 lg:flex lg:justify-between">
            <div>
              <p className="text-[#D0D5DD] text-3xl lg:pt-16 font-semibold pb-5">
                01
              </p>
              <h4 className="py-4 text-[16px] font-semibold">
                We <span className="text-[#ff601f]">Craft </span>
                Compelling Media
              </h4>
              <p className="text-[11px] w-[250px]">
                We empower you to create captivating stories that resonate with
                your audience.
              </p>
            </div>
            <img src={qualitySrc} alt="..." className="py-5 lg:py-0" />
          </div>
          <div className="mb-7 lg:flex lg:justify-between">
            <div>
              <p className="text-[#D0D5DD] text-3xl lg:pt-16 font-semibold pb-5">
                02
              </p>
              <h4 className="py-4 text-[16px] font-semibold">
                We Stay <span className="text-[#ff601f]">Ahead </span>
                of Trends
              </h4>
              <p className="text-[11px] w-[250px]">
                We provide insights to help you navigate the ever-changing video
                landscape, ensuring your content remains relevant.
              </p>
            </div>
            <img src={aheadSrc} alt="..." className="py-5 lg:py-0" />
          </div>
          <div className="mb-7 lg:flex lg:justify-between">
            <div>
              <p className="text-[#D0D5DD] text-3xl lg:pt-16 font-semibold pb-5">
                03
              </p>
              <h4 className="py-4 text-[16px] font-semibold">
                We Elevate Visual{" "}
                <span className="text-[#ff601f]">Quality </span>
              </h4>
              <p className="text-[11px] w-[250px]">
                We enhance your videos to ensure they are visually stunning,
                leaving a lasting impact.
              </p>
            </div>
            <img src={craftSrc} alt="..." className="py-5 lg:py-0" />
          </div>
        </div>

        <button className="flex mt-16 my-8 border border-black py-1 px-4 text-[10px] font-bold m-auto items-center">
          VIEW RECENT WORKS
          <svg
            width="20"
            height="24"
            viewBox="0 0 25 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            className="pl-2"
          >
            <path
              d="M19.5 5L5.5 19M19.5 5V18.1765M19.5 5H6.32353"
              stroke="black"
              stroke-width="3"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            />
          </svg>
        </button>
      </section>

      <section className="bg-[#101828] p-20 py-[100px] font-extrabold lg:px-[400px]">
        <p className="wetext text-2xl sm:text-5xl leading-[35px] text-black/40">
          YOUR VISION
        </p>{" "}
        <p className="wetext text-right text-2xl sm:text-5xl leading-[35px] text-black/40 pt-6">
          ...IS OUR MISSION
        </p>
      </section>

      <section className="border-b border-black/25 py-[100px]">
        <div className="px-4 leading-8 text-center">
          <p className="text-[#ff601f] text-sm">WHO WE HELP</p>
          <p className="py-10 taxt-2xl sm:text-3xl">
            We offer Customer Solutions For...
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mx-4">
          <div className="bg-white rounded-xl py-8 px-5 w-full sm:w-[400px] lg:w-[400px] ">
            <p className="font-extrabold text-2xl">Businesses and Brands</p>
            <p className="text-black leading-8 py-8 text-[12px]">
              We're dedicated to helping businesses harness the true potential
              of video content to connect with their audience, drive
              conversions, and elevate their brand presence.
            </p>

            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">Startups</span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">
                Retail and E-Commerce
              </span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">Real Estate</span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">
                Entertainment and Media
              </span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">
                Education and E-Learning
              </span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">And many more</span>
            </p>

            <p className="text-[12px]">
              We're here to help you. Reach out to us as soon as possible.
            </p>

            <button className="flex items-center mt-8 border border-black py-1 px-4 text-[10px] font-bold">
              SEE BUSINESSES
              <svg
                width="20"
                height="24"
                viewBox="0 0 25 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                className="pl-2"
              >
                <path
                  d="M19.5 5L5.5 19M19.5 5V18.1765M19.5 5H6.32353"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                />
              </svg>
            </button>
          </div>
          <div className="bg-[rgba(255,96,31,0.10)]  rounded-xl py-8 px-5 mx-4 w-full sm:w-[400px] lg:w-[400px] ">
            <p className="font-extrabold text-2xl">Individuals</p>
            <p className="text-black leading-7 py-8 text-[12px]">
              Whether you're a content creator, a filmmaker, or someone with a
              passion for video, we're here to help you turn your vision into
              captivating reality, enhancing your storytelling, and making every
              frame count.
            </p>

            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">Content Creators</span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">Travel Enthusiasts</span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">
                Special Occasion Celebrants
              </span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">
                Online Course Instructors
              </span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">Creative Artists</span>
            </p>
            <p className="flex pb-3">
              <img src={tickCircleSrc} alt="..." />
              <span className="pl-3 pt-1 text-[12px]">And many more</span>
            </p>

            <button className="flex items-center mt-8 border border-black py-1 px-4 text-[10px] font-bold">
              SEE INDIVIDUALS
              <svg
                width="20"
                height="24"
                viewBox="0 0 25 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                className="pl-2"
              >
                <path
                  d="M19.5 5L5.5 19M19.5 5V18.1765M19.5 5H6.32353"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-black/25 pt-16 pb-12">
        <div className="px-4 leading-8 text-center">
          <p className="text-[#ff601f] text-sm font-semibold">OUR PROCESS</p>
          <p className="py-10 taxt-2xl sm:text-3xl">What you can expect...</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center m-auto lg:mx-20 gap-10">
          <div className="bg-white text-center mx-4 lg:mx-0 rounded-xl">
            <img src={strategySrc} alt="..." className="rounded-t-xl w-full" />
            <p className="font-bold text-[13px] pt-4 pb-3">
              Strategic <span className="text-[#ff601f]">Collaboration</span>
            </p>
            <p className="leading-6 pb-4 text-[11px] px-8 md:w-[300px] md:m-auto">
              We collaborate with you to translate your ideas into captivating
              visual narratives that meet your goals.
            </p>
          </div>
          <div className="bg-white text-center mx-4 lg:mx-0 rounded-xl">
            <img src={talentSrc} alt="..." className="rounded-t-xl w-full" />
            <p className="font-bold text-[13px] pt-4 pb-3">
              Professional <span className="text-[#ff601f]">Talent</span>
            </p>
            <p className="leading-6 pb-4 text-[11px] px-8 md:w-[300px] md:m-auto">
              We bring together a pool of skilled video editors,
              cinematographers, and storytellers who are passionate about their
              craft.
            </p>
          </div>
          <div className="bg-white text-center mx-4 lg:mx-0 rounded-xl">
            <img src={timelySrc} alt="..." className="rounded-t-xl w-full" />
            <p className="font-bold text-[13px] pt-4 pb-3">
              <span className="text-[#ff601f]">Timely</span> Delivery
            </p>
            <p className="leading-6 pb-4 text-[11px] px-8 md:w-[300px] md:m-auto">
              We understand the importance of deadlines. Count on us to deliver
              your projects on time, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1D2939] p-14 sm:p-20 text-center">
        <p className="text-white text-3xl sm:text-5xl">
          Our Curated Masterpieces
        </p>
        <p className="w-[300px] md:w-[600px] m-auto text-[12px] text-white/50 pt-8 leading-8">
          Projects that define our commitment to storytelling, innovation, and
          the art of video editing. Each video is a masterpiece, a testament to
          our dedication to making your vision a reality
        </p>
      </section>

      <section className="bg-[url('/public/assets/curated-bg.png')] p-4 lg:p-20 py-[400px] bg-no-repeat text-center">
        <p className="text-white text-[3rem] lg:text-[6rem] font-extrabold">
          The Tech Guy
        </p>
        <p className="text-white text-[1rem] py-8">
          A Day in the life of a Software Developer
        </p>
        <button className="bg-white/40 tracking-wider font-bold text-[12px] text-white p-3 px-6 rounded hover:transform hover:scale-105 hover:duration-700 flex m-auto">
          View Project
          <img src={pointerSrc} alt="Pointer" className="w-[27px] pl-2" />
        </button>
      </section>

      <section className="bg-[#45431f] p-4 lg:p-20 py-[100px] text-center">
        <p className="text-white text-[3rem] lg:text-[6rem] font-extrabold">
          We Are The Pulse
        </p>
        <p className="text-white text-[1rem] py-8">An Ad made for MTN.</p>
        <button className="bg-white/40 tracking-wider font-bold text-[12px] text-white p-3 px-6 rounded hover:transform hover:scale-105 hover:duration-700 flex m-auto">
          View Project
          <img src={pointerSrc} alt="Pointer" className="w-[27px] pl-2" />
        </button>
      </section>
      <section className="py-20 bg-[#101828]"></section>
      <section className="relative bg-[#101828] pt-[200px] pb-[400px] bg-[url('/public/assets/groups.svg')] bg-no-repeat text-center">
        <div className="absolute inset-0 bg-[#101828AB] p-4 lg:p-20">
          <p className="text-white text-[3rem] lg:text-[6rem] font-extrabold">
            All Projects
          </p>
          <p className="text-white text-[1rem] py-8">
            We don't like to brag, so let our work do the talking
          </p>
          <button className="bg-white/40 tracking-wider font-bold text-[12px] text-white p-3 px-6 rounded hover:transform hover:scale-105 hover:duration-700 flex m-auto">
            View All Projects
            <img src={pointerSrc} alt="Pointer" className="w-[27px] pl-2" />
          </button>
        </div>
      </section>

      <section>
        <div className="px-4 leading-8 text-center pt-6">
          <p className="text-[#ff601f] text-sm font-semibold">OUR REPUTATION</p>
          <p className="py-10 taxt-2xl sm:text-3xl">Why our Clients love Us</p>
        </div>

        <div className="carousel pb-10 flex gap-4 overflow-scroll justify-center items-center">
          <div className="min-w-[18rem] sm:min-w-[27.85rem] bg-white p-6 rounded-lg text-gray-1100   md:text-3xl">
            <span className="text-[#FF601F] font-bold">"</span>
            <p className="mt-4 text-2xl pb-5">
              Genuine and special Team members
            </p>
            <div className="py-4 flex gap-2 justify-start items-center border-t-2 border-t-gray-400">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
              <div className="grid ">
                <span className="text-sm md:text-base">Andy Curry</span>
                <span className="text-xs text-gray-500 md:text-sm">AirBnb</span>
              </div>
            </div>
          </div>

          <div className="min-w-[18rem] sm:min-w-[27.85rem] bg-white p-6 rounded-lg text-gray-1100   md:text-3xl">
            <span className="text-[#FF601F] font-bold">"</span>
            <p className="mt-4 text-2xl pb-5">
              Genuine and special Team members
            </p>
            <div className="py-4 flex gap-2 justify-start items-center border-t-2 border-t-gray-400">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
              <div className="grid ">
                <span className="text-sm md:text-base">Andy Curry</span>
                <span className="text-xs text-gray-500 md:text-sm">AirBnb</span>
              </div>
            </div>
          </div>

          <div className="min-w-[18rem] sm:min-w-[27.85rem] bg-[#101828] p-6 rounded-lg text-gray-1100   md:text-3xl">
            <span className="text-[#FF601F] font-bold">"</span>
            <p className="mt-4 text-2xl text-white pb-5">
              They pull it off, again and again.
            </p>
            <div className="py-4 flex gap-2 justify-start items-center border-t-2 border-t-gray-400">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
              <div className="grid ">
                <span className="text-sm md:text-base text-white">
                  Barry Bones
                </span>
                <span className="text-xs text-gray-500 md:text-sm">MTN</span>
              </div>
            </div>
          </div>

          <div className="min-w-[18rem] sm:min-w-[27.85rem] bg-white p-6 rounded-lg text-gray-1100   md:text-3xl">
            <span className="text-[#FF601F] font-bold">"</span>
            <p className="mt-4 text-2xl pb-5">
              Absorbed our model immediately!!
            </p>
            <div className="py-4 flex gap-2 justify-start items-center border-t-2 border-t-gray-400">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
              <div className="grid ">
                <span className="text-sm md:text-base">Stephen Crew</span>
                <span className="text-xs text-gray-500 md:text-sm">
                  Content Creator
                </span>
              </div>
            </div>
          </div>

          <div className="min-w-[18rem] sm:min-w-[27.85rem] bg-white p-6 rounded-lg text-gray-1100   md:text-3xl">
            <span className="text-[#FF601F] font-bold">"</span>
            <p className="mt-4 text-2xl pb-5">
              Took time to learn our business
            </p>
            <div className="py-4 flex gap-2 justify-start items-center border-t-2 border-t-gray-400">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
              <div className="grid ">
                <span className="text-sm md:text-base">Andrew Price</span>
                <span className="text-xs text-gray-500 md:text-sm">CMBBS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <img src={happySrc} alt="..." />
      </section>

      <section>
        <div className="text-center pt-12 px-4 flex flex-col items-center m-auto">
          <p className="uppercase font-bold pb-4 leading-8 text-2xl lg:text-4xl w-[300px] lg:w-[600px]">
            LET'S <span className="text-[#ff601f]"> CREATE</span> something
            special together.
          </p>
          <p className="text-[14px] w-[300px] leading-8 lg:w-[600px]">
            In just 48 hours, our experts will meticulously assess your video
            content and reveal untapped opportunities for enhancing your{" "}
            <span className="font-bold"> brand</span>
            and visual storytelling.
          </p>
        </div>

        <div className="top-tab pt-12">
          <div className="text-center pb-4">
            <button className="mr-8 hover:border-b-2 border-[#FF601F] focus:border-b-2">
              Business
            </button>
            <button className="mr-8 hover:border-b-2 focus:border-b-2 border-[#FF601F]">
              Individual
            </button>
          </div>
        </div>
        <section className="form-wrapper border-t">
          <form className="flex flex-col lg:w-[40%] w-[100%] p-4 mx-auto py-16">
            <label htmlFor="" className="mb-6">
              Company Name
              <input
                type="text"
                placeholder="Enter business name"
                className="block border rounded-[8px] p-2 w-[100%] mt-2"
              />
            </label>
            <label htmlFor="" className="mb-6">
              Email Address
              <input
                type="text"
                placeholder="Enter email address"
                className="block border rounded-[8px] p-2 w-[100%] mt-2"
              />
            </label>
            <label htmlFor="" className="mb-6">
              Subject (optional)
              <input
                type="text"
                placeholder="Enter subject"
                className="block border rounded-[8px] p-2 w-[100%] mt-2"
              />
            </label>
            <label htmlFor="" className="mb-6">
              Tell us what we can do for you{" "}
              <textarea
                name=""
                id=""
                placeholder="Type your message"
                className="block border h-[200px] resize-y rounded-[8px] p-2 w-[100%] mt-2"
              />
            </label>
            <button className="bg-[#FF601F] text-white rounded-[8px] p-2 uppercase">
              Send Message
            </button>
          </form>
        </section>
      </section>

      <section className="bg-[#D0D5DD] mt-10 py-10 px-4 lg:px-20">
        <p className="text-center text-3xl">Explore Our Captivating Content</p>
        <p className="text-center text-sm pt-6 w-auto lg:w-[600px] leading-8 pb-8 m-auto">
          Uncover a world where stories come alive, emotions resonate, and
          visuals speak louder than words. Our captivating content is a journey
          waiting for you. Join us and experience the magic of tifi.tv.
        </p>

        <section className="explore-section flex flex-col items-center gap-9 py-24 md:px-10">
  <div className="explore-cards max-w-[18.75rem] md:max-w-[46.875rem] xl:max-w-[58.4375rem] flex flex-col md:flex-row items-center gap-8 md:gap-10">
    <div className="explore-card flex flex-col h-[26.625rem] w-[18.625rem] border border-white rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 bg-[#101828]">
      <img src={artSrc} alt="Blog 1" className="object-cover h-[17.3125rem]"/>
      <div className="details-container flex flex-col p-2 md:p-4">
        <p className="details text-xs text-gray-600 pb-4">October 12, 2023 | 8 mins | <span className="text-[#ff601f]">Storytelling</span></p>
        <h3 className="text-base md:text-lg font-bold text-white">The Art of Storytelling Through Video</h3>
        <p className="text-xs md:text-sm text-gray-600">Discover how storytelling isn't just a technique but the heart of compelling video content. Learn how connecting with your audience's emotions can leave a lasting impact on them.</p>
      </div>
    </div>

    <div className="explore-card flex flex-col h-[26.625rem] w-[18.625rem] border border-white rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 bg-[#101828]">
      <img src={techniquesSrc} alt="Blog 2" className="object-cover h-[17.3125rem]"/>
      <div className="details-container flex flex-col p-2 md:p-4">
        <p className="details text-xs text-gray-600 pb-4">October 12, 2023 | 8 mins | <span className="text-[#ff601f]">Tools</span></p>
        <h3 className="text-base md:text-lg font-bold text-white">7 Essential Video Editing Techniques</h3>
        <p className="desc lg:hidden text-xs md:text-sm text-gray-600">Discover how storytelling isn't just a technique but the heart of compelling video content. Learn how connecting with your audience's emotions can leave a lasting impact on them.</p>
      </div>
    </div>

    <div className="explore-card flex flex-col h-[26.625rem] w-[18.625rem] border border-white rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 bg-[#101828]">
      <img src={gradingSrc} alt="Blog 3" className="object-cover h-[17.3125rem]"/>
      <div className="details-container flex flex-col p-2 md:p-4">
        <p className="details text-xs text-gray-600 pb-4">October 12, 2023 | 8 mins | <span className="text-[#ff601f]">Travel</span></p>
        <h3 className="text-base md:text-lg font-bold text-white">The Impact of Color Grading in Video Editing</h3>
        <p className="desc lg:hidden text-xs md:text-sm text-gray-600">Discover how storytelling isn't just a technique but the heart of compelling video content. Learn how connecting with your audience's emotions can leave a lasting impact on them.</p>
      </div>
    </div>
  </div>
</section>

      </section>

      <Faq />
    </main>
  );
}

export default Main
