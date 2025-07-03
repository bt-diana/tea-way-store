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
      {title && <TitleLevel>{title}</TitleLevel>}
      {paragraph && <p>{paragraph}</p>}
      {children}
    </section>
  );
};

export default Section;
