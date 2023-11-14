import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Lista de compras",
  description: "Lista de compras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body
        style={{
          background: "#444444",
          overflow: "hidden",
        }}
      >
        <ThemeRegistry>
          <Box
            component="main"
            sx={{
              m: "0 auto",
              width: "100%",
              maxWidth: "60rem",
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
