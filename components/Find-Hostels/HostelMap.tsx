"use client";
import { FaCircle } from "react-icons/fa";
import Map, { Marker } from "react-map-gl";

export function HostelMap() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string}
      initialViewState={{
        longitude: 3.188874,
        latitude: 6.46493,
        zoom: 13,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={3.192} latitude={6.468} anchor="bottom">
        <FaCircle className=" text-red-800 hover-effects hover:text-green-800 ring-2 ring-white rounded-full" />
      </Marker>
    </Map>
  );
}
