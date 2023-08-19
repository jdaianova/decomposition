//выводит рекламный блок

import './Ad.css';

function Ad({ img, title, text, link }) {
    //console.log(img);

    return (
        <div className="Ad">
            <img src={img} alt={title}></img>
            <a href = {link}>
                <h5>{title}</h5>
            </a>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Ad;