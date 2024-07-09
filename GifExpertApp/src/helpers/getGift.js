export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3M6iuMEarKeuyFRs7pPLnMHdkgfNsH3s&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifts);
  return gifts;
};
