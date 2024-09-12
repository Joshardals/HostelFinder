import React from "react";
import { ContactForm } from "./ContactForm";
import { Features } from "./Features";
import HostelInfoMap from "./HostelInfoMap";
import { Ratings } from "./Ratings";

export function HostelInfo() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 p-4">
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
      </div>

      <ContactForm />
    </div>
  );
}
