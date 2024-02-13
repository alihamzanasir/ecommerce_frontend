import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs>
        <Tab
          label="Home"
          sx={{ color: "White", fontSize: "18px", fontWeight: "500" }}
        />
        <Tab
          label="About"
          sx={{ color: "White", fontSize: "18px", fontWeight: "500" }}
        />
        <Tab
          label="Contact Us"
          sx={{ color: "White", fontSize: "18px", fontWeight: "500" }}
        />
      </Tabs>
    </Box>
  );
}
