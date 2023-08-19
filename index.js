let url;
let urlId;
let data;

const test = document.querySelector('#test');
const result = document.querySelector('#result');

function sacarID(url) {
  urlId = url.split("v=")[1];
  mp3(urlId);
}

function mp3(urlId) {
  let url1 = `https://youtube-mp36.p.rapidapi.com/dl?id=${urlId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ba264ab0b9msh266e7173cc10196p1c5b50jsn2a367db1199b',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    }
  }
  fetch(url1, options).then(response => response.json()).then(data => {
    if (data.msg == "success") {
      result.innerHTML = `
      <h2 class="title">${data.title}</h2>
      <p class="size">Peso: ${data.filesize} KB</p>
      <a class="link" href="${data.link}">Descargar</a>
      `;
    } else {
      result.innerHTML = `
      <h2 class="error" >ERROR</h2>
      <p class="description">Debes poner una url valida</p>
      `
    }

  })
}

test.addEventListener('submit', (e) => {
  e.preventDefault();
  url = document.querySelector('#url').value;
  sacarID(url);
  url = document.querySelector('#url').value = "";
});