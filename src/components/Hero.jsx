import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  // Estimate for the image's aspect ratio (e.g., 16:9 -> 9/16 = 0.5625)
  const aspectRatioPaddingTop = '56.25%'; // Adjust if your image has a different aspect ratio

  // Estimated relative coordinates and size of the "blue window" within the image
  // These will likely need fine-tuning
  const textBlockStyle = {
    top: '48%',          // Lowered a bit, % from top of image
    left: '36%',         // % from left of image
    width: '56%',        // % width of image
    // height: '40%',    // Optional: % height of image, or let content define height
  };

  return (
    <section className="relative">
      {/* Aspect Ratio Container for the background image and text */}
      <div className="relative w-full" style={{ paddingTop: aspectRatioPaddingTop }}>
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./parallax/room.jpeg"
          alt="Office background"
        />

        {/* Text Container (Hosung Kim & Position) - positioned relative to the aspect ratio container */}
        <div
          className='absolute flex flex-col items-start z-10 p-1 xs:p-2 sm:p-3 md:p-4' // Reduced padding slightly for smaller breakpoints
          style={textBlockStyle}
        >
          <div className="w-full text-left"> {/* Ensure child text alignment */}
            <Position />
          </div>
        </div>
      </div>

      {/* SpacemanCanvas - its positioning might need review later if it's off */}
      <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <SpacemanCanvas scrollContainer={scrollContainer} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
