import React from "react";
import Header from "./Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { mockDataInvoices } from "../data/data";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography
          color={colors.greenAccent[500]}
          className="h-full flex items-center"
        >
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <div>
      <Header
        heading="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box>
        <Box
          sx={{
            height: "63vh",
            width: "100%",
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },

            "& .MuiDataGrid-toolbarContainer .MuiButtonBase-root ": {
              color: colors.primary[100],
            },
            "& .css-h1ja60-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,": {
              color: colors.blueAccent[500],
            },
          }}
          className="mt-4"
        >
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            checkboxSelection
          />
        </Box>
      </Box>
    </div>
  );
};

export default Invoices;
