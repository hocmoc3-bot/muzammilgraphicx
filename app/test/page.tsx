export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white gap-8">
      <h1 className="text-3xl font-bold">Image Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Test 1: Using standard img tag */}
        <div className="border border-white/20 p-4 rounded-xl flex flex-col items-center gap-4">
          <h2 className="text-xl">Standard &lt;img&gt; Tag</h2>
          {/* Note: Updated extension to .jpg.png based on filesystem findings */}
          <img
            src="/images/profile.jpg.png"
            alt="Standard Img Test"
            className="w-48 h-48 object-cover rounded-xl"
            onError={(e) => {
              console.error("Standard img failed to load");
              e.currentTarget.style.border = "2px solid red";
            }}
          />
        </div>

        {/* Test 2: Next.js Image component */}
        <div className="border border-white/20 p-4 rounded-xl flex flex-col items-center gap-4">
          <h2 className="text-xl">Next.js &lt;Image&gt; Tag</h2>
          <div className="relative w-48 h-48">
            <img
              src="/images/profile.jpg.png"
              alt="Next Image Test"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8 max-w-xl">
        If you see the images above, the path is correct. If you see broken image icons (or red borders), the image file is not exactly at the path specified.
      </p>
    </div>
  )
}
