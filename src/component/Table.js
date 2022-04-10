import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'text',
    headerName: 'NAME',
    width: 90,
  },
  { field: 'lon', headerName: 'LONGTITUDE', width: 130 },
  { field: 'lat', headerName: 'LATITUDE', width: 130 },
  
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


export default function DataTable() {
  const dispatch = useDispatch();
  const td = useSelector((state) => state.td);
  const [selectionModel, setSelectionModel] = useState([]);;

  const onDelete = () => {
    let selected = [...td.filter((r) => !selectionModel.includes(r.id))];
    dispatch({type:"customData",value:selected});
  };
  const onReset = () => {
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{}}>
      <Button variant="contained" color="primary" onClick={onDelete}>
        Delete selected rows
      </Button>
      <Button variant="contained" color="primary" onClick={onReset}>
        Reset selected rows
      </Button>
      </div>
      
      <DataGrid
        rows={td}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={setSelectionModel}
        selectionModel={selectionModel}
        checkboxSelection

      />
    </div>
  );
}
