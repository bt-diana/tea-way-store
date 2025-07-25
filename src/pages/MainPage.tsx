import ArticlesList from '../components/ArticlesList';
import ProductsList from '../components/ProductsList';
import Section from '../components/Section';
import TilesGroup from '../components/TilesGroup';
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
    title: 'Различные виды чая',
    children: <TilesGroup parentTypeId="tea" carousel />,
  },
  {
    title: 'Всё для чайной церемонии',
    children: <TilesGroup parentTypeId="teawear" />,
  },
  {
    title: 'Популярное',
    children: <ProductsList popular />,
  },
  {
    title: 'Для начинающих ценителей чая',
    children: <ProductsList amateur />,
  },
  {
    title: 'Наборы',
    children: <ProductsList sets />,
  },
  {
    title: 'Узнайте больше',
    children: <ArticlesList forMainPage />,
  },
];

const MainPage = () => {
  return (
    <main>
      {sections.map(({ title, TitleLevel, paragraph, children }, index) => (
        <Section
          key={index}
          title={title}
          TitleLevel={TitleLevel}
          paragraph={paragraph}
        >
          {children}
        </Section>
      ))}
    </main>
  );
};

export default MainPage;
