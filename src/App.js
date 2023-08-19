import './App.css';

import News from './components/Header/News/News';
import Ad from './components/Header/Ad/Ad';
import CurrenciesRates from './components/Header/CurrenciesRates/CurrenciesRates';
import ShowBanner from './components/Main/ShowBanner';
import Search from './components/Main/Search';
import FooterWidget from './components/Footer/FooterWidget';

import newsCategoriesList from './data/newsCategoriesList.js';
import newsList from './data/newsList.js';
import currenciesRates from './data/currenciesRates.js';
import ads from './data/ads.js';
import banner from './data/nature.jpeg';
import searchCategories from './data/searchCategories.js';
import widgets from './data/widgets.js';

function App() {
  return (
    <div className="App">

      <header className="Header">

        <div className="Header-left-side">
          <News newsCategoriesList={newsCategoriesList} newsList={newsList} />
          <CurrenciesRates currenciesRates = {currenciesRates}/>
        </div>

        <div className="Header-right-side">
          <Ad {...ads}/>
        </div>

      </header>

      <main className="Main">

          <Search searchCategories={searchCategories} />
          <ShowBanner src={banner}/>

      </main>

      <footer className="Footer">
        <FooterWidget widgets = {widgets}/>
      </footer>

    </div>
  );
}

export default App;
