//выводит котировки валют

import './CurrenciesRates.css';

function CurrenciesRates({ currenciesRates }) {
  return (
    <div className="Currencies-rates">

        {currenciesRates.map((item, i) => {
          return <div className="Currencies-rates-list" key={i}>
            <p className="Currencies-rates-item-name">{item.name}</p>
            <p className="Currencies-rates-item-value">{item.value}</p>
            <p className="Currencies-rates-item-difference">{item.difference}</p>
          </div>
        })}
 
    </div>
  );
}

export default CurrenciesRates;