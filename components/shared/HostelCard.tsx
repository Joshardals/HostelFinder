"use client";
import { HostelDetailsToggle } from "@/lib/store";
import { HostelTypings } from "@/typings/database";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toNaira } from "@/lib/utils";

export function HostelCard({ hostel }: { hostel: HostelTypings }) {
  const { open, setOpen, setSelectedHostel } = HostelDetailsToggle();
  if (!hostel) return null;
  return (
    // <Link href="/find-hostels/12345" passHref legacyBehavior>
    //   <a className="space-y-2" target="_blank" rel="noopener noreferrer">

    <div className="space-y-2 rounded-xl">
      <Swiper
        slidesPerView={1}
        pagination={true}
        navigation={true}
        speed={700}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full rounded-xl cursor-pointer"
        onClick={() => {
          setSelectedHostel(hostel);
          setOpen(!open);
        }}
      >
        {hostel.image_urls.map((img, index) => (
          <SwiperSlide className="select-none bg-black" key={index}>
            <div className={` h-[15rem] max-sm:h-[25rem]`}>
              <Image
                src={img}
                width={500}
                height={200}
                alt="hey"
                className="object-contain h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="space-y-1 cursor-pointer"
        onClick={() => {
          setSelectedHostel(hostel);
          setOpen(!open);
        }}
      >
        <div className="flex items-center justify-between">
          <p className="font-medium text-charcoal">
            {toNaira(hostel.price)}/yr
          </p>
          <div className="flex items-center space-x-1">
            <span>
              <IoStar />
            </span>
            <span>{hostel.ratings}</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-charcoal font-medium">{hostel.name}</p>
          <p className="text-sm">{hostel.type}</p>
          <p className="text-sm">{hostel.address}</p>
        </div>
      </div>
    </div>

    //   </a>
    // </Link>
  );
}
