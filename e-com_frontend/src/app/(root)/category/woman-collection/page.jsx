import Container from "@/components/common/Container";
import ItemCard from "@/components/common/ItemCard";

async function getAllItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/item/all`, { cache: "no-store" });
  return res.json();
}

const page = async () => {
  const { data } = await getAllItems();

  return (
    <Container>
      <div className="bg-gray-100 rounded-[20px] sm:p-6 p-5 mt-8">
        <h2 className="text-slate-900 text-xl font-bold mb-4">
          Women Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default page;
