import type { SectionData } from '../types/sectionData';
import { Title } from '../types/titile';

type SectionProps = SectionData;

const Section = ({
  title,
  TitleLevel = Title.h2,
  paragraph,
  children,
}: SectionProps) => {
  return (
    <section>
      <TitleLevel>{title}</TitleLevel>
      <p>{paragraph}</p>
      <div>{children}</div>
    </section>
  );
};

export default Section;
