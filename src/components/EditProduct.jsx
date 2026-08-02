import React from 'react'
import { Pencil } from 'lucide-react'

export default function EditProduct({
  product,
  setEditingProduct,
  handelEdit
})  {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Pencil className="text-amber-500" size={20} />
        تعديل المنتج
      </h2>

      <form className="space-y-4" onSubmit={handelEdit}>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            اسم المنتج
          </label>

          <input
            type="text"
            value={product.name}
            onChange={(e) =>
              setEditingProduct({
                ...product,
                name: e.target.value
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              السعر ($)
            </label>

            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setEditingProduct({
                  ...product,
                  price: e.target.value
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              التصنيف
            </label>

            <input
              type="text"
              value={product.category}
              onChange={(e) =>
                setEditingProduct({
                  ...product,
                  category: e.target.value
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            رابط الصورة
          </label>

       <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0]

    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file)
      })
    }
  }}
  className="w-full p-2 border-2 border-gray-300 rounded-lg"
/>
        </div>

        <div className="flex gap-2 pt-2">

          <button
            type="submit"
            className="flex-1 bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg"
          >
            حفظ التغييرات
          </button>

          <button
            type="button"
            onClick={() => setEditingProduct(null)}
            className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg"
          >
            إلغاء
          </button>

        </div>

      </form>
    </div>
  )
}