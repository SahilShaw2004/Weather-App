# Weather Display Web-App

This project is a simple weather display application that fetches current weather data for a desired location using the [OpenWeather API](https://openweathermap.org/current). The app displays the weather information along with corresponding SVG icons such as cloud, thunder, and sunny, based on the current weather conditions.

## Features

- **Real-time Weather Data**: Fetches the current weather data for any location using the OpenWeather API.
- **Dynamic Weather Icons**: Displays SVG icons corresponding to the weather conditions like cloud, thunder, sunny, etc.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-display-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-display-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root of the project and add your OpenWeather API key:
   ```plaintext
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Enter the desired location in the search bar to fetch and display the current weather information.
- The app will display the temperature and an SVG icon representing the weather conditions.

## Deployment Issue

While the application works perfectly on local development, it is currently experiencing issues when deployed to a production environment. The weather icons are not loading as expected.

**If you have experience with deployment issues or have a solution in mind, feel free to create a pull request. Your contributions to resolving this issue are highly appreciated!**

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/resolve-deployment-issue`).
3. Commit your changes (`git commit -am 'Resolve deployment issue'`).
4. Push to the branch (`git push origin feature/resolve-deployment-issue`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

