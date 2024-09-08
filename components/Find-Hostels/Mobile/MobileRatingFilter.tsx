import { ratings } from "@/lib/data";
import { useFiltersStore } from "@/lib/store";

export function MobileRatingFilter() {
  const { selectedRating, setSelectedRating } = useFiltersStore();

  return (
    <div>
      <p className="text-charcoal/70 mb-1">Star Rating</p>
      <ul className="grid grid-cols-5 border-y border-l border-l-charcoal/20 border-y-charcoal/20 rounded-md">
        {ratings.map((rating) => (
          <li
            key={rating}
            className={`px-4 py-2 text-center border-r border-r-charcoal/20 cursor-pointer hover-effects  ${
              rating === 5 && "rounded-tr-md rounded-br-md"
            } ${rating === 1 && "rounded-tl-md rounded-bl-md"} ${
              rating === selectedRating
                ? "bg-royal text-gray"
                : "hover:bg-charcoal/20"
            }`}
            onClick={() => {
              setSelectedRating(rating);
            }}
          >
            {rating}
            {rating !== 5 && "+"}
          </li>
        ))}
      </ul>
    </div>
  );
}
