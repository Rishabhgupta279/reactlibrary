import React , { Userstate } from "react";
import './App.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

import ReactToolTip from "react-tooltip";
const markers = [
  {
    // markerOffset: -15,
    name:"Delhi",
    number:"1000",
    coordinates: [ 78.9629, 20.5937],
  },
  {
    markerOffset: -15,
    name:"Paris",
    number:"1000",
    coordinates: [-48.8566, 2.3522],
  },
  {
    markerOffset: -15,
    name:"Peru",
    number:"1000",
    coordinates: [ -70.1900, -8.0152],
  },
  {
    markerOffset: -15,
    name:"kenya",
    number:"1000",
    coordinates: [37.9062, 0.0236],
  },
  {
    markerOffset: -15,
    name:"Egypt",
    number:"1000",
    coordinates: [30.8025,26.8206],
  },
  {
    markerOffset: -15,
    name:"Nigerai 1000",
    
    coordinates: [8.6753, 9.0820],
  },
  {
    markerOffset: -15,
    name:"Indonesia",
    number:"1000",
    coordinates: [113.9213, 0.7893],
  },
  {
    markerOffset: -15,
    name:"Tokoyo",
    number:"1000",
    coordinates: [139.6503, 35.6762],
  },
  {
    markerOffset: -15,
    name:"Moscow",
    number:"1000",
    coordinates: [37.6173, 55.7558],
  },
];
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
function App() {
  return (
<div className="App" style={{
width: "100%",
height: "100%",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center"
 
}}>
<div style={{width: "1200px", borderStyle: "double"}}>
<ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({geographies}) => geographies.map(geo =>
            <Geography key={geo.rsmKey} geography={geo} />
          )}
        </Geographies>
        {
          markers.map(({name, number, coordinates})=>(
<Marker key={name} coordinates={coordinates} values={number}>
  
<circle style={{fill: "#D3D3D3",border:0,display:"flex"}} r={30}/>    
<text
textAnchor="end"  
style={{fill: "#000000",fontSize:"10px",}}
>{name}
</text>
<text
textAnchor="start"
style={{fontSize:"5px",  display:"flex",}}
>{number}
</text>


</Marker>
 ))}
</ComposableMap>
  
  </div>
  </div>);
  
}

export default App;
