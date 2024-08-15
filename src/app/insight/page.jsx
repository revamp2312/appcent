import ArticlesSection from "@/components/InsightPage/ArticlesSection";
import HeroSection from "@/components/InsightPage/HeroSection";

export async function getBlogData() {
  try {
    const res = await fetch("http://localhost:1337/api/blogs/?populate=*");
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
  const blogData = await getBlogData();
  const categories = await getCategories()
  return (
    <>
      <HeroSection />
      <ArticlesSection
        blogData={blogData}
        categories={categories}
      />
    </>
  );
};

export default Insight;
