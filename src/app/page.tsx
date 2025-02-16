import { db } from "@/server/db/drizzle";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })
  console.log(images)

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {
          [...images, ...images, ...images].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48 flex flex-col ">
              <img src={image.url ?? undefined} alt="image" />
              <div>
                {image.name}
              </div>
            </div>
          )
          )
        }
      </div>

    </main>


  );
}
