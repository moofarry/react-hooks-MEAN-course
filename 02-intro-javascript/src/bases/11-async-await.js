const getImage = async () => {
try {
  const apiKey = 'iqcY8fS1y4HOkn3XgGjj9yWC8QOEHrT1';
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)
  const {data} = await response.json();

  const {url} = data.images.original;

  const img = document.createElement('img');
  img.src=url;
  document.body.appendChild(img);
} catch (error) {
  //error management
  console.error(error);
}
}

getImage()