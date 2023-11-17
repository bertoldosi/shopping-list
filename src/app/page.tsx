"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Box, Button, Stack } from "@mui/material";
import Table from "./table";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "@/models";

export default function HomePage() {
  const [searchValue, setSeachValue] = React.useState("");
  const [products, setProducts] = React.useState<ProductType[]>([]);

  function onChangeSeach(value: string) {
    setSeachValue(value);
  }

  function add(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    if (searchValue) {
      setProducts((prevProducts) => [
        {
          id: uuidv4(),
          name: searchValue,
          check: false,
          edit: false,
        },
        ...prevProducts,
      ]);
    } else {
      alert("Digite o nome do produto!");
    }

    setSeachValue("");
  }

  function remove(id: string) {
    if (window.confirm("Tem certeza que deseja deletar este item?")) {
      const filterItens = products.filter((product) => product.id !== id);
      setProducts(filterItens);
    }
  }

  const sortedProducts = React.useMemo(() => {
    return [...products].sort((a, b) => {
      if (a.check && !b.check) {
        return 1; // Coloca os itens marcados abaixo
      } else if (!a.check && b.check) {
        return -1; // Mantém os itens não marcados acima
      } else {
        return 0; // Mantém a ordem para itens com o mesmo status de marcação
      }
    });
  }, [products]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        p: ".5rem",
      }}
    >
      <Paper
        component="form"
        sx={{
          display: "flex",
          justifySelf: "center",
          width: "100%",
          p: 1,
          mb: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ex: 10 kg de arroz"
          inputProps={{ "aria-label": "search product name" }}
          value={searchValue}
          onChange={(event) => {
            onChangeSeach(event.target.value);
          }}
        />
        <Divider orientation="vertical" />
        <Stack direction="row" spacing={2}>
          <Button
            size="small"
            onClick={(event) => {
              add(event);
            }}
            color="success"
            type="submit"
          >
            Salvar
          </Button>
        </Stack>
      </Paper>
      <Table
        products={sortedProducts}
        setProducts={setProducts}
        remove={remove}
      />
    </Box>
  );
}
