import { CSSProperties } from "@nextui-org/react/types/theme";

type Props = {
  image: string;
  alt: string;
  foreground?: boolean;
};

const BackgroundImage = ({ image, alt, foreground = false }: Props) => {
  return (
    <img
      style={{
        ...styles.image,
        zIndex: foreground ? 9999 : 0,
      }}
      src={image}
      alt={alt}
    />
  );
};

export default BackgroundImage;

const styles: Record<string, CSSProperties> = {
  image: {
    position: "absolute",
    aspectRatio: "9/16",
    objectFit: "cover",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
