import useSWR from "swr";
import { feedUseCases } from "../../infraestructure/di/usecases.di";
import { useEffect, useState } from "react";
import { FeedPost } from "../../domain/entities/feedPost.entity";
import { useInView } from "react-intersection-observer";
import { NUMBER_BEFORE_LOADING_MORE_POSTS } from "../FeedPost/constants";

const useFeedView = () => {
  const [posts, setPosts] = useState<FeedPost[]>([]);

  const {
    error: errorFetchingPosts,
    isLoading: isLoadingPosts,
    mutate: mutatePosts,
  } = useSWR(
    "getFeedPosts",
    () =>
      feedUseCases.getFeedPosts.execute().then((response) => {
        setPosts([...posts, ...response]);
        return response;
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      mutatePosts();
      ref(null);
    }
  }, [inView, ref]);

  const saveRef = (index: number) => {
    return index === posts.length - NUMBER_BEFORE_LOADING_MORE_POSTS;
  };

  return {
    posts,
    errorFetchingPosts,
    isLoadingPosts,
    saveRef,
    ref,
  };
};

export default useFeedView;
