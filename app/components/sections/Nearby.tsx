import DirectionItem from "../ui/direction-item";
import Map from "../ui/map";
import Title from "../ui/title";

interface Props {
  isTitle: boolean;
}

function Nearby({ isTitle = true }: Props) {
  return (
    <section className="bg-hero py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 items-center px-4">
        {isTitle ? (
          <div className="flex flex-col gap-4  md:text-left text-primary">
            <Title className="text-primary text-center">Nearby Cafés</Title>

            <p className="text-primary text-center text-base  md:mx-0 text-balance">
              Find a Focus Brew nearby and stop in for your favorite drink.
            </p>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
          <div className="w-full md:w-1/2 h-120 z-3">
            <Map />
          </div>
          <div className="w-full md:w-1/2 min-h-120">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <DirectionItem
                city={"Kielce"}
                address_f={"Henryka Sienkiewicza 23,"}
                address_s={"25-007 Kielce, Świętokrzyskie"}
                timeOpen={"Open daily: 7AM - 7PM"}
                link={"https://www.google.com/maps"}
              />

              <DirectionItem
                city={"Warszawa"}
                address_f={"Grochowska 304,"}
                address_s={"03-840 Warszawa, Mazowieckie"}
                timeOpen={"Open daily: 7AM - 7PM"}
                link={"https://www.google.com/maps"}
              />

              <DirectionItem
                city={"Katowice"}
                address_f={"al. Wojciecha Korfantego 35,"}
                address_s={"40-005 Katowice, Śląskie"}
                timeOpen={"Open daily: 7AM - 7PM"}
                link={"https://www.google.com/maps"}
              />

              <DirectionItem
                city={"Kraków"}
                address_f={"Grzegórzecka 20A,"}
                address_s={"31-532 Kraków"}
                timeOpen={"Open daily: 7AM - 7PM"}
                link={"https://www.google.com/maps"}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="calistoga text-center text-primary text-3xl mb-8">
            Need Help?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="tel:+48123456789"
              aria-label="Call customer service"
              className="flex flex-col p-6 rounded-3xl text-primary bg-header-scroll transition-all duration-300 hover:bg-header-scroll/80 hover:-translate-y-1"
            >
              <span className="text-sm opacity-80">Customer Service</span>
              <span className="text-lg calistoga">+48 123 456 789</span>
            </a>

            <a
              href="tel:+48987654321"
              aria-label="Call reservations"
              className="flex flex-col p-6 rounded-3xl text-primary bg-header-scroll transition-all duration-300 hover:bg-header-scroll/80 hover:-translate-y-1"
            >
              <span className="text-sm opacity-80">Reservations</span>
              <span className="text-lg calistoga">+48 987 654 321</span>
            </a>

            <a
              href="mailto:hello@focusbrew.com"
              aria-label="Send email to general inquiries"
              className="flex flex-col p-6 rounded-3xl text-primary bg-header-scroll transition-all duration-300 hover:bg-header-scroll/80 hover:-translate-y-1"
            >
              <span className="text-sm opacity-80">General Questions</span>
              <span className="text-lg calistoga break-all">
                hello@focusbrew.com
              </span>
            </a>

            <a
              href="mailto:support@focusbrew.com"
              aria-label="Send email to support"
              className="flex flex-col p-6 rounded-3xl text-primary bg-header-scroll transition-all duration-300 hover:bg-header-scroll/80 hover:-translate-y-1"
            >
              <span className="text-sm opacity-80">Technical Support</span>
              <span className="text-lg calistoga break-all">
                support@focusbrew.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nearby;
