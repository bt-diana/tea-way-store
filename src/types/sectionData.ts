import type { Title } from './titile';

export type SectionData = {
  title?: string;
  TitleLevel?: Title;
  paragraph?: string;
  children?: React.ReactNode;
};
