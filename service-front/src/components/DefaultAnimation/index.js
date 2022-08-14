import "./style.scss";

function DefaultAnimation(props) {
  return (
    <section className="defaultAnimation">
      {/* <img className="animatedcar" src="https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif" alt="animatedcar" /> */}
      <svg className="frame">
      <polyline
          className="light"
          points="600,240  598,180"
        />
         <circle className="light green" cx="598" cy="180" r="8" />
         <circle className="light yellow" cx="598" cy="162" r="8" />
         <circle className="light red" cx="598" cy="142" r="8" />
        <polyline
          className="car"
          points="50,260  200,256 180,230 150,230 140,200 100,200 90,230 30,239"
        />
        <circle className="car" cx="70" cy="260" r="10" />
        <circle className="car" cx="160" cy="260" r="10" />

        <circle className="smoke" cx="210" cy="260" r="3" />
        <circle className="smoke" cx="215" cy="250" r="4" />
        <circle className="smoke" cx="230" cy="240" r="6" />

       

        <polyline className="path" points="10,280 100,270 400,280 500,280" />
        <polyline
          className="path"
          points="400,260 500,250 600,240 700,230 900,250"
        />

        <polyline className="car" points="100,230 140,230" />

       
      </svg>
    </section>
  );
}
export default DefaultAnimation;
