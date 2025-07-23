export type Image = {
  name: string;
  src: string;
};

export type ArticleSection = {
  title: string;
  text: string;
  images?: Image[];
};

export type Article = {
  id: string;
  title: string;
  description: string;
  cover: string;
  forMainPage?: boolean;
  sections: ArticleSection[];
};
