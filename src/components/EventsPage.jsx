import { BgInternal, Logo } from "./Assets";
import Navbar from "./Navbar"; // Import the Navbar component

const EventsPage = () => {
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

        <div className="bg-white bg-opacity-90 p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-2xl max-w-3xl text-center space-y-6 transform transition-transform duration-1000 ease-in-out animate-fade-in mt-20">
          <h1 className="font-extrabold text-2xl sm:text-3xl text-black uppercase tracking-wide mb-6">
            Khwaab Workshop
          </h1>
          <p className="custom-paragraph">
            XTS is more than thrilled to unveil the series of events that are
            organized all throughout the session. Our theatrical journey begins
            with the KHWAAB series of workshops that dives into acting and
            storytelling to trigger each and everyone to embrace the actor
            within. The Khwaab series of workshops for the session 2023-24 were
            a huge success with their capability to fetch out creative minds
            through a very interactive and mesmerizing session. XTS was honoured
            to have Mirchi Agni who took the floor by storm with his radio-play
            workshop that delved into a variety of topics ranging from
            Mahishasur-Mardini, to Tagore’s poetry, from juggling octaves, to
            mapping an R. D. Burman composition.
          </p>
          <p className="custom-paragraph">
            The acting workshop was led by none other than Rwitobroto Mukherjee
            who put into perspective the gravity of performing arts in the
            modern-day context and the immense responsibility of an artist
            towards the art and audience. The entire session is interspersed
            with many such miscellaneous events that range from small-scale
            productions, street plays, competitions, creative brain-storming
            sessions and sometimes even unexpected surprises. The Khwaab series
            of workshops is returning with all its fervour in September’24 for
            the session 2024-25. The exact dates and the registration process
            will be notified shortly. Stay tuned till then!
          </p>

          <h2 className="font-extrabold text-2xl sm:text-3xl text-black uppercase tracking-wide mb-6">
            Theaxav
          </h2>
          <p className="custom-paragraph">
            Over the years, the long theatrical journey culminated in the annual
            inter-college event of the society entitled THEAXAV. Theaxav is an
            inclusive amalgamation of all sorts of theatrical art forms namely
            ‘Tell a Tale’ ( a storytelling via dance and music), ‘Copycat’
            (re-enacting iconic movie scenes), ‘Darpan’ (a stage play event),
            ‘Shor’ (a street play event), ‘Adwitiya’ (Mono-act), ‘Tarang’
            (Radio-play) and finally the much awaited theatre production by XTS
            itself. XTS took pleasure in having the presence of Goutam Haldar,
            Rudraprasad Sengupta, Agnijit Sen, Surangana Bandyopadhyay, Sayan
            Bhattacharya, Sharanya Dey, Chandraboli Rudra Dutta, Rahul Dev
            Mondal, Preeti Sarkar, and Rwitobroto Mukherjee as part of
            Theaxav-‘24. THEAXAV ‘24 also marked an epoch-making moment with the
            staging of the home production titled Der Rücktritt- The Abdication,
            a play that weaves an ironic story of a zealot who climbs the heap
            of corpses as Fate waits to chortle in his doom. We look forward to
            many such Theaxav in the upcoming sessions. XTS welcomes each and
            everyone to join us in this undaunted adventure for this is how
            dreams and imaginations unleash themselves on the stage of life. The
            stage is set, will see you there!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
