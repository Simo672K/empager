interface DGHeader {
  field: string; 
  headerName: string; 
  sortable?: boolean;
}


interface DGProps {
  header: Array<DGHeader>;
  rowsContent: Array<object>;
}

export type {DGHeader, DGProps}