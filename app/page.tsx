export default function Home() {
  const books = [
    { title: "Novel A", price: "RM25.00" },
    { title: "Novel B", price: "RM30.00" },
    { title: "Novel C", price: "RM22.00" },
    { title: "Novel D", price: "RM28.00" },
    { title: "Novel E", price: "RM35.00" },
    { title: "Novel F", price: "RM18.00" },
    { title: "Novel G", price: "RM40.00" },
    { title: "Novel H", price: "RM27.00" },
  ];

  const categories = [
    "Romance",
    "Thriller",
    "Fantasy",
    "Self-Help",
    "Malay Novel",
    "Teen",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            📚 Kaki Novel
          </h1>

          <a
            href="https://wa.me/60XXXXXXXXX"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition"
          >
            Order via WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Discover Your Next Story
        </h2>

        <p className="text-gray-500 mt-3">
          Explore romance, thriller, fantasy & Malay novels in one place
        </p>

        {/* SEARCH */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search novels..."
            className="w-full max-w-xl mx-auto border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-4">
        <h3 className="font-semibold mb-3">Categories</h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* BOOK GRID */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="font-semibold mb-4">Popular Books</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="border border-gray-100 rounded-xl p-3 hover:shadow-md transition bg-white"
            >
              {/* BOOK COVER PLACEHOLDER */}
              <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>

              <h4 className="font-medium text-sm">{book.title}</h4>
              <p className="text-gray-500 text-xs">{book.price}</p>

              <a
                href="https://wa.me/60XXXXXXXXX"
                className="mt-3 block text-center bg-black text-white text-xs py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kaki Novel. All rights reserved.
        </div>
      </footer>

    </main>
  );
}