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
import { Button, ButtonGroup, Checkbox, styled } from "@mui/material";
import { ProductType } from "@/models";

interface TablePropsType {
  products: ProductType[];
  setProducts: React.Dispatch<ProductType[]>;
  remove: (id: string) => void;
}

interface ButtonsPropsType {
  product: ProductType;
  remove: (id: string) => void;
}

const StyledTableCell = styled(TableCell)(() => ({
  padding: "0 .2em",
}));

const StyledTableRowDisabled = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.action.disabled,
}));

const styledCommonInputTable = {
  width: "100%",
  height: "2rem",
  border: "none",
  outline: "none",
  background: "transparent",
};

const styledInputTable = {
  ...styledCommonInputTable,
};

const styledInputTableCheck = {
  ...styledCommonInputTable,
  textDecoration: "line-through",
};

function Buttons({ product, remove }: ButtonsPropsType) {
  return (
    <ButtonGroup size="small" aria-label="buttons">
      <Button variant="text" disabled={!product.edit}>
        <CheckIcon color={product.edit ? "success" : "disabled"} />
      </Button>
      <Button
        variant="text"
        onClick={() => {
          remove(product.id);
        }}
      >
        <CloseIcon color="error" />
      </Button>
    </ButtonGroup>
  );
}

export default function Table({
  products,
  setProducts,
  remove,
}: TablePropsType) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name, id } = event.target;

    if (name === "check") {
      return setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              [name]: !product.check,
            };
          }

          return product;
        })
      );
    }

    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            [name]: value,
            edit: true,
          };
        }

        return product;
      })
    );
  }

  return (
    <TableContainer component={Paper}>
      <TableMUI aria-label="table">
        <TableBody>
          {products.map((product) =>
            product.check ? (
              <StyledTableRowDisabled key={product.id}>
                <StyledTableCell padding="checkbox" component="th" scope="row">
                  <Checkbox
                    id={product.id}
                    name="check"
                    checked={product.check}
                    onChange={onChange}
                    inputProps={{
                      "aria-label": "checkbox",
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <input
                    type="text"
                    id={product.id}
                    name="name"
                    value={product.name}
                    onChange={onChange}
                    style={
                      product.check
                        ? {
                            ...styledInputTable,
                            textDecoration: "line-through",
                          }
                        : styledInputTable
                    }
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Buttons product={product} remove={remove} />
                </StyledTableCell>
              </StyledTableRowDisabled>
            ) : (
              <TableRow key={product.id}>
                <StyledTableCell padding="checkbox" component="th" scope="row">
                  <Checkbox
                    id={product.id}
                    name="check"
                    checked={product.check}
                    onChange={onChange}
                    inputProps={{
                      "aria-label": "checkbox",
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <input
                    type="text"
                    id={product.id}
                    name="name"
                    value={product.name}
                    onChange={onChange}
                    style={
                      product.check ? styledInputTableCheck : styledInputTable
                    }
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Buttons product={product} remove={remove} />
                </StyledTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
}
