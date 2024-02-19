import { Breadcrumbs } from "@material-tailwind/react";
import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from "axios"; 


function Home() {

    const [data, setData] = useState(); 

    useEffect(() => {
        axios.get('http://192.168.1.4:8000/api/products').then(
            response => {
                setData(response.data);
            }
        ).catch(error => {
            console.error(error);
        })
    }, [])



  return (
    <div className='p-8 bg-slate-100  '>
        <Breadcrumbs>
        <Link to="" className="opacity-60 px-4">
           Home
        </Link>
        <Link to="" className="opacity-60 px-4">
            Store
        </Link>
        <Link to="" className='text-blue-700 px-4'>New in</Link>
        </Breadcrumbs>

        <div className='flex justify-center text-4xl font-semibold'>
            New in
        </div>
        <div className="flex justify-end">
            449 products trouvés
        </div>

          {
              <div className='products grid grid-cols-4 gap-y-12 pt-20'>
                  {data?.products.map((data) => {
                      return (
                          <div key={data.id}>
                              <div className='img bg-white h-[300px] w-[240px] p-8 rounded-md shadow '>
                                  <img src={data.image} alt='casque' className='w-[170px]' />
                              </div>
                              <div className='pt-4'>
                                  <div className='font-semibold w-[230px]'>{data.name}</div>
                                  <div className=''>{data.category}</div>
                                  <div className='text-blue-700 font-medium pt-3'>$ {data.price}</div>
                              </div>
                          </div>
                      );
                  })
                  } 
                </div>
          } 

        <div className='pt-20 flex justify-center'>
            <button className='bg-blue-700 text-white w-[200px] h-10 rounded-md'>More products</button>
        </div>
    </div>
  )
}

export default Home