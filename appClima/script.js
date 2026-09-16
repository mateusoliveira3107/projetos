const cidade = document.getElementById('cidade');

const botaoBuscar = document.getElementById('buscar');

const resultado = document.getElementById('resultado');

botaoBuscar.addEventListener("click", function() {    
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidade.value}&count=1&language=pt&format=json`)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (!dados.results) {
            console.log("Cidade não encontrada")
            resultado.textContent = "Cidade não encontrada"
            return
        };

        const pais = dados.results[0].country
        const latitude = dados.results[0].latitude;
        const longitude = dados.results[0].longitude;

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
        .then(function(respostaClima) {
            return respostaClima.json();
        })
        .then(function(clima) {
            resultado.innerHTML = `<h2>🌤️ Clima de ${cidade.value}</h2>`

            resultado.innerHTML += `<p>País: ${pais}</p>`;
            resultado.innerHTML += `<p>Latitude: ${latitude}</p>`
            resultado.innerHTML += `<p>Longitude: ${longitude}</p>`

            console.log(`Latitude: ${dados.results[0].latitude}`);
            console.log(`Longitude: ${dados.results[0].longitude}`);
            console.log(clima)
            resultado.innerHTML += `<p>Temperatura: ${clima.current.temperature_2m} °C</p>`
        })
    })
})