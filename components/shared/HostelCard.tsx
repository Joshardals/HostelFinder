import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";

export function HostelCard() {
  return (
    // <Link href="/find-hostels/12345" passHref legacyBehavior>
    //   <a className="space-y-2" target="_blank" rel="noopener noreferrer">

    <div className="space-y-2 bg-red-500">
      <Swiper
        slidesPerView={1}
        pagination={true}
        navigation={true}
        speed={700}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full rounded-xl"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide className=" bg-black" key={index}>
            <div className={`h-[15rem] max-sm:h-[25rem] text-gray `}>Hey</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-bold text-charcoal">₦300,000/yr</p>
          <div className="flex items-center space-x-1">
            <span>
              <IoStar />
            </span>
            <span>4.5</span>
          </div>
        </div>
        <div>
          <p className="text-sm">John&apos;s Apartment</p>
          <p className="text-sm">Self Contain</p>
          <p className="text-sm">LASU-Iba Road, Ojo, Lagos</p>
        </div>
      </div>
    </div>

    //   </a>
    // </Link>
  );
}
