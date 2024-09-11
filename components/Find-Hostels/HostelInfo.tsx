import { ContactForm } from "./ContactForm";

export function HostelInfo() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 p-4">
      <div className="col-span-2">Hostel Information</div>

      <ContactForm />
    </div>
  );
}
