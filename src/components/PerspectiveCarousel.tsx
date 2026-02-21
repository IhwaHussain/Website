import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "@/assets/images/hero.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const PerspectiveCarousel = () => {
  const images = [
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },{
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },{
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },{
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: Hero,
      alt: "Illustrations by my fav AarzooAly",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_001 images={images} showPagination loop />
    </div>
  );
};

export { PerspectiveCarousel };

const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
    .Carousal_001 {
      padding-bottom: 50px !important;
    }
    .Carousal_001 .swiper-pagination-bullet {
      background: #fff !important;
      opacity: 1 !important;
    }
    .Carousal_001 .swiper-pagination-bullet-active {
      background: #3919EE !important;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("w-full relative", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={loop}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 60,
          modifier: 2.5,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3, // Mobile
          },
          768: {
            slidesPerView: 3, // Tablet
          },
          1024: {
            slidesPerView: 5, // Desktop
          },
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="sm:h-[260px] md:!h-[320px] w-full"
          >
            <img
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_001 };
