import React, { createContext, useState } from "react";
import { Response, ResponseProviderData } from "../../interfaces/FormInterface";

import { FormProviderProps } from "../../interfaces/FormInterface";

export const ResponseContext = createContext<ResponseProviderData>(
  {} as ResponseProviderData
);

export const ResponseProvider = ({ children }: FormProviderProps) => {
  const [responseData, setResponseData] = useState<Response>({
    1: 0,
    15: 0,
    30: 0,
    90: 0,
  } as Response);

  return (
    <ResponseContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </ResponseContext.Provider>
  );
};
