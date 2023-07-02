import {
  FeedDataSource,
  FeedRepository,
} from "../../domain/repositories/feed.repository";

export class FeedRepositoryImpl implements FeedRepository {
  private readonly dataSource: FeedDataSource;

  constructor(dataSource: FeedDataSource) {
    this.dataSource = dataSource;
  }

  async getFeedPosts() {
    return this.dataSource.getFeedPosts();
  }
}
