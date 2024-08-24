document.getElementById('weatherForm').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Botão clicado');

    const city = document.getElementById('cityInput').value;
    const apiKey = '6a718309030bc700b30b31e36df4fca8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if(data.cod === 200){
            document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('description').textContent =  `Tempo: ${data.weather[0].description}`;
            document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            
            document.getElementById('weatherResult').classList.remove('hidden');
            
            if(city === 'shadow'){
                document.body.style.backgroundImage = "url('images/shadow.jpg')";
            }else{
                document.body.style.backgroundImage = "none";
            }
        } else {
            alert('Cidade Não Encontrada');
        }
    })
    .catch(error => {
        console.error('Error fetching the weather data: ', error);
    });
});