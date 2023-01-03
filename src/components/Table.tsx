import { FormObj } from "./Main";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Card } from "@mui/material";

export type SetFormObj = (formObj: FormObj | null) => void

export type SetResult = (result: FormObj[] | ((value: FormObj[]) => FormObj[])) => void

type TableProps = {
    result: FormObj[],
    setFormObj: SetFormObj,
    setResult: SetResult
}

function Table(props: TableProps) {
    const { result, setResult, setFormObj } = props
    const [page, setPage] = useState(5)

    const deleteRow = (id: any) => {
        setResult(result.filter((v, index) => v.id !== id))
        console.log(id)
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'title', headerName: 'task', width: 130 },
        { field: 'desc', headerName: 'description', width: 130 },
        {
            field: 'action',
            type: 'actions',
            width: 250,
            headerName: 'Action',
            renderCell: (params: any) => {
                return (
                    <Box>
                        <Button variant="contained" color="success" onClick={() => setFormObj(params.row)}>Edit</Button>
                        <Button variant="contained" color="error" onClick={() => deleteRow(params.id)}>Delete</Button>
                    </Box>
                )
            },
        },
    ];

    return (
        <Card sx={{ height: 400, width: '100%', mt: 6 }}>
            <DataGrid
                rows={result}
                columns={columns}
                pageSize={page}
                rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
                checkboxSelection
                onPageSizeChange={(page: number) => setPage(page)}
            />
        </Card>
    )
}

export default Table;