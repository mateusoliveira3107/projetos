function mostrarLocalizacaoNaTela(lat, lon) {
    const elemento = document.getElementById("coordenadas");
    if (elemento) {
        elemento.innerText = `Latitude: ${lat}, Longitude: ${lon}`;
    }
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        console.h("Localização obtida: ", latitude, longitude);
        
        // Chame aqui a função que exibe os dados na tela
        mostrarLocalizacaoNaTela(latitude, longitude);
    }, function(error) {
        console.error("Erro ao obter localização ou permissão negada.", error);
    });
} else {
    console.log("Geolocalização não é suportada por este navegador.");
}

async function getLocation() {
    const statusEl = document.getElementById("status");
    try {
        let response = await fetch('https://ipapi.co/json/');
        let data = await response.json();
        
        if (data.city && data.region) {
            statusEl.innerHTML = `João Vitor Indo à sua casa.<br><span class="highlight">${data.city} - ${data.region}</span><br><br>TEMPO RESTANTE:`;
        } else {
            statusEl.innerHTML = `João Vitor Indo à sua casa.<br><span class="highlight">Sua Localização Aproximada</span><br><br>TEMPO RESTANTE:`;
        }
    } catch (error) {
        statusEl.innerHTML = `João Vitor Indo à sua casa.<br><span class="highlight">Endereço IP Rastreado</span>`;
    }
    
    startCountdown();
}

function startCountdown() {
    let timeLeft = 6000; // 60 segundos em décimos/milissegundos (60000ms)
    const timerContainer = document.createElement("span");
    timerContainer.id = "timer";
    document.querySelector(".container").appendChild(timerContainer);
    
    let totalMs = 60000;

    const interval = setInterval(() => {
        totalMs -= 10; // Atualiza a cada 10ms
        
        if (totalMs <= 0) {
            totalMs = 0;
            clearInterval(interval);
            timerContainer.innerHTML = "0.00 - CHEGOU!";
            return;
        }

        alert("João Vitor Está chegando. Localização Fornecida")
        
        let seconds = Math.floor(totalMs / 1000);
        let milliseconds = Math.floor((totalMs % 1000) / 10); // Pega apenas 2 casas de milésimos
        
        let formattedSec = String(seconds).padStart(2, '0');
        let formattedMs = String(milliseconds).padStart(2, '0');
        
        timerContainer.innerHTML = `${formattedSec}:${formattedMs}`;
    }, 10);
}

window.onload = getLocation;