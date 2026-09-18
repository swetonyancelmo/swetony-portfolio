type Props = { index: string; label: string };

export function SectionLabel({ index, label }: Props) {
  return (
    <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
      <span className="text-copper">{index}</span>
      <span className="h-px w-6 bg-line" aria-hidden />
      <span>{label}</span>
    </div>
  );
}
