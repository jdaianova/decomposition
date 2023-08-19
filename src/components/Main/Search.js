// выводит все, что относится к поиску

import './Search.css';

export default function Search({ searchCategories }) {

  return (
    <div className="Search">

      <nav>
        <ul>
          {searchCategories.map((item, i) => {
            return (
              <li key={i}><a href="#0">{item}</a></li>
            );
          })}
          <li><a href="#0">ещё</a></li>
        </ul>
      </nav>

      <form>
        <label htmlFor="search-input">Яндекс</label>
        <input id="search-input" type="text" name="search-input" required />
        <button type="submit">Найти</button>
      </form>

      <p>Найдётся всё. Например,
        <span>&nbsp;фаза луны сегодня</span>
      </p>

    </div>
  );
}