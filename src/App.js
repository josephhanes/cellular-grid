import './App.css';
import Cellular from './components/Cellular/Cellular';
import Grid from './components/Grid/Grid';

function doIt($event) {
  let targets = $event.target.value;
  targets = targets.split(",");
  console.log(targets.length)
}

function App() {
  return (
    <div>
      <div className="app-header">
      Cellular Grid
      </div>
      <div className="app-content">
        <p>Hello Brother, just copy & paste something in the textbox below, but read the rules!!!</p>
        <b>Rules</b>
        <ul>
          <li>Comma delimeted</li>
          <li>Less than 100 rows (I know this is small, but this is just a test...)</li>
        </ul>
        <div className="text-import-example">
          <code>
          text,numberrange,region,postalZip
          "hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer,",1,Munster,4812
          Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies,1,Ulster,N8V 6W7
          "cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis",1,North Jeolla,54642
          ac nulla. In tincidunt congue turpis. In condimentum. Donec at,4,National Capital Region,47B 1R4
          Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla,4,Phú Thọ,47783
          </code>
        </div>
        <div className="text-import-container">
          <textarea id="import" name="import" onChange={doIt} className='text-area' rows="5">

          </textarea>
        </div>
        <div className="grid-container">
            <Grid isInline={true}>
          <Cellular value="Pizza"></Cellular>
          <Cellular value="Hamburger"></Cellular>
          <Cellular value="Sandwich"></Cellular>
          <Cellular value="Cereal"></Cellular>
          <Cellular value="Candy"></Cellular>
        </Grid>
        </div>
      
    </div>
    </div>
  );
}

export default App;
