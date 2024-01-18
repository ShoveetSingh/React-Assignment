import React, { useEffect, useState } from 'react';
//import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Page2 from './Page2';

interface props {
  id: number;
  title: string;
  body:string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<props[]>([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          const json:props[] = await response.json();
          setData(json);
        } else {
          console.error('Error');
        }
      } catch (error:any) {
        console.error(error.message);
      }
    };

    
    fetchDataFromAPI();
  }, []); 

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
     <br/> 
      <Page2/>
    </div>
  );

};

export default Page;
