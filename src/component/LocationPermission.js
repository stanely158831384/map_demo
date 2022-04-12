import * as React from 'react';
import Button from '@mui/material/Button';

function LocationPermission(){

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
        <div style={{display:'inline'}}>
            <Button id="get-location" variant="contained" align="center" onClick={(e)=>getLocation()}>location</Button>
        </div>
    );
}

export default LocationPermission;