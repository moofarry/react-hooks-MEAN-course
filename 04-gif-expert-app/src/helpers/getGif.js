export const getGifs = async (category) => {
  
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=Enhu5gM26OHBLH0hYgf1tKNVcT2JHheo`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url,
    };
  });

  return gifs;

};