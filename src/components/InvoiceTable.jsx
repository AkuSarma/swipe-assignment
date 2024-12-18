import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const InvoiceTable = ({ invoices }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Serial Number</TableCell>
        <TableCell>Customer Name</TableCell>
        <TableCell>Product Name</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Tax</TableCell>
        <TableCell>Total Amount</TableCell>
        <TableCell>Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {invoices.map((invoice, index) => (
        <TableRow key={index}>
          <TableCell>{invoice.serialNumber}</TableCell>
          <TableCell>{invoice.customerName}</TableCell>
          <TableCell>{invoice.productName}</TableCell>
          <TableCell>{invoice.quantity}</TableCell>
          <TableCell>{invoice.tax}</TableCell>
          <TableCell>{invoice.totalAmount}</TableCell>
          <TableCell>{invoice.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default InvoiceTable;
