export const fetchDrawings = async () => {
  const ACCESS_KEY = '7WkN8EEkCZu-gg-gEFuwUfLkLy910x-FP-98VOiuFrQ';
  const res = await fetch(`https://api.unsplash.com/search/photos?query=drawing&per_page=20&client_id=${ACCESS_KEY}`);
  
  if(!res.ok) {
    throw new Error('Errore nel fetch di Unsplash');
  }

  const data = await res.json();
  return data.results.map((item, index) => ({
    id: item.id,
    title: item.alt_description || 'Artwork',
    artist: item.user.name,
    image: item.urls.small
  }));
};