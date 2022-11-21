import { ResponseProvider } from "./Response";
import { FormProviderProps } from "../interfaces/FormInterface";
import React from "react";

export const Providers = ({ children }: FormProviderProps) => {
  return <ResponseProvider>{children}</ResponseProvider>;
};
