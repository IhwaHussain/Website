import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import builderAiLogo from "@/assets/images/logo-carousel/builder.ai-logo.svg";
import cognithLogo from "@/assets/images/logo-carousel/cognith-logo.svg";
import iraidLogo from "@/assets/images/logo-carousel/iraid-logo.svg";
import metaficLogo from "@/assets/images/logo-carousel/metafic-logo.svg";
import peerFivesLogo from "@/assets/images/logo-carousel/peer-fives-logo.svg";
import richisTextLogo from "@/assets/images/logo-carousel/richis-text-logo.svg";
import rishiLogo from "@/assets/images/logo-carousel/rishi-logo.svg";
import uqLogo from "@/assets/images/logo-carousel/uq-logo.svg";

const logos = [
  { name: "Builder.ai", src: builderAiLogo },
  { name: "Cognith", src: cognithLogo },
  { name: "Iraid", src: iraidLogo },
  { name: "Metafic", src: metaficLogo },
  { name: "Peer Fives", src: peerFivesLogo },
  { name: "Richis Text", src: richisTextLogo },
  { name: "Rishi", src: rishiLogo },
  { name: "UQ", src: uqLogo },
];

export default function LogoCarousel() {
  const autoplayPlugin = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  return (
    <div className="w-full py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div className="flex items-center justify-center p-4 md:p-6 bg-transparent rounded-lg transition-colors h-24 md:h-32">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
