import React from 'react'
import Pointer from "../../public/assets/pointer.svg";
import Airbnb from "../../public/assets/airbnb.svg";
import Uber from "../../public/assets/uber.svg";
import Linear from "../../public/assets/linear.svg";
import Youtube from "../../public/assets/youtube.png";
import Zoom from "../../public/assets/zoom.svg";
import Paypal from "../../public/assets/paypal.svg";
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

  return (
    <main>
      <section className="font-jakarta-sans bg-gradient-to-b mx-0 lg:mx-[160px] from-white to-[#f3f4f6] rounded-b mb-20">
        <div className="bg-[url('./public/assets/dots.svg')] bg-no-repeat bg-left-bottom">
          <div className="bg-[url('./public/assets/collage.svg')] bg-no-repeat bg-right-bottom pb-[250px] md:pb-[180px] px-4 pt-[100px] text-center left-0 right-0">
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
              We understand the importance of deadlines. Count on us to deliver your projects on time, every time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main
