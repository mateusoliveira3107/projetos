const cidade = document.getElementById('cidade');

const botaoBuscar = document.getElementById('buscar');

const resultado = document.getElementById('resultado');

botaoBuscar.addEventListener("click", async function() {    
    const resposta = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidade.value}&count=1&language=pt&format=json`);

    const dados = await resposta.json();

    if (!dados.results) {
        resultado.innerHTML = `<h3>Cidade não encontrada</h3>`
    }

    const pais = dados.results[0].country
    const latitude = dados.results[0].latitude;
    const longitude = dados.results[0].longitude;

    const respostaClima = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)

    const clima = await respostaClima.json();

    const temperatura = clima.current.temperature_2m;
    const umidade = clima.current.relative_humidity_2m
    const vento = clima.current.wind_speed_10m

    resultado.innerHTML = `<h2 id="clima">Clima de ${cidade.value}</h2>`
    resultado.innerHTML += `<p>País: ${pais}</p>`;

    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`Temperatura: ${clima}`)
    resultado.innerHTML += `<p>Temperatura: ${temperatura} °C</p>`
    resultado.innerHTML += `<p>Umidade: ${umidade} %</p>`
    resultado.innerHTML += `<p>Vento: ${vento} km/h</p>`
})