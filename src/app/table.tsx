"use client";

import * as React from "react";
import { default as TableMUI } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Checkbox, Divider, styled } from "@mui/material";

interface RowType {
  id: string;
  name: string;
}

interface PropsType {
  rows: RowType[];
  remove: (id: string) => void;
}

const StyledTableCell = styled(TableCell)(() => ({
  padding: "0 .2em",
}));

export default function Table({ rows, remove }: PropsType) {
  return (
    <TableContainer component={Paper}>
      <TableMUI aria-label="table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell padding="checkbox" component="th" scope="row">
                <Checkbox
                  id="checkbox"
                  name="checkbox"
                  checked={false}
                  onChange={() => {}}
                  inputProps={{
                    "aria-label": "checkbox",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonGroup size="small" aria-label="buttons">
                  <Button>
                    <CheckIcon color="success" />
                  </Button>
                  <Button
                    onClick={() => {
                      remove(row.id);
                    }}
                  >
                    <CloseIcon color="error" />
                  </Button>
                </ButtonGroup>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
}
