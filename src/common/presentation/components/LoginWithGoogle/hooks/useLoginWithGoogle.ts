import useSWR from "swr/mutation";
import { authUseCases } from "../../../../../features/auth/infraestructure/di/usecases.di";
import { useAppDispatch } from "../../../hooks/useRedux";
import { loginGoogle } from "../../../providers/redux/slices/auth/auth.thunks";

const useLoginWithGoogle = () => {
  const dispatch = useAppDispatch();

  const {
    data: auth,
    isMutating: isLoading,
    trigger,
  } = useSWR("loginWithGoogle", async () => {
    try {
      const auth = await authUseCases.loginWithGoogle.execute();

      if (!auth) throw new Error("Error al iniciar sesión con Google");

      dispatch(
        loginGoogle({
          token: auth.token!,
          user: auth.user!,
        })
      );
    } catch (error) {
      throw new Error(error as string);
    }
  });

  return {
    auth,
    isLoading,
    trigger,
  };
};

export default useLoginWithGoogle;
