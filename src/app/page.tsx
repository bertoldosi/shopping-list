"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Box, Button, Stack } from "@mui/material";
import Table from "./table";
import { v4 as uuidv4 } from "uuid";

interface RowType {
  id: string;
  name: string;
}

export default function HomePage() {
  const [searchValue, setSeachValue] = React.useState("");
  const [rows, setRows] = React.useState<RowType[]>([]);

  function onChangeSeach(value: string) {
    setSeachValue(value);
  }

  function add() {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: uuidv4(),
        name: searchValue,
      },
    ]);

    setSeachValue("");
  }

  function remove(id: string) {
    const filterItens = rows.filter((product) => product.id !== id);
    setRows(filterItens);
  }

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
          placeholder="Nome do produto"
          inputProps={{ "aria-label": "search product name" }}
          value={searchValue}
          onChange={(event) => {
            onChangeSeach(event.target.value);
          }}
        />
        <Divider orientation="vertical" />
        <Stack direction="row" spacing={2}>
          <Button size="small" onClick={add} color="success">
            Salvar
          </Button>
        </Stack>
      </Paper>
      <Table rows={rows} remove={remove} />
    </Box>
  );
}
