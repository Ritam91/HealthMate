import AboutUs from "../assets/aboutus.png"

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" id='about' className="w-full p-10 sm:p-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[6vw] lg:text-[3.5vw] leading-[6.5vw] sm:leading-[6.5vw] lg:leading-[5vw] tracking-tight ">
        {/* <span
          className="
                "
        >
        </span> */}
        Welcome to{" "}
        <span
          className="relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                sm:before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3.5px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-black
                before:to-black
                hover:before:w-full
                hover:before:opacity-100"
        >
          Healthmate
        </span>{" "}
        - Where Emotions Meet Technology! Join our{" "}
        <span
          className="relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                sm:before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3.5px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-black
                before:to-black
                hover:before:w-full
                hover:before:opacity-100"
        >
          vibrant community
        </span>
        , experience{" "}
        <span
          className=" relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                sm:before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3.5px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-black
                before:to-black
                hover:before:w-full
                hover:before:opacity-100"
        >
          face recognition
        </span>
        , interact, and{" "}
        <span
          className="relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                sm:before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3.5px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-black
                before:to-black
                hover:before:w-full
                hover:before:opacity-100"
        >
          track your mental well-being
        </span>{" "}
        on our innovative dashboard. Your holistic health journey starts here
      </h1>

      <div className="w-full border-t-[1px] mt-14 border-zinc-500 flex-col xl:flex-row sm:flex gap-10 ">
        <div className=" xl:w-3/6 mt-[2vw] max-[640px]:ml-6 ">
          <p className="text-3xl font-medium">What You can expect: </p>
        </div>

        <div className="xl:w-2/6">
          <p className="text-lg p-6 ">
            <span className="font-medium">Emotion Recognition:</span> Our
            cutting-edge technology accurately detects and interprets your
            emotions, providing valuable insights into your mental well-being.
          </p>

          <p className="text-lg p-6">
            <span className="font-medium">Interactive Community:</span> Engage
            with like-minded individuals, share experiences, seek support, and
            foster meaningful connections within our vibrant and inclusive
            community.
          </p>
          <p className="text-lg p-6">
            <span className="font-medium">Chatbot Support:</span> Access instant
            assistance and guidance from our chatbot, designed to provide
            personalized recommendations and support for your mental health
            needs.
          </p>
        </div>

        <div className="xl:w-1/6 justify-center flex xl:items-center flex-col ml-6">
          <h3 className="text-2xl capitalize mb-[1.5vw] font-medium">
            socials:
          </h3>
          <p className="p-0.5">Instagram</p>
          <p className="p-0.5">Linkedin</p>
          <p className="p-0.5">Twitter</p>
        </div>
      </div>

      <div className="flex-col sm:flex xl:flex-row gap-5 w-full border-t-[1px] mt-14 border-zinc-500 pt-10">
        <div className="xl:w-1/2">
          <h1 className="text-6xl font-medium">Our approach:</h1>
          <button className="uppercase flex gap-10 items-center justify-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="xl:w-1/2 xl:h-[60vh] mt-6">
          <img src={AboutUs} className="rounded-3xl" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
