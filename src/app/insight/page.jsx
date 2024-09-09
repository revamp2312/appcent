
import ArticlesSection from "@/components/InsightPage/ArticlesSection";
import HeroSection from "@/components/InsightPage/HeroSection";
import qs from "qs";


export async function getBlogData() {
  try {
    const url = new URL("/api/blogs/?populate=*", "http://localhost:1337");
 
    const res = await fetch(url.href);
    const repo = await res.json();
    return repo;
  } catch (err) {
    console.log(err);
  }
}

export async function getCategories() {
  try {
    const res = await fetch("http://localhost:1337/api/categories");
    const repo = await res.json();
    return repo;
  } catch (err) {
    console.log(err);
  }
}
const Insight = async () => {
//  const squery=searchParams?.query ?? ""
  const blogData = await getBlogData();
  const categories = await getCategories();
  return (
    <>
      <HeroSection />
      {/* <ArticlesSection blogData={blogData} categories={categories} /> */}
    </>
  );
};

export default Insight;
