import VerticalSlider from "../../../../common/presentation/components/VerticalSlider/VerticalSlider";
import FeedPostComponent from "../FeedPost/FeedPost";
import Actions from "../../../../common/presentation/components/Actions/Actions";
import useFeedView from "./useFeedView";
import { FaCoffee, FaHeart } from "react-icons/fa";
import { Spacer } from "@nextui-org/react";

const FeedView = () => {
  const { posts, ref, saveRef } = useFeedView();

  return (
    <VerticalSlider>
      {posts?.map((post, i) => (
        <div key={post.id} ref={saveRef(i) ? ref : null}>
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
        </div>
      ))}
    </VerticalSlider>
  );
};

export default FeedView;
