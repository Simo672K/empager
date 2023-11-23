interface DGSettings {
  selectAll?:boolean
}

interface DGHeader {
  field: string; 
  headerName: string; 
  sortable?: boolean;
}


interface DGProps {
  header: Array<DGHeader>;
  rowsContent: Array<any>;
}


export type {DGHeader, DGProps, DGSettings}