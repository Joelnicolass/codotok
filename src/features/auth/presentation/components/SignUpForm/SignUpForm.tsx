import { Button, Input, Spacer, Text } from "@nextui-org/react";
import useSignForms from "../../hooks/useSignForms";

const SignUpForm = () => {
  const { form, handleChange, registerActions } = useSignForms();

  return (
    <form style={styles.form} onSubmit={registerActions.handleRegister}>
      <Input
        name="email"
        type="email"
        aria-label="Correo electrónico"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        disabled={registerActions.loadingRegister}
      />
      <Spacer y={0.5} />
      <Input
        name="password"
        type="password"
        aria-label="Contraseña"
        placeholder="Contraseña"
        onChange={handleChange}
        value={form.password}
        disabled={registerActions.loadingRegister}
      />
      <Spacer y={0.5} />
      <Button type="submit" disabled={registerActions.loadingRegister}>
        <Text>Registrarse!</Text>
      </Button>
    </form>
  );
};

export default SignUpForm;

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
