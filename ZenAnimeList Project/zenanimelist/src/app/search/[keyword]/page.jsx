import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const decodedKeyword = decodeURI(keyword)

  // narik api dari api-libs.js dengan parameter (resources, query)
  const fetchSearch = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  const searchAnime = fetchSearch

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}....`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
