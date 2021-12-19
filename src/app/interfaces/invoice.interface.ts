import { client } from "./client.interface";
import { company } from "./company.interface";
import { descriptions } from "./descriptions.interface";

export interface invoice {
   
    id?: number;
    invoiceNoLabel?: string;
    invoiceDateLabel?: string;
    invoiceDueDateLabel?: string;
    subtotalLabel ?: string;
    totalLabel?: string;
    taxLabel?: string;
    discountLabel?: string;

    invoiceNo?: number;
    invoiceDate?: Date;
    invoiceDueDate?: Date;
    logo?: string;

    notes?: string;
    subtotal?: string;
    tax?: string;
    discount?: string;
    total?: string;
    company? : company ;
    client?: client;
    descriptions?: descriptions;
  }