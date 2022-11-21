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

export const Form = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>();
  const { responseData, setResponseData } = useContext(ResponseContext);

  const formSchema = yup.object().shape({
    amount: yup.number().required(),
    installments: yup.number().required(),
    mdr: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData: FormData) => {
    setFormData(formData);

    axios
      .post(`${baseApi}`, formData)
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <input type="submit" />
    </form>
  );
};
