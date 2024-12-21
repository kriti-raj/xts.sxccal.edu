import { BgInternal, Logo } from "./Assets";
import Navbar from "./Navbar"; // Import the Navbar component

const AboutUsPage = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-fixed flex flex-col">
      <div
        className="relative flex flex-col justify-center items-center p-6 flex-grow"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full">
          <Navbar Logo={Logo} />
        </div>

        <style>
          {`
            @keyframes fade-in {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in {
              animation: fade-in 1s ease-in-out;
            }

            .custom-paragraph {
              line-height: 1.8;
              font-size: 1.125rem; /* Equivalent to 18px */
              color: #333; /* Darker gray for better readability */
              text-align: justify;
              text-justify: inter-word;
              background: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
              padding: 1rem;
              border-radius: 8px;
              border: 1px solid rgba(0, 0, 0, 0.1); /* Light border */
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Text shadow */
              letter-spacing: 0.5px; /* Slight letter spacing */
            }
          `}
        </style>

        <div className="bg-white bg-opacity-90 p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-2xl max-w-3xl text-center space-y-6 transform transition-transform duration-1000 ease-in-out animate-fade-in mt-24">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6">
            <q className="font-semibold text-xl sm:text-2xl md:text-3xl italic">
              Life’s but a walking shadow, a poor player, That struts and frets
              his hour upon the stage, And then is heard no more…
            </q>
            <br />
            Nevertheless, everyone is a part of Theatre and we all must return
            to it!
          </p>
          <p className="custom-paragraph">
            The Xaverian Theatrical Society is one that we all return to again
            and again. Theatre, here, is not just a performing art but is more
            about nurturing and exploring the self through thought-provoking
            dramas, innovative new works, and diverse productions that continue
            to build on a storied past that blends tradition with cutting-edge
            creativity. From the proscenium to the streets, our society talks
            about &apos;doing human&apos;, to do more than just breathing in
            life, to play with art forms, raising voices when we must, freeing
            our minds and watching ourselves in the mirror of the stage. Ever
            since 1931, when the society drew its first breath, to till date,
            XTS takes the honor of producing a line of noteworthy thespians,
            playwrights, musicians, directors and among whom to mention a few
            are Sombhu Mitra, Utpal Dutt, Anil Chatterjee, Tarun Roy, Ramaprasad
            Banik, Sudipto Chatterjee, and Kharaj Mukherjee. Holding onto this
            rich legacy, XTS dreams of venturing further into the world of
            theatre. Realizing that while our macrocosmic experiences are all
            striving to seek meaning in absolutist terms, here in XTS, we can
            only strive together among blurry lines of art and soon enough are
            we faced with the epiphany that it’s not the moment of falling
            curtains that makes the difference, but rather the long, long
            theatrical journey that leads to it. Xaverian Theatrical Society is
            more than glad to have creative minds and phenomenal talents as part
            of our family as we resort to theatre to trigger selves in us that
            even we are unaware of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
