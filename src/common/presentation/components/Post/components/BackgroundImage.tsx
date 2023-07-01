import { CSSProperties } from "@nextui-org/react/types/theme";

type Props = {
  image: string;
  alt: string;
};

const BackgroundImage = ({ image, alt }: Props) => {
  return <img style={styles.image} src={image} alt={alt} />;
};

export default BackgroundImage;

const styles: Record<string, CSSProperties> = {
  image: {
    position: "absolute",
    aspectRatio: "9/16",
    objectFit: "cover",
  },
};
