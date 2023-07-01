import React, { createContext } from "react";
import Post from "../../../../common/presentation/components/Post/Post";
import { Spacer } from "@nextui-org/react";
import Content from "./components/Content";
import { FeedPostEntity } from "../../domain/entities/FeedPost";
import { Provider } from "./providers/FeedProvider";

type Props = {
  post: FeedPostEntity;
  Actions: any;
};

const FeedPost = ({ post, Actions }: Props) => {
  return (
    <Provider
      value={{
        post,
        Actions,
      }}
    >
      <Post>
        <Post.BackgroundImage
          image={post.image}
          alt={`Photo - ${post.title}`}
        />
        <Post.Content>
          <Spacer />
          <Post.Content.Footer>
            <Content />
          </Post.Content.Footer>
        </Post.Content>
      </Post>
    </Provider>
  );
};

export default FeedPost;
