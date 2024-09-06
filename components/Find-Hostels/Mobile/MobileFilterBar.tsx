import { ToggleFilter } from "./ToggleFilter";

export function MobileFilterBar() {
  return (
    <section className="p-4 md:hidden">
      <ToggleFilter />
    </section>
  );
}
