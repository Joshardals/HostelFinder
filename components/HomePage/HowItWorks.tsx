import Image from "next/image";
import { howItWorksSteps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section>
      <h2 className="capitalize text-center">how it works</h2>
      <div className="bg-gray">
        <div className="max-content max-lg:p-4 lg:py-4">
          <div className="grid lg:grid-cols-3 gap-4">
            {howItWorksSteps.map((step, index) => (
              <Card
                key={index}
                label={step.label}
                src={step.src}
                description={step.description}
                buttonLabel={step.buttonLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardType {
  label: string;
  src: string;
  description: string;
  buttonLabel: string;
}

function Card(card: CardType) {
  // px-4 py-20 space-y-10
  return (
    <>
      {/* Desktop Screen */}
      <div className="max-md:block max-lg:hidden bg-white rounded-xl shadow-xl shadow-charcoal/50 w-full flex items-center flex-col px-4 max-md:py-8 lg:py-20">
        <div className="space-y-4">
          <Image
            src={card.src}
            width={80}
            height={80}
            alt="Search"
            className="mx-auto"
          />

          <div className="text-center">
            <h3 className="text-pretty">{card.label}</h3>
            <p className="text-pretty h-[7rem]">
              {card.description}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button type="button" className="how-it-works-btn">
            {card.buttonLabel}
          </button>
        </div>
      </div>

      {/* Medium Screens */}
      <div className="max-md:hidden lg:hidden bg-white rounded-xl shadow-xl shadow-charcoal/30 w-full flex space-x-10 p-10">
        <div>
          <Image src={card.src} width={80} height={80} alt="Search" />
        </div>

        <div>
          <h3 className="text-pretty mb-1">{card.label}</h3>
          <p className="text-pretty mb-4">
            {card.description}
          </p>

          <button type="button" className="how-it-works-btn">
            {card.buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
}
