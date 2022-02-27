import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function App({title,children}) {
  return (
    <div className="min-h-screen">
        <Head title={title}/>
          <Navbar/>
      <div className="flex gap-4">
         <div className="w-1/5">
              <Sidebar/>
         </div>
         <div className="w-4/5">
            <div className="pt-4 gray-50">
             {children}
            </div>
        </div>
      </div>
    </div>
  )
}
