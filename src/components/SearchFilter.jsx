export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories
}) {
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="البحث باسم المنتج..."
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="ALL">كل التصنيفات</option>
  {categories.map((category) => (
  <option key={category} value={category}>
    {category}
  </option>
))}
      </select>
    </div>
  )
}