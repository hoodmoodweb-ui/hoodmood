export default function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4">
      <p className="text-xs uppercase tracking-[0.16em] ">{label}</p>
      <p className="mt-2 text-sm leading-6  ">{value}</p>
    </div>
  );
}
