import { Card, Spacer } from "@nextui-org/react";
import { Box } from "../../../../../common/presentation/components/Box/Box";
import { FaArrowAltCircleUp } from "react-icons/fa";
import AvatarWithName from "../../../../../common/presentation/components/AvatarWithName/AvatarWithName";
import useHover from "../../../../../common/presentation/hooks/useHover";
import { useFeedContext } from "../providers/FeedProvider";
import TitleAndDescription from "./TitleAndDescription";
import SwipeUp from "../animations/SwipeUp";
import { CSS, CSSProperties } from "@nextui-org/react/types/theme";

const Content = () => {
  const { post, actions } = useFeedContext();

  const { hovered, onMouseEnter, onMouseLeave } = useHover();

  return (
    <SwipeUp hovered={hovered}>
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        css={styles.card as CSS}
      >
        <Card.Body css={styles.container}>
          <Box>
            <Box css={styles.titleAndNameWrapper}>
              <FaArrowAltCircleUp />
            </Box>
            <AvatarWithName image={post.authorAvatar} name={post.authorName} />
            <Spacer y={1.5} />
            <TitleAndDescription />
          </Box>
          <Spacer y={1.5} />
          {actions || null}
        </Card.Body>
      </Card>
    </SwipeUp>
  );
};

export default Content;

const styles: Record<string, CSSProperties | CSS> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    bgBlur: "2px",
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "15px 15px 0px 0px",
  },
  titleAndNameWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
