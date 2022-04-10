
import '../App.css';
// import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Co2Sharp } from '@mui/icons-material';
import DataTable from '../component/Table'
import Counter from '../component/Counter';
import { useSelector, useDispatch } from "react-redux";



function Home(){
    const [result,setResult] = useState([]);
    const [map, setMap] = useState({});

    useEffect(()=>{
        var L = window.L;
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhbmxleTE1ODgzMTM4NCIsImEiOiJjbDFyNm5pa2IwdDl3M2RsbWZhZzdqd3lhIn0.tIb4Xrl64Du1_fLhLP575A';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        const searchBar = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            });
        searchBar.on("result", (e) => {
            let data = {};
            data['text'] = e.result.text;
            data['lon'] = e.result.center[0];
            data['lat'] = e.result.center[1];
            let buffer = result;
            if(buffer.length>=10){
                buffer.pop();
            }
            setResult([...buffer,data]);
        })
        map.addControl(
            searchBar
        );
        setMap(map);
    },[]);

    useEffect(()=>{
        console.log(result);
        result.forEach((item,index)=>{
            const marker = new mapboxgl.Marker()
            .setLngLat([item.lon, item.lat])
            .addTo(map);
        })
    },[result])

    useEffect(()=>{
        console.log("has came out")
    })
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("你的浏览器不支持Geolocation API。");
        }
    }
    function showPosition(position) {
        alert("纬度：" + position.coords.latitude + "<br>经度：" + position.coords.longitude);
    }
    return(
        <div>
        <div id="map"></div>
        <Button id="get-location" variant="contained" align="center" onClick={(e)=>getLocation()}>location</Button>
        <DataTable/>
        <Counter/>
        </div>
    );
}
 export default Home;