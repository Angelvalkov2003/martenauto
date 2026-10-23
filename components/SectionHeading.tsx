import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
};

export default function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-silver">{eyebrow}</p>
      <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">{lead}</p>
      )}
    </Reveal>
  );
}
