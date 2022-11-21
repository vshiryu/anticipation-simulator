import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { FormData } from "../../interfaces/FormInterface";
import { useContext, useState } from "react";
import axios from "axios";
import { baseApi } from "../../constants/api";
import { ResponseContext } from "../../Providers/Response";
import { FormStyled } from "./style";

export const Form = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>();
  const { responseData, setResponseData } = useContext(ResponseContext);

  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .min(1000)
      .required()
      .typeError("Insira um número válido"),
    installments: yup
      .number()
      .min(0)
      .max(12)
      .required()
      .typeError("Insira um número válido"),
    mdr: yup
      .number()
      .required()
      .typeError("Insira um número válido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    setFormData(formData);

    await axios
      .post(`${baseApi}`, formData)
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Informe o valor da venda</label>
        <input {...register("amount")}></input>
      </div>
      <div>
        <label>Em quantas parcelas</label>
        <input {...register("installments")}></input>
      </div>
      <div>
        <label>Informe o percentual de MDR</label>
        <input {...register("mdr")}></input>
      </div>
      <button type="submit">Enviar</button>
    </FormStyled>
  );
};
