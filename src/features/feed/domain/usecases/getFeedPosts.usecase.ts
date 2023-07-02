import { FeedPost } from "../entities/feedPost.entity";
import { FeedRepository } from "../repositories/feed.repository";

export class GetFeedPostsUseCase {
  private readonly repository: FeedRepository;

  constructor(repository: FeedRepository) {
    this.repository = repository;
  }

  async execute(): Promise<FeedPost[]> {
    return this.repository.getFeedPosts();
  }
}
