
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      AI Co-Pilot for Chemical 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Reaction Optimization
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Use advanced data-driven optimization for rapidly identifying ideal (bio)chemical process parameters without writing even a single line of code. ReactWise accelerates process development up to 30x by effectively  incorporating prior data, compared to full-factorial screening.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Try for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Guide for Newcommer
        </a>
      </div>
      <div className=" w-full flex mt-10 justify-center">
      <iframe
    className="rounded-lg w-full lg:w-3/4 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
    src="https://www.youtube.com/embed/THda6XYI9SM?ab_channel=ReactWise"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{height:'500px'}}
  ></iframe>
  
</div>

    </div>
  );
};

export default HeroSection;
