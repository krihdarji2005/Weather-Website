const userInput = document.getElementById("input");
const searchButton = document.getElementById("search-button");
const weatherContainer = document.getElementById("weather-container");

function getWeatherForCities(cityNames, detailed = false) {
  const apiKey = "443f5f84e1fa4a558ad132900243012";

  // Clear previous weather data
  weatherContainer.innerHTML = "";

  // Add or remove single-card class based on whether it's a search
  if (detailed) {
    weatherContainer.classList.add("single-card");
  } else {
    weatherContainer.classList.remove("single-card");
  }

  // Rest of your existing getWeatherForCities function remains the same
  const fetchPromises = cityNames.map((cityName) => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
    return fetch(apiUrl).then((response) => response.json());
  });

  Promise.all(fetchPromises)
    .then((results) => {
      results.forEach((data, index) => {
        if (data.error) {
          console.error("Error fetching weather data:", data.error.message);
          return;
        }

        const city = data.location.name;
        const temperature = data.current.temp_c;

        const lastupdated = data.current.last_updated;
        const condition = data.current.condition.text;
        const iconUrl = `https:${data.current.condition.icon}`;
        const localtime = data.location.localtime;
        const humidity = data.current.humidity;
        const windSpeed = data.current.wind_kph;
        const pressure = data.current.pressure_mb;

        const weatherCard = document.createElement("div");
        weatherCard.className = "weather-card";

        if (detailed && index === 0) {
          weatherCard.innerHTML = `
            <h3>${city}</h3>
            <img src="${iconUrl}" alt="Weather Icon" />
            <p><strong>Local Time:</strong> ${localtime}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${condition}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} km/h</p>
            <p><strong>Pressure:</strong> ${pressure} mb</p>
          `;
        } else {
          weatherCard.innerHTML = `
            <h3>${city}</h3>
            <img src="${iconUrl}" alt="Weather Icon" />
            <p><strong>Local Time:</strong> ${localtime}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${condition}</p>
            <p><strong>Last-updated:</strong> ${lastupdated}</p>
           
          `;
        }

        weatherContainer.appendChild(weatherCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const cityName = userInput.value.trim();
    if (cityName) {
      getWeatherForCities([cityName], true);
    } else {
      alert("Please enter a city name.");
    }
  }
});
// Event listeners and initial call remain the same
searchButton.addEventListener("click", () => {
  const cityName = userInput.value.trim();
  if (cityName) {
    getWeatherForCities([cityName], true);
  } else {
    alert("Please enter a city name.");
  }
});

// Initial cities load
getWeatherForCities([
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Mumbai",
  "Beijing",
  "Los Angeles",
  "Cairo",
  "Sydney",
  "Moscow",
  "São Paulo",
  "Toronto",
  "Berlin",
  "Dubai",
  "Mexico City",
  "Singapore",
  "Bangkok",
  "Buenos Aires",
  "Istanbul",
  "Johannesburg",
  "Rome",
  "Lagos",
  "Madrid",
  "Seoul",
  "Jakarta",
  "Lima",
  "Karachi",
  "Bogotá",
  "Tehran",
  "Manila",
  "Rio de Janeiro",
  "Cape Town",
  "Chicago",
  "Kuala Lumpur",
  "Shanghai",
  "Delhi",
  "Vienna",
  "Athens",
  "Melbourne",
  "Baghdad",
  "Hanoi",
  "Riyadh",
  "Nairobi",
  "Dublin",
  "Warsaw",
  "Copenhagen",
  "Brussels",
  "Lisbon",
  "Hong Kong",
  "Bangkok",
  "Kabul",
  "Addis Ababa",
  "Stockholm",
  "Helsinki",
  "Oslo",
  "Amsterdam",
  "Zurich",
  "Budapest",
  "Prague",
  "Venice",
  "Milan",
  "Barcelona",
  "Valencia",
  "Munich",
  "Brisbane",
  "Perth",
  "Darwin",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Lucknow",
  "Chongqing",
  "Shenzhen",
  "Guangzhou",
  "Tianjin",
  "Wuhan",
  "Chengdu",
  "Hangzhou",
  "Xi'an",
  "Nanjing",
  "Surat",
  "Kolkata",
  "Jaipur",
  "Dubai",
  "Abu Dhabi",
  "Doha",
  "Muscat",
  "Casablanca",
  "Rabat",
  "Algiers",
  "Tunis",
  "Tripoli",
  "Khartoum",
  "Accra",
  "Kampala",
  "Luanda",
  "Maputo",
  "Kinshasa",
  "Harare",
  "Antananarivo",
  "Addis Ababa",
  "Port Louis",
  "Reykjavik",
  "Belfast",
  "Cardiff",
  "Edinburgh",
  "Birmingham",
  "Manchester",
  "Liverpool",
  "Glasgow",
  "Bristol",
  "Leeds",
  "Sheffield",
  "Nottingham",
  "Newcastle",
  "York",
  "Canberra",
  "Hobart",
  "Adelaide",
  "Auckland",
  "Wellington",
  "Christchurch",
  "Dunedin",
]);
