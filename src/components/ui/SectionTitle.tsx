interface SectionTitleProps {
  overline: string;
  title: string;
  description?: string;
}

export function SectionTitle({ overline, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="text-overline uppercase tracking-widest text-primary block mb-3">
        {overline}
      </span>
      <h2 className="font-display text-h1 text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg text-muted-foreground max-w-[560px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
