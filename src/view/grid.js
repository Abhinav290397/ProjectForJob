//npm install --save ag-grid-react ag-grid-community

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grids = ({info}) => {
  const columnDefs = [
    { headerName: 'Id', field: 'id',flex: 0.2,sortable: true, filter: true},
    { headerName: 'Title', field: 'title',flex: 1.5,sortable: true, filter: true},
    { headerName: 'Body', field: 'body',flex: 3,sortable: true, filter: true}
  ];

  return ( 
    <div className="ag-theme-alpine" style={{ height: "100vh", width:"100vw" }}>
      <AgGridReact 
        rowData={info} // Use the info prop for the grid data
        columnDefs={columnDefs} // Columns for the grid
        pagination={true}
        paginationPageSize={15}
      />
    </div>
  );
}
export default Grids;

// import { Table } from "antd";

// const Grids = ({info}) => {
//     const columns = [
//         {
//           title: 'Id',
//           dataIndex: 'id', //the value of fields must be same as that of incoming array of obj.
//           key: 'id',
//         },
//         {
//           title: 'Title',
//           dataIndex: 'title',
//           key: 'title',
//         },
//         {
//           title: 'Details',
//           dataIndex: 'body',
//           key: 'body',
//         },
//       ];
      
//     return(
//         <div>
//             <Table columns={columns} dataSource={info}/>
//         </div>
//     )
// }
// export default Grids;