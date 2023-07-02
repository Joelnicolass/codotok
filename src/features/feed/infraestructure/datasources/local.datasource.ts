import { getRandomUsers } from "../../../../common/infraestructure/services/randomUser/getRandomUser.service";
import { FeedPost } from "../../domain/entities/feedPost.entity";
import { FeedDataSource } from "../../domain/repositories/feed.repository";

export class LocalDataSource implements FeedDataSource {
  async getFeedPosts(): Promise<FeedPost[]> {
    const titles = [
      {
        region: "South Island",
      },
      {
        region: "Västra Götalands län",
      },
      {
        region: "Kayseri",
      },
      {
        region: "Agder",
      },
      {
        region: "Innlandet",
      },
      {
        region: "Noord Holland",
      },
      {
        region: "Tambov Oblast",
      },
      {
        region: "Sumy oblast",
      },
      {
        region: "Dolnośląskie",
      },
      {
        region: "Novgorod Oblast",
      },
      {
        region: "Poitou-Charentes",
      },
      {
        region: "Bali",
      },
      {
        region: "South Sulawesi",
      },
      {
        region: "Hà Nội",
      },
      {
        region: "Connacht",
      },
      {
        region: "Khyber Pakhtoonkhwa",
      },
      {
        region: "Piemonte",
      },
      {
        region: "Mersin",
      },
      {
        region: "Saarland",
      },
      {
        region: "Central Kalimantan",
      },
      {
        region: "Rheinland-Pfalz",
      },
      {
        region: "Veracruz",
      },
      {
        region: "California",
      },
      {
        region: "West-Vlaanderen",
      },
      {
        region: "North Region",
      },
      {
        region: "Ankara",
      },
      {
        region: "Daman and Diu",
      },
      {
        region: "Centre",
      },
      {
        region: "Caquetá",
      },
      {
        region: "Eastern Cape",
      },
      {
        region: "Aceh",
      },
      {
        region: "Northern Territory",
      },
      {
        region: "Moscow Oblast",
      },
      {
        region: "Kano",
      },
      {
        region: "Northern Mindanao",
      },
      {
        region: "Chhattisgarh",
      },
      {
        region: "Rio Grande do Sul",
      },
      {
        region: "Bicol Region",
      },
      {
        region: "Saskatchewan",
      },
      {
        region: "Norte de Santander",
      },
      {
        region: "Ilocos Region",
      },
      {
        region: "Bursa",
      },
      {
        region: "Jönköpings län",
      },
      {
        region: "Tarapacá",
      },
      {
        region: "Dadra and Nagar Haveli",
      },
      {
        region: "La Libertad",
      },
      {
        region: "Limburg",
      },
      {
        region: "Baden Württemberg",
      },
      {
        region: "Alajuela",
      },
      {
        region: "Bihar",
      },
      {
        region: "Kaluga Oblast",
      },
      {
        region: "Odessa oblast",
      },
      {
        region: "Borno",
      },
      {
        region: "Utrecht",
      },
      {
        region: "Melilla",
      },
      {
        region: "Zhōngnán",
      },
      {
        region: "Konya",
      },
      {
        region: "Xīběi",
      },
      {
        region: "Gangwon",
      },
      {
        region: "Benue",
      },
      {
        region: "Aquitaine",
      },
      {
        region: "Chernivtsi oblast",
      },
      {
        region: "Melilla",
      },
      {
        region: "Lviv oblast",
      },
      {
        region: "Sinaloa",
      },
      {
        region: "North Island",
      },
      {
        region: "Azad Kashmir",
      },
      {
        region: "Australian Capital Territory",
      },
      {
        region: "Małopolskie",
      },
      {
        region: "Sachsen",
      },
      {
        region: "Tiền Giang",
      },
      {
        region: "Rivers",
      },
      {
        region: "West Region",
      },
      {
        region: "Luik",
      },
      {
        region: "Huádōng",
      },
      {
        region: "North Region",
      },
      {
        region: "Arica y Parinacota",
      },
      {
        region: "Saarland",
      },
      {
        region: "Vorarlberg",
      },
      {
        region: "Vorarlberg",
      },
      {
        region: "Tomsk Oblast",
      },
      {
        region: "Newfoundland and Labrador",
      },
      {
        region: "Sląskie",
      },
      {
        region: "Montana",
      },
      {
        region: "Mecklenburg-Vorpommern",
      },
      {
        region: "Jharkhand",
      },
      {
        region: "Guanacaste",
      },
      {
        region: "Namen",
      },
      {
        region: "Guainía",
      },
      {
        region: "Georgia",
      },
      {
        region: "North Jeolla",
      },
      {
        region: "Bahia",
      },
      {
        region: "North Island",
      },
      {
        region: "Trentino-Alto Adige",
      },
      {
        region: "Zhytomyr oblast",
      },
      {
        region: "Antalya",
      },
      {
        region: "Sonora",
      },
      {
        region: "Arunachal Pradesh",
      },
      {
        region: "Marche",
      },
      {
        region: "Atlántico",
      },
    ];

    const randomUsers = await getRandomUsers(10);
    const feedPosts: FeedPost[] = randomUsers.map((user) => {
      return {
        id: window.crypto.randomUUID(),
        title: titles[Math.floor(Math.random() * titles.length)].region,
        description: `Fotografia de ${
          titles[Math.floor(Math.random() * titles.length)].region
        }`,
        image: `https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/600/1000`,
        authorAvatar: user.picture.thumbnail,
        authorName: `${user.name.first} ${user.name.last}`,
        authorId: user.login.uuid,
        createdAt: new Date(),
      };
    });

    return feedPosts;
  }
}
