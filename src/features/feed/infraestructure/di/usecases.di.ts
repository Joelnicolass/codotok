import { GetFeedPostsUseCase } from "../../domain/usecases/getFeedPosts.usecase";
import { LocalDataSource } from "../datasources/local.datasource";
import { FeedRepositoryImpl } from "../repositories/feed.repository.impl";

class FeedUseCases {
  private readonly datasource = new LocalDataSource();
  private readonly repository = new FeedRepositoryImpl(this.datasource);

  public readonly getFeedPosts = new GetFeedPostsUseCase(this.repository);
}

export const feedUseCases = new FeedUseCases();
