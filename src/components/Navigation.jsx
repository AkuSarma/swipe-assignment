import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const Navigation = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Invoices" />
      <Tab label="Products" />
      <Tab label="Customers" />
    </Tabs>
  );
};

export default Navigation;
