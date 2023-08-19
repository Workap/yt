let url = "https://youtube-mp36.p.rapidapi.com/dl?id=GeSEsHkyPHo";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ba264ab0b9msh266e7173cc10196p1c5b50jsn2a367db1199b',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
}
fetch(url, options).then(response => response.json()).then(data => {
  console.log(data);
})
