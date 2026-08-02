import { Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function AddProduct({ setProuduct, product }) {
    const[name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('') 
    const[sucss, setSuccs] = useState(false)
    function handelAdd (e){
     e.preventDefault()
     const id = Date.now()

     setProuduct([...product, {id, name, price, category, image}])
     setName('')
     setPrice('')
     setCategory('')
     setImage()
   
    }
  return (
    <div className='p-5 bg-white rounded-lg border border-gray-200 w-[40%] '>
        
        <div className='flex items-center gap-2'>
            <Plus className='flex justify-center items-center p-1  bg-blue-500 text-white rounded-full' />
            <h2 className='text-xl font-semibold'>إضافة منتج جديد</h2>

        </div>

        <form onSubmit={handelAdd} className='flex flex-col mt-5'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='font-bold'>اسم المنتج</label>
                <input
                required
                  type="text"
                  id="name"
                  placeholder="مثال: ايفون 15 برو ماكس"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"                />
            </div>
           <div className="flex gap-5 w-full">
  <div className="flex flex-col gap-1 w-1/2">
    <label>السعر ($)</label>
    <input
      required
      type="number"
      placeholder="0.00"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col gap-1 w-1/2">
    <label>التصنيف</label>
    <input
      type="text"
      required
      placeholder="مثال: الكترونيات"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">رابط الصورة (URL)</label>
              <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    reader.readAsDataURL(file)
  }}
  className="w-full p-2 border-2 border-gray-300 rounded-lg"
/>
                </div>
<button className='bg-blue-600 mt-5 text-white p-2 rounded-xl'>إضافة منتج</button>
        </form>
    </div>
  )
}
