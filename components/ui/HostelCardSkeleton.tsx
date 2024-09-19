import React from "react";

export function HostelCardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          className="animate-pulse border border-gray rounded-lg space-y-4"
          key={index}
        >
          {/* Image Skeleton */}
          <div className="bg-gray h-40 w-full rounded-lg"></div>

          {/* Price & Rating Skeleton */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray h-6 col-span-2 rounded"></div>
            <div className="bg-gray h-6 w-full rounded"></div>
          </div>

          {/* Hostel Name Skeleton */}
          <div className="bg-gray h-4 w-full rounded"></div>

          {/* Hostel Type Skeleton */}
          <div className="bg-gray h-5 w-1/2"></div>

          {/* Location Skeleton */}
          <div className="bg-gray h-5 w-full"></div>
        </div>
      ))}
    </div>
  );
}
