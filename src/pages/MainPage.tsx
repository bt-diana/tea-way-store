import ProductsList from '../components/ProductsList';
import Section from '../components/Section';
import type { SectionData } from '../types/sectionData';
import { Title } from '../types/titile';

const sections: SectionData[] = [
  {
    title: 'Чайный Путь — настоящий вкус чая!',
    TitleLevel: Title.h1,
    paragraph:
      'Откройте мир настоящего китайского чая. Только отборные сорта, прямиком с лучших чайных плантаций Китая.',
  },
  {
    title: 'Популярное',
    children: <ProductsList />,
  },
];

const MainPage = () => {
  return (
    <main>
      {sections.map(({ title, TitleLevel, paragraph, children }) => (
        <Section title={title} TitleLevel={TitleLevel} paragraph={paragraph}>
          {children}
        </Section>
      ))}
    </main>
  );
};

export default MainPage;
