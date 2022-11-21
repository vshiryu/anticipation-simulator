import { ReactNode } from "react";

export interface FormData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

export interface FormProviderProps {
  children: ReactNode;
}

export interface ResponseProviderData {
  responseData: Response;
  setResponseData: (data: Response) => void;
}

export interface Response {
  1: number;
  15: number;
  30: number;
  90: number;
}
