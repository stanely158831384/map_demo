import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 
import LocationButton from './LocationPermission'



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'text',
    headerName: 'NAME',
    width: 90,
  },
  { field: 'lon', headerName: 'LONGTITUDE', width: 130 },
  { field: 'lat', headerName: 'LATITUDE', width: 130 },
];


export default function DataTable() {
  const dispatch = useDispatch();
  const td = useSelector((state) => state.td);
  const [selectionModel, setSelectionModel] = useState([]);;

  const onDelete = () => {
    let selected = [...td.filter((r) => selectionModel.includes(r.id))];
    selected.forEach((item,index)=>{
      item.macker.remove();
    });
    let notSelected = [...td.filter((r) => !selectionModel.includes(r.id))];
    dispatch({type:"customData",value:notSelected});
  };
  const onReset = () => {
  };

  return (
    <div style={{ height: 400, width: '50%',marginLeft:'20px' }}>
      <div style={{marginBottom:'10px'}}>
      <Button variant="contained" color="primary" onClick={onDelete} style={{display:'inline', marginRight:'5px'}}>
        Delete selected rows
      </Button>
      <LocationButton />
      </div>
      <DataGrid
        rows={td}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onSelectionModelChange={setSelectionModel}
        selectionModel={selectionModel}
        checkboxSelection
      />
    </div>
  );
}
