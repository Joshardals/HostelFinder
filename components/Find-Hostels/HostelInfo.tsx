import React from "react";
import { ContactForm } from "./ContactForm";
import { Features } from "./Features";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { Ratings } from "./Ratings";
import { HostelHighlights } from "./HostelHighlights";
import { HostelTypings } from "@/typings/database";
import { toNaira } from "@/lib/utils";

export function HostelInfo({
  selectedHostel,
}: {
  selectedHostel: HostelTypings;
}) {
  return (
    <div>
      <div className=" max-lg:space-y-4 lg:grid lg:grid-cols-3 lg:gap-4 p-4 ">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4 mb-2 lg:mb-4">
            <div className="col-span-2">
              <h3 className="font-medium mb-0">{selectedHostel.name}</h3>
              <p className="sm:hidden max-sm:mb-2 font-medium">
                {selectedHostel.address}
              </p>
              <h3 className="font-medium mb-0 sm:hidden">
                {toNaira(selectedHostel.price)}/yr
              </h3>
              <div>
                <Ratings rating={selectedHostel.ratings} />
              </div>
              <p className="font-medium max-sm:hidden">
                {selectedHostel.address}
              </p>
              <p className="font-medium">{selectedHostel.type}</p>
            </div>

            <h3 className="font-medium mb-0 max-sm:hidden">
              {toNaira(selectedHostel.price)}/yr
            </h3>
          </div>

          {/* Rooms, Bathrooms, Square Feets */}
          <div className="mb-8">
            <Features
              room={selectedHostel.room}
              bath={selectedHostel.bath}
              square_feet={selectedHostel.square_feet}
            />
          </div>

          {/* I don't really need the map atm */}
          {/* <HostelInfoMap /> */}

          {/* Description */}
          <div className="max-lg:mb-8">
            <span className="font-medium text-[18px]">Description</span>

            {/* Contact Information */}
            <div className="flex items-center w-[fit-content] mt-2 mb-4 space-x-2 text-royal cursor-pointer hover:underline">
              <HiDevicePhoneMobile />
              <a href={`tel:${selectedHostel.contact_number}`}>
                {selectedHostel.contact_number}
              </a>
            </div>
            <p
              className="text-pretty"
              dangerouslySetInnerHTML={{
                __html: selectedHostel.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <ContactForm
            name={selectedHostel.contact_name}
            number={selectedHostel.contact_number}
          />
        </div>
      </div>

      {/* Hostel Highlights & More */}
      <div className="p-4">
        <HostelHighlights
          water_supply={selectedHostel.water_supply}
          electricity={selectedHostel.electricity}
          kitchen={selectedHostel.kitchen}
          security={selectedHostel.security}
          furnishing={selectedHostel.furnishing}
          listed={selectedHostel.$createdAt}
        />
      </div>
    </div>
  );
}
