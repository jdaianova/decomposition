// выводит содержимое виджета

export default function WidgetContent({ content }) {
    return (
        <ul className="WidgetContent">
            {content.map((item, i) => {
                return (
                    <li key={i}>{item}</li>
                )
            })}
        </ul>
    );
}