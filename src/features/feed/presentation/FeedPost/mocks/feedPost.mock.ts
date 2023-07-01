import { FeedPostEntity } from "../../../domain/entities/FeedPost";

export const generateRandomFeedPosts = (quantity: number): FeedPostEntity[] => {
  return Array.from({ length: quantity }, (_, index) => {
    return {
      id: `${index}`,
      title: `Las Praderas`,
      description: `Fotografía de las praderas de la Patagonia Argentina`,
      authorId: `${index}`,
      image: `https://picsum.photos/600/1000/?random=${Math.floor(
        Math.random() * 20
      )}`,
      authorName: `Sartori Joel Nicolas`,
      authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 30
      )}`,
      createdAt: new Date(),
    };
  });
};

export const MOCK_FEED_POST: FeedPostEntity[] = [
  {
    id: "1",
    title: "Las Praderas",
    description: "Fotografía de las praderas de la Patagonia Argentina",
    authorId: "1",
    image: `https://picsum.photos/600/1000/?random=${Math.floor(
      Math.random() * 20
    )}`,
    authorName: "Sartori Joel Nicolas",
    authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 30
    )}`,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Las Montañas",
    description: "Fotografía de las montañas de la Patagonia Argentina",
    authorId: "1",
    image: `https://picsum.photos/600/1000/?random=${Math.floor(
      Math.random() * 20
    )}`,
    authorName: "Sartori Joel Nicolas",
    authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 30
    )}`,
    createdAt: new Date(),
  },
];
