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

interface PropsType {
  products: ProductType[];
  setProducts: React.Dispatch<ProductType[]>;
  remove: (id: string) => void;
}

const StyledTableCell = styled(TableCell)(() => ({
  padding: "0 .2em",
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

const StyledTableRowDisabled = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.action.disabled,
}));

export default function Table({ products, setProducts, remove }: PropsType) {
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

  function sortedProducts() {
    const sorted = [...products].sort((a, b) => {
      if (a.check && !b.check) {
        return 1; // Coloca os itens marcados abaixo
      } else if (!a.check && b.check) {
        return -1; // Mantém os itens não marcados acima
      } else {
        return 0; // Mantém a ordem para itens com o mesmo status de marcação
      }
    });

    setProducts(sorted);
  }

  React.useEffect(() => {
    sortedProducts;
  }, [products]);

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
                  <ButtonGroup size="small" aria-label="buttons">
                    <Button disabled={!product.edit}>
                      <CheckIcon color="success" />
                    </Button>
                    <Button
                      onClick={() => {
                        remove(product.id);
                      }}
                    >
                      <CloseIcon color="error" />
                    </Button>
                  </ButtonGroup>
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
                  <ButtonGroup size="small" aria-label="buttons">
                    <Button disabled={!product.edit}>
                      <CheckIcon color="success" />
                    </Button>
                    <Button
                      onClick={() => {
                        remove(product.id);
                      }}
                    >
                      <CloseIcon color="error" />
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
}
