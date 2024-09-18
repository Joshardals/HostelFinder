import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export function HostelGallery({ hostelImages }: { hostelImages: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-[44rem] bg-red-500">
      {/* Main Swiper with full-size images */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {hostelImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              width={500}
              height={300}
              alt={`Hostel image ${index + 1}`}
              className="object-cover h-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {hostelImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              width={100}
              height={75}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
