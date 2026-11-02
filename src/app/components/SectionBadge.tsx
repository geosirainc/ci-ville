type SectionBadgeVariant = 'blue' | 'red' | 'orange' | 'green';

// Libellé de section sobre : texte seul, sans pastille ni fond teinté (la variante est conservée pour les appels existants)
export function SectionBadge({ label }: { label: string; variant?: SectionBadgeVariant }) {
  return (
    <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#1F6FA5] dark:text-[#3FA0D6]">
      {label}
    </span>
  );
}
