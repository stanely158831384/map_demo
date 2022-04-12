import * as React from 'react';
import Button from '@mui/material/Button';

function LocationPermission(){

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("your browswer doesn't support Geolocation API。");
        }
    }
    function showPosition(position) {
        alert("latitude：" + position.coords.latitude + "<br>longtitude：" + position.coords.longitude);
    }
    return(
        <div style={{display:'inline'}}>
            <Button id="get-location" variant="contained" align="center" onClick={(e)=>getLocation()}>Achieve Location Permission</Button>
        </div>
    );
}

export default LocationPermission;