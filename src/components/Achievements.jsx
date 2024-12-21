import {
  BgInternal,
  Logo,
  achievement1,
  achievement2,
  achievement3,
  achievement4,
} from "./Assets";
import Navbar from "./Navbar";

const AchievementsPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar Logo={Logo} />

      {/* Heading */}
      <div className="flex flex-col items-center py-2 px-2">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Our Achievements
        </h1>
      </div>

      <div className="flex-grow flex flex-col items-center py-8 px-4">
        {/* Paragraphs */}
        <div className="max-w-3xl mx-auto mb-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6">
            The Xaverian Theatrical Society has staged multiple events and won
            many accolades in different inter and intra college events across
            the years. The students of XTS wrote and directed the play
            ‘Prometheus Unbound’, a postmodern satirical take on the Greek
            legend of Prometheus highlighting different political and social
            issues plaguing our society in the present date. The play was staged
            as a part of the theatrical event in Xavotsav as well as the inter
            college stage event Amiphoria organized by Amity University and won
            the first prize in both these events. The play was praised by
            Suranga Bandyopadhyay, a prominent Bengali actor who called the play
            “well written, intelligent, quirky, well directed and performed.”
            The students of XTS also performed various street plays highlighting
            different social and mental health issues. ‘Wake up Sid!” a play on
            the importance of mental health and treatment was performed in
            Xavotsav for an event in collaboration with NSS to impart education
            on mental well being and treatment. The play was praised for being
            positive, light hearted while delivering a powerful message which
            resonated with all the spectators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          <img
            src={achievement1}
            alt="Description of image 1"
            className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
          />
          <img
            src={achievement2}
            alt="Description of image 2"
            className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto mb-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6">
            The students also organized the play “Lakshman Rekha” a production
            incorporating the style and treatment of a street play adapted to be
            performed on the proscenium. The play used the characters from Hindu
            mythology --Draupadi, Surpanakha and Chitrangada who stand as
            symbols of protest against caste and gender hierarchy that have
            oppressed people for centuries. The play was first staged as part of
            ‘Verstehen’ organized by Xaverian Sociological Society and secured
            the 2nd best performance for the performing arts event.XTS also
            performed in the street play competition of ‘Xavrang’ organized by
            SXU where their play focusing on the ills of religious fanaticism
            earned praise for its composition and content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          <img
            src={achievement3}
            alt="Description of image 3"
            className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
          />
          <img
            src={achievement4}
            alt="Description of image 4"
            className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Final Paragraph */}
        <div className="max-w-3xl mx-auto mb-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6">
            At &apos;Theatre -o- Mania&apos; of Amity University, XTS performed
            the street play-&apos;The Invention of Dharm&apos;, focussing on the
            ills of religious fanaticism.It earned praise for its composition
            and content. In Sanskriti&apos;24, organised by Jadavpur University,
            XTS bagged the second position in the Street Play competition. In
            collaboration with the National Service Scheme (NSS), XTS has
            performed multiple street play on topics like &apos;Dengue
            Awareness&apos;, &apos;Youth for Digital Literacy&apos;, to create
            awareness among underprivileged children from various socio-economic
            backgrounds. Through formulation of a united and consolidated team,
            XTS aims towards a brighter future with more luminous achievements.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
