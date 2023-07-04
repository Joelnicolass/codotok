import VerticalSlider from "../../../../common/presentation/components/VerticalSlider/VerticalSlider";
import FeedPostComponent from "../components/FeedPost/FeedPost";
import Actions from "../../../../common/presentation/components/Actions/Actions";
import useFeedView from "../hooks/useFeedView";
import { FaCoffee, FaHeart } from "react-icons/fa";
import { Loading, Spacer } from "@nextui-org/react";
import { Logger } from "../../../../common/utils/logger";
import InmersionModeAction from "../../../../common/presentation/components/InmersionModeAction/InmersionModeAction";
import Logo from "../../../../common/presentation/components/Logo/Logo";

const FeedView = () => {
  const { posts, ref, saveRef, isLoadingPosts } = useFeedView();

  if (isLoadingPosts) {
    return (
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Logo />
        <Spacer y={1} />
        <Loading color="primary" size="lg" />
      </main>
    );
  }

  return (
    <>
      <div style={styles.inmersionModeAction}>
        <InmersionModeAction />
      </div>
      <VerticalSlider>
        {posts?.map((post, i) => (
          <article key={post.id} ref={saveRef(i) ? ref : null}>
            <FeedPostComponent
              post={post}
              actions={
                <Actions>
                  <Actions.Action>
                    <FaHeart />
                  </Actions.Action>
                  <Spacer x={0.5} />
                  <Actions.Action>
                    <FaCoffee />
                  </Actions.Action>
                </Actions>
              }
            />
          </article>
        ))}
      </VerticalSlider>
    </>
  );
};

export default FeedView;

const styles: Record<string, React.CSSProperties> = {
  inmersionModeAction: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    padding: "1rem",
  },
};
