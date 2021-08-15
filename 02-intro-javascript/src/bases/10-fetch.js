const apiKey = 'iqcY8fS1y4HOkn3XgGjj9yWC8QOEHrT1';

const request = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)

request
  .then( (response) =>  response.json() )
  .then( ({data}) => { 
    const {url} = data.images.original;
    console.log(`url`, url);

    const img = document.createElement('img');
    img.src=url;

    document.body.appendChild(img);
})

.catch(console.warn);