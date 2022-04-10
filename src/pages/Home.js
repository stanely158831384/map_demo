
import '../App.css';
// import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '../component/Map'



function Home(){
    return(
        <div>
            <Map/>
        </div>
    );
}
 export default Home;