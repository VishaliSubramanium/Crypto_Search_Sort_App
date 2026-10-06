const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

let cryptoData = [];

function fetchDataWithThen() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      cryptoData = data;
      renderTable(cryptoData);
    })
    .catch(error => {
      console.error('Error fetching data using .then:', error);
    });
}

async function fetchDataWithAsyncAwait() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    cryptoData = data;
    renderTable(cryptoData);
  } catch (error) {
    console.error('Error fetching data using async/await:', error);
  }
}

function renderTable(data) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');

    const priceChange = item.price_change_percentage_24h || 0;
    const priceClass = priceChange >= 0 ? 'percentage-green' : 'percentage-red';

    row.innerHTML = `
      <td>
        <div class="coin-info">
          <img class="coin-icon" src="${item.image}" alt="${item.name}">
          <span>${item.name}</span>
        </div>
      </td>
      <td class="coin-symbol">${item.symbol}</td>
      <td class="text-right">$${item.current_price}</td>
      <td class="text-right">$${item.total_volume.toLocaleString()}</td>
      <td class="text-right ${priceClass}">${priceChange.toFixed(2)}%</td>
      <td class="text-right"><span class="mkt-cap-label">Mkt Cap :</span> $${item.market_cap.toLocaleString()}</td>
    `;

    tableBody.appendChild(row);
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filteredData = cryptoData.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.symbol.toLowerCase().includes(query)
  );
  renderTable(filteredData);
});

document.getElementById('sortMktCapBtn').addEventListener('click', () => {
  const sortedData = [...cryptoData].sort((a, b) => b.market_cap - a.market_cap);
  renderTable(sortedData);
});

document.getElementById('sortPercentageBtn').addEventListener('click', () => {
  const sortedData = [...cryptoData].sort((a, b) => 
    (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0)
  );
  renderTable(sortedData);
});

fetchDataWithAsyncAwait();