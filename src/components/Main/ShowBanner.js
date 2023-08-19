// выводит изображение баннера

export default function ShowBanner({src}) {
    return (
      <div>
        <img src={src} alt='banner image' width = '1200px'/>
      </div>
    );
  }