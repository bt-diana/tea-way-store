import type { Article } from '../types/article';

const API_URL = process.env.VITE_API_URL!;
const ARTICLE_PATH = process.env.VITE_API_ARTICLE_PATH!;

export const getArticleById = async (articleId: string) => {
  return fetch(API_URL + ARTICLE_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((articles: Article[]) => {
      return articles.find(({ id }) => id === articleId);
    });
};

export const getAllArticles = async (
  params?: Partial<Record<keyof Article, unknown>>
) => {
  return fetch(API_URL + ARTICLE_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((articles: Article[]) => {
      return articles.filter((article: Article) => {
        for (const param in params) {
          const paramsValue = params[param as keyof Article];
          const articleValue = article[param as keyof Article];

          if (paramsValue === undefined) {
            continue;
          }
          if (articleValue !== paramsValue) return false;
        }
        return true;
      });
    });
};
