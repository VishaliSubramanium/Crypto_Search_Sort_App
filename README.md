# Crypto Market Dashboard

A sleek, dark-themed cryptocurrency dashboard built using HTML, CSS, and Vanilla JavaScript. 
This application fetches live market data for top cryptocurrencies via the CoinGecko API, supporting promise handling with both `.then` and `async/await`. 
It features interactive search and dynamic sorting capabilities to easily filter and organize cryptocurrency data.

## Features

1. **Dual API Fetch Implementation**: Demonstrates fetching external data using both standard `.then()` promise chains and modern `async/await` syntax.
2. **Dynamic Table Rendering**: Renders coin information including icon, name, symbol, current price, total volume, 24-hour percentage change, and total market cap.
3. **Real-time Search**: Search and filter cryptocurrencies instantaneously by name or ticker symbol.
4. **Sorting Functionality**:
  - Sort entries in descending order by Market Cap.
  - Sort entries in descending order by 24-hour Percentage Change.
5. **Responsive Dark UI**: Clean, modern dark layout styled to match standard exchange interfaces.

## Technologies Used

1. **HTML5**: Structured semantic layout for the controls and cryptocurrency data table.
2. **CSS3**: Custom dark-themed styling, Flexbox layout, hover states, and responsive spacing without external UI frameworks.
3. **JavaScript (ES6+)**:
  - Fetch API utilizing both `.then()` and `async/await` syntax for handling asynchronous HTTP requests.
  - Higher-Order Array Methods (`.filter()`, `.sort()`, `.map()`, `.forEach()`) for search filtering and data manipulation.
  - DOM Manipulation for dynamically rendering table rows.

4. **CoinGecko REST API**: External data source for real-time market data, price updates, market caps, and crypto icons.
