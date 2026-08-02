import React from 'react'

export default function ProductTable({product, handelDelet, setEditingProduct}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-5 py-4 font-bold text-gray-600">
                المنتج
              </th>

              <th className="px-5 py-4 font-bold text-gray-600">
                التصنيف
              </th>

              <th className="px-5 py-4 font-bold text-gray-600">
                السعر
              </th>

              <th className="px-5 py-4 font-bold text-gray-600">
                الإجراءات
              </th>
            </tr>
          </thead>

          <tbody>
            {product.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
              
              <td className="  py-4  flex gap-5 justify-center items-center" >
<img
  className="rounded-lg object-cover border-2 border-gray-200 h-16 w-16"
  src={item.image}
  alt={item.name}
/>                <div className="font-medium text-gray-800">
                  {item.name}
                </div>
              </td>

              <td className="px-5 py-4">
                <span className="bg-blue-100 text-blue-700 px-3 font-bold py-1 rounded-full text-xs">
                  {item.category}
                </span>
              </td>

              <td className="px-5 py-4 font-medium text-gray-800">
                ${item.price}
              </td>

              <td className="px-5 py-4">
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded-lg" onClick={()=>setEditingProduct(item)}>
                    تعديل
                  </button>

                  <button className="px-3 py-1.5 bg-red-500 text-white rounded-lg" onClick={() => handelDelet(item.id)}>
                    حذف
                  </button>
                </div>
              </td>

            </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}