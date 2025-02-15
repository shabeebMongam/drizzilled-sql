
const mockUrls = [
  "https://k3kf98rd3x.ufs.sh/f/J8B8pafVpZXlokBPWRbu0PCpJoIWjzDB7FY1d6aTxgEeStUf",
  "https://k3kf98rd3x.ufs.sh/f/J8B8pafVpZXlcp5tQTCAeXMs2KITqtfmUHLZvNzboE4yYnd0",
  "https://k3kf98rd3x.ufs.sh/f/J8B8pafVpZXlzbWUSXIhe4FyhWJbjoAXfn3lqdawir10Vck7",
  "https://k3kf98rd3x.ufs.sh/f/J8B8pafVpZXlCJfPdRAPRpN8jKfWv0LuZnyXgwM4l1UAHe2x"
]

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48 ">
              <img src={image.url} alt="image" />
            </div>
          )
          )
        }
      </div>

    </main>


  );
}
