
import '../App.css';
// import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import DataTable from '../component/Table'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '../component/Map'
import TimeZone from '../component/TimeZone'



function Home(){
    return(
        <div>
            <Map/>
            <DataTable/>
            <TimeZone/>
            <></>
            <></>
            <></>
            <></>

        </div>
        
    );
}
 export default Home;