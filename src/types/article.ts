export type ArticleSection = {
  id: string;
  title: string;
  text: string;
  images?: string[];
};

export type Article = {
  id: string;
  title: string;
  description: string;
  cover: string;
  sections: ArticleSection[];
};
