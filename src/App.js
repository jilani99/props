
import './App.css';
import Navt from "./Componet/Navb.js";
import Dat from "./Componet/data";
import img1 from "./img/on.jpg";
import img2 from "./img/img1.png";
import img3 from "./img/img2.png";
import img4 from "./img/img3.png";
function App() {
  const list =[
    {name:"jilani",
    age :23,
    filed:"devolppor",
    img:img1,
    img1:img2,
    img2:img3,
    img3:img4,
  }
  ]
  return (
    <div className="App">
      <Navt/>
      {list.map((el)=>(<Dat name={el.name} age={el.age} filed={el.filed} i={el.img1} a={el.img2} z={el.img3} ><img src={el.img } alt="s" /></Dat>))}
    
    </div>
  );
}

export default App;
