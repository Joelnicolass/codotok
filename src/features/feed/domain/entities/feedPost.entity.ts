export class FeedPost {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public image: string,
    public authorId: string,
    public authorName: string,
    public authorAvatar: string,
    public createdAt: Date
  ) {}
}
