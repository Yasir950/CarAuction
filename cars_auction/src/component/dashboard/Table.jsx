import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function DataTable({height,rowData,colData}) {
  return (
    <div style={{ height: height, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={colData}
        initialState={{
          columns: {
            columnVisibilityModel: {
              // Hide columns status and traderName, the other columns will remain visible
              id: false,
            },
          },
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        pageSizeOptions={[10, 20]}
      />
    </div>
  );
}
