const search = document.getElementById('search')

const input = document.getElementById('input')

const images = document.getElementById('images') // Хранилище для изображений

let url = `https://api.unsplash.com/search/photos?per_page=30&query=spring&client_id=mq6Y9JZwlJ6Wgxa2m6XE5bft4K9uA3Kc99na3ERas2o`;

input.focus();

function showData(data, i) {
    const img = document.createElement('img');
    img.classList.add('galleryImg');
    img.src = data.results[i].urls.regular;
    img.alt = `image`;
    images.append(img);
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    for(i=0; i<data.results.length; i++) {
        showData(data, i);
    }
  }
  getData();

function newImage() {
    images.innerHTML = '';
    url = 'https://api.unsplash.com/search/photos?per_page=30&query=' + input.value + '&client_id=mq6Y9JZwlJ6Wgxa2m6XE5bft4K9uA3Kc99na3ERas2o';
    getData();
}

search.addEventListener('click', newImage);

input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter'){
        newImage()
    }
}
)