"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Checkbox } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name: string, protein: number) {
  return { name, protein };
}

const rows = [
  createData("Frozen yoghurt", 4.0),
  createData("Ice cream sandwich", 4.3),
  createData("Eclair", 6.0),
  createData("Cupcake", 4.3),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
  createData("Gingerbread", 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell padding="checkbox" component="th" scope="row">
                <Checkbox
                  color="primary"
                  checked={false}
                  onChange={() => {}}
                  inputProps={{
                    "aria-label": "select",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <DeleteForeverIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
