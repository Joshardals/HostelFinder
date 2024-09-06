export function ToggleButton({ label, icon }: { label: string; icon: any }) {
  return (
    <button
      type="submit"
      className={`px-8 py-2 ring-1 ring-charcoal/20 rounded-md flex items-center space-x-2 font-medium`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}