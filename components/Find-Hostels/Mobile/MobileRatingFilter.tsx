export function MobileRatingFilter() {
  const ratings = [1, 2, 3, 4, 5]; // Possible ratings

  return (
    <div>
      <p className="text-charcoal/70 mb-1">Star Rating</p>
      <ul className="grid grid-cols-5 border-y border-l border-l-charcoal/20 border-y-charcoal/20 rounded-md">
        {ratings.map((rating) => (
          <li
            key={rating}
            className={`px-4 py-2 text-center border-r border-r-charcoal/20 ${
              rating === 5 && "rounded-md"
            }`}
          >
            {rating}+
          </li>
        ))}
      </ul>
    </div>
  );
}
