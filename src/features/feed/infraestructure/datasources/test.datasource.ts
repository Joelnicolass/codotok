import { FeedPost } from "../../domain/entities/feedPost.entity";
import { FeedDataSource } from "../../domain/repositories/feed.repository";
import { MOCK_FEED_POST } from "../mocks/feedPost.mock";

export class TestDataSource implements FeedDataSource {
  async getFeedPosts(): Promise<FeedPost[]> {
    return MOCK_FEED_POST;
  }
}
