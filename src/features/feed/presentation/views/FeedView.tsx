import VerticalSlider from "../../../../common/presentation/components/VerticalSlider/VerticalSlider";
import FeedPost from "../FeedPost/FeedPost";
import Actions from "../FeedPost/components/Actions";
import {
  MOCK_FEED_POST,
  generateRandomFeedPosts,
} from "../FeedPost/mocks/feedPost.mock";

const posts = generateRandomFeedPosts(20);

const FeedView = () => {
  return (
    <VerticalSlider>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} Actions={<Actions />} />
      ))}
    </VerticalSlider>
  );
};

export default FeedView;
