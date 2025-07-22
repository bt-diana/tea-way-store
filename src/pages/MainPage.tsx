import ProductsList from '../components/ProductsList';
import Section from '../components/Section';
import TilesGroup from '../components/TilesGroup';
import type { SectionData } from '../types/sectionData';
import type { TileData } from '../types/tileData';
import { Title } from '../types/titile';

const teaTiles: TileData[] = [
  {
    url: '/catalog/teaware/bowls',
    label: 'Пуэр',
    imageSrc: '/images/bowlTileImage.png',
  },
  {
    url: '/catalog/teaware/shepherds',
    label: 'Красный',
    imageSrc: '/images/shepherdTileImage.png',
  },
  {
    url: '/catalog/teaware/teapots/yixing',
    label: 'Белый',
    imageSrc: '/images/teapotTileIamge.png',
  },
];

const teawareTiles: TileData[] = [
  {
    url: '/catalog/teaware/bowls',
    label: 'Пиалы',
    imageSrc: '/images/bowlTileImage.png',
  },
  {
    url: '/catalog/teaware/shepherds',
    label: 'Чабани',
    imageSrc: '/images/shepherdTileImage.png',
  },
  {
    url: '/catalog/teaware/teapots/yixing',
    label: 'Исинские чайники',
    imageSrc: '/images/teapotTileIamge.png',
  },
];

const sections: SectionData[] = [
  {
    title: 'Чайный Путь — настоящий вкус чая!',
    TitleLevel: Title.h1,
    paragraph:
      'Откройте мир настоящего китайского чая. Только отборные сорта, прямиком с лучших чайных плантаций Китая.',
  },
  {
    title: 'Различные виды чая',
    children: <TilesGroup tiles={teaTiles} carousel />,
  },
  {
    title: 'Всё для чайной церемонии',
    children: <TilesGroup tiles={teawareTiles} />,
  },
  {
    title: 'Популярное',
    children: <ProductsList popular={true} />,
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
