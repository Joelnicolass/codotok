import { createContext, useContext } from "react";
import { FeedPost } from "../../../../domain/entities/feedPost.entity";

interface FeedPostContext {
  post: FeedPost;
  actions: any;
}

const FeedContext = createContext({} as FeedPostContext);
export const { Provider } = FeedContext;

export const useFeedContext = () => {
  const context = useContext(FeedContext);
  if (context === undefined) {
    throw new Error("useFeedContext must be used within a FeedContext");
  }
  return context;
};
