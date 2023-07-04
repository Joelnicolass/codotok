import { Button, Input, Spacer, Text } from "@nextui-org/react";
import useSignForms from "../../hooks/useSignForms";

const SignInForm = () => {
  const { form, handleChange, loginActions } = useSignForms();

  return (
    <form style={styles.form} onSubmit={loginActions.handleSubmit}>
      <Input
        name="email"
        type="email"
        aria-label="Correo electrónico"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        disabled={loginActions.loadingLogin}
      />
      <Spacer y={0.5} />
      <Input
        name="password"
        type="password"
        aria-label="Contraseña"
        placeholder="Contraseña"
        onChange={handleChange}
        value={form.password}
        disabled={loginActions.loadingLogin}
      />
      <Spacer y={0.5} />
      <Button type="submit" disabled={loginActions.loadingLogin}>
        <Text>Iniciar sesión</Text>
      </Button>
    </form>
  );
};

export default SignInForm;

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
