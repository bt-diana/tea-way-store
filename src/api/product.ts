const API_URL = process.env.VITE_API_URL!;

export const getProducts = () =>
  fetch(API_URL, {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => res.products);
