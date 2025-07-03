import type { SectionData } from '../types/sectionData';
import { Title } from '../types/titile';

type SectionProps = SectionData & { className?: string };

const Section = ({
  title,
  TitleLevel = Title.h2,
  paragraph,
  className,
  children,
}: SectionProps) => {
  return (
    <section className={className}>
      <TitleLevel>{title}</TitleLevel>
      <p>{paragraph}</p>
      {children}
    </section>
  );
};

export default Section;
