const apiKey = "29e5686ad715000820ca0d541d13c648";

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("temp").textContent = Math.round(data.main.temp);
                document.getElementById("city").textContent = data.name;
            });
    });
}
