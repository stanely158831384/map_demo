
import '../App.css';
import React, { useState } from 'react';
import DataTable from '../component/Table'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '../component/Map'
import TimeZone from '../component/TimeZone'



function Home(){
    return(
        <div>
            <Map/>
            <div style={{marginTop:10}}>
            <TimeZone/>
            <DataTable/>
            </div>
        </div>
        
    );
}
 export default Home;