import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Stack } from "@mui/material";
import Table from "./table";

export default function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
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
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="small" endIcon={<AddIcon />}>
            Adicionar
          </Button>
        </Stack>
      </Paper>

      <Table />
    </Box>
  );
}
