// выводит нижние блоки информации

import WidgetContent from "./WidgetContent";
import './FooterWidget.css';

export default function FooterWidget({ widgets }) {
    return (
        <div className="FooterWidget">
            {widgets.map((item,i)=>{
                return (
                    <div className="Widget-info" key={i}>
                        <h3 key={i}>{item.title}</h3>
                        <WidgetContent content = {item.content}/>
                    </div>
                )
            })}
        </div>
    );
}