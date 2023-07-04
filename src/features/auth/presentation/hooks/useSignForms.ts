import { FormElement } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr/mutation";
import { authUseCases } from "../../infraestructure/di/usecases.di";
import { useAppDispatch } from "../../../../common/presentation/hooks/useRedux";
import { login } from "../../../../common/presentation/providers/redux/slices/auth/auth.thunks";

interface Form {
  email: string;
  password: string;
}

const useSignForms = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  const {
    data: userLogged,
    trigger: triggerLogin,
    error: errorLogin,
    isMutating: loadingRegister,
  } = useSWR("loginWithEmailAndPassword", async () => {
    if (!form.email || !form.password) throw new Error("Campos vacios");

    const response = await authUseCases.login.execute(
      form.email,
      form.password
    );

    if (!response)
      throw new Error("Error inesperado durante el inicio de sesión");

    dispatch(
      login({
        token: response.token!,
        user: response.user!,
      })
    );

    return response;
  });

  const {
    data: userRegistered,
    trigger: triggerRegister,
    error: errorRegister,
    isMutating: loadingLogin,
  } = useSWR("registerWithEmailAndPassword", async () => {
    if (!form.email || !form.password) throw new Error("Campos vacios");

    const response = await authUseCases.register.execute(
      form.email,
      form.password
    );

    if (!response) throw new Error("Error inesperado durante el registro");

    dispatch(
      login({
        token: response.token!,
        user: response.user!,
      })
    );

    return response;
  });

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email || !form.password) return;

    triggerLogin();
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email || !form.password) return;

    triggerRegister();
  };

  const loginActions = {
    handleSubmit,
    userLogged,
    loadingLogin,
    errorLogin,
  };

  const registerActions = {
    handleRegister,
    userRegistered,
    loadingRegister,
    errorRegister,
  };

  return {
    form,
    handleChange,
    loginActions,
    registerActions,
  };
};

export default useSignForms;
