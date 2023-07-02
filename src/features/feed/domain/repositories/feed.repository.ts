// repository for feed

import { FeedPost } from "../entities/feedPost.entity";

export interface FeedRepository {
  getFeedPosts(): Promise<FeedPost[]>;
}

export interface FeedDataSource {
  getFeedPosts(): Promise<FeedPost[]>;
}
