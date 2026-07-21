function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export default function ProductDetail({ product, error }) {
  const len = product.length || 0;
  const fillerLg = (3 - (len % 3)) % 3; // for lg:grid-cols-3
  const fillerMd = (2 - (len % 2)) % 2; // for md:grid-cols-2

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-8 z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {product.map((item) => (
        <div
          key={item.id}
          className="border border-0 rounded-lg p-4 shadow hover:shadow-lg h-full flex flex-col"
        >
          <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-contain mb-4"/>
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
          <p className="mt-4 font-semibold text-green-600">
            {formatPrice(item.price)}
          </p>
        </div>
      ))}

      {/* placeholders for md (2 columns) - visible only on md screens */}
      {Array.from({ length: fillerMd }).map((_, i) => (
        <div key={`ph-md-${i}`} className="hidden md:block lg:hidden">
          <div className="border rounded-lg p-4 invisible">placeholder</div>
        </div>
      ))}

      {/* placeholders for lg (3 columns) - visible only on lg screens */}
      {Array.from({ length: fillerLg }).map((_, i) => (
        <div key={`ph-lg-${i}`} className="hidden lg:block">
          <div className="border border-0 rounded-lg p-4 invisible">placeholder</div>
        </div>
      ))}
      </div>
    </div>
  );
}