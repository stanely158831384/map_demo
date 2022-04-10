import React, { useState, useRef } from 'react';

import Button from '@mui/material/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import DataTable from './Table'
import Counter from './Counter';
import { useSelector, useDispatch } from "react-redux";


function Map(){
    // const [result,setResult] = useState([]);
    const [map, setMap] = useState({});
    // const resultRef = useRef(result);
    const dispatch = useDispatch();
    const td = useSelector((state) => state.td);


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
            console.log(e);

            let data = {};
            data['id'] = e.result.id;
            data['text'] = e.result.text;
            data['lon'] = e.result.center[0];
            data['lat'] = e.result.center[1];
            // console.log("here is buffer before: ");
            // console.log(...resultRef.current);
            let buffer = [...td,data];
            // console.log("here is buffer after: ");
            // console.log(buffer);

            if(buffer.length>=10){
                buffer.pop();
            }
            // setResult(buffer);
            dispatch({type: "addData",value:data});
        })
        
        map.addControl(
            searchBar
        );
        setMap(map);
    },[]);

    useEffect(()=>{
        // resultRef.current = result;
        console.log("useeffect: ");
        console.log(td);
        td.forEach((item,index)=>{
            const marker = new mapboxgl.Marker()
            .setLngLat([item.lon, item.lat])
            .addTo(map);
        })
    },[td])

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
        </div>
    )
}


export default Map;