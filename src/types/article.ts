export type ArticleSection = {
  title: string;
  text: string;
  images?: string[];
};

export type Article = {
  id: string;
  title: string;
  description: string;
  cover: string;
  forMainPage?: boolean;
  sections: ArticleSection[];
};
