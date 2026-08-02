import React, { useEffect, useState } from 'react'
import Header from './components/Header'

import AddProduct from './components/AddProduct'
import SearchFilter from './components/SearchFilter'
import ProductTable from './components/ProductTable'
import EditProduct from './components/EditProduct'

export default function Dashbord() {
const [product, setProuduct] = useState(() => {
  const savedProducts = localStorage.getItem('products')

  return savedProducts ? JSON.parse(savedProducts) : []
})
    useEffect(() => {
  localStorage.setItem('products', JSON.stringify(product))
}, [product])
    const [editingProduct, setEditingProduct] = useState(null)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('ALL')
  function handelEdit(e){
      e.preventDefault()
  const updatedProducts =product.map(item => item.id === editingProduct.id ? {...item, ...editingProduct} : item)
  setProuduct(updatedProducts)
  setEditingProduct(null)
}
function handelDelet(id){
    const confirm = window.confirm("هل انت متأكد من مسح هذا المنتج")
    if(confirm){
      setProuduct(product.filter(item => item.id !== id))
    }

}
const filteredProducts = product.filter((item) => {
const matchName = (item.name || '')
  .toLowerCase()
  .includes(search.toLowerCase())
  const matchCategory =
    category === 'ALL' || item.category === category

  return matchName && matchCategory
})
const productsCount = product.length

const categoriesCount = new Set(
  product.map((item) => item.category)
).size
const categories = [...new Set(product.map(item => item.category))]
return (
    <div>
      <Header     productsCount={productsCount}
    categoriesCount={categoriesCount}
    />
      <div className="flex justify-between mx-auto my-20 w-[85%] gap-4">
{editingProduct ? (
  <EditProduct
    product={editingProduct}
    setProduct={setEditingProduct}
    setProuduct={setProuduct}
    setEditingProduct={setEditingProduct}
    handelEdit={handelEdit}
  />
) : (
  <AddProduct
    product={product}
    setProuduct={setProuduct}
  />
)}
        <div className="flex flex-col gap-4 w-[70%]">
     <SearchFilter
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
  prouduct={product}
  categories={categories}
/>
            <ProductTable product={filteredProducts} handelDelet={handelDelet} setEditingProduct={setEditingProduct} />
        </div>
      </div>

    </div>
  )
}
