import React from "react";
import Post from "../../../../common/presentation/components/Post/Post";
import { Spacer } from "@nextui-org/react";
import Content from "./components/Content";
import { FeedPost } from "../../domain/entities/feedPost.entity";
import { Provider } from "./providers/FeedProvider";
import { useAppSelector } from "../../../../common/presentation/hooks/useRedux";
import { motion } from "framer-motion";
import Hide from "../../../../common/presentation/animations/Fade";

type Props = {
  post: FeedPost;
  actions?: React.ReactNode;
};

const FeedPostComponent = ({ post, actions }: Props) => {
  const inmersionMode = useAppSelector((state) => state.modes.inmersion);

  return (
    <Provider
      value={{
        post,
        actions,
      }}
    >
      <Post>
        <Post.BackgroundImage
          image={post.image}
          alt={`Photo - ${post.title}`}
        />
        {
          <Hide active={inmersionMode}>
            <Post.Content>
              <Spacer />
              <Post.Content.Footer>
                <Content />
              </Post.Content.Footer>
            </Post.Content>
          </Hide>
        }
      </Post>
    </Provider>
  );
};

export default FeedPostComponent;
