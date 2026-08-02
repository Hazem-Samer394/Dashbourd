
import { Package } from 'lucide-react'
import React, { useEffect } from 'react'

export default function Header({ productsCount, categoriesCount }) {

  return (
    <header className=" bg-white p-4 border-b border-gray-200  ">
      <div className='flex justify-center mx-auto w-[80%]'>
       <div className="container mx-auto flex gap-6">
        <Package className="bg-[#2563EB] text-white h-12 w-12 p-2 rounded-xl" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المنتجات</h1>
          <p className="text-gray-600 text-sm">لوحة تحكم المنتجات والمخزون</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
      
      <div className='bg-[#EFF6FF] p-1 flex flex-col justify-center items-center w-30 rounded-lg border border-[#DBEAFE]'>
        <p className=' text-[#2563EB] font-semibold'>اجمالي المنتجات</p>
        <span className='text-2xl font-bold text-gray-800'>{productsCount}</span>
      </div>
     <div className='bg-[#F0FDF4] p-1 flex flex-col justify-center items-center w-30 rounded-lg border border-[#DBEAFE]'>
        <p className=' text-[#16A34A] font-semibold'>التصنيفات</p>
        <span className='text-2xl font-bold text-gray-800'>{categoriesCount}</span>
      </div>

      </div>
      </div>
    </header>
  )
}
