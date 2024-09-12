import React from "react";
import { ContactForm } from "./ContactForm";
import { Features } from "./Features";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import HostelInfoMap from "./HostelInfoMap";
import { Ratings } from "./Ratings";
import { HostelHighlights } from "./HostelHighlights";

export function HostelInfo() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 p-4 ">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <h3 className="font-medium mb-2">John&apos;s Apartment</h3>
              <Ratings />
              <p className="text-charcoal">LASU-Iba Road, Ojo, Lagos</p>
              <p className="">Self Contain</p>
            </div>

            <h3 className="font-medium mb-0">₦300,000/yr</h3>
          </div>

          {/* Rooms, Bathrooms, Square Feets */}
          <div className="mb-8">
            <Features />
          </div>

          <HostelInfoMap />

          {/* Description */}
          <div>
            <span className="font-medium text-[18px]">Description</span>

            {/* Contact Information */}
            <div className="flex items-center w-[fit-content] mt-2 mb-4 space-x-2 text-royal cursor-pointer hover:underline">
              <HiDevicePhoneMobile />
              <span>0806 123 4567</span>
            </div>
            <p className="text-pretty">
              John&apos;s Apartment is a self-contained unit located along
              LASU-Iba Road, perfect for students looking for affordable housing
              close to campus. The apartment is well-ventilated and offers a
              private bathroom, a kitchen area, and prepaid electricity. Walking
              distance to LASU and commercial areas, this unit is ideal for
              students who want convenience and privacy.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <ContactForm />
        </div>
      </div>

      {/* Hostel Highlights & More */}
      <div className="p-4">
        <HostelHighlights />
      </div>
    </div>
  );
}
