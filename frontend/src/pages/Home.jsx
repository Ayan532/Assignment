import { BiSearch } from "react-icons/bi"
import BlogCard from "../components/BlogCard"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = () => {
  const [blogs,setBlogs]=useState([])
  const [search,setSearch]=useState('')

  
  useEffect(() => {
    const fetchBlogs=async()=>{
      try{

        const {data}=await axios.get(`https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=21`)
        setBlogs(data.data)
      }catch(err){
        alert(err);
      }
    }
    fetchBlogs()
  }, [search])

  const filteredBlogs =()=>{

   setBlogs(blogs.filter((blog) =>blog.title.toLowerCase().includes(search.toLowerCase())))
}
    


  console.log(blogs);
  
  return (
    <div className="w-full h-screen bg-gray-100">

<div className='w-full p-3 px-20 sticky top-0 bg-gray-100 rounded-xl'>
        <div className='w-full flex justify-between items-center'>
            <h1 className="text-2xl">{search==''?'All Articles':`Search Result for: ${search}`}</h1>

            <div className="flex gap-2 justify-between items-center border border-1 bg-white p-4 rounded-lg w-[30%]">
                <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Articles..." className="outline-none w-full border-none" />
                <BiSearch onClick={filteredBlogs} className="text-2xl"/>
            </div>
        </div>
    </div>

    <div className="w-full px-24 py-3 mt-5 flex gap-10 flex-wrap overflow-y-hidden bg-gray-100">
        {
          blogs && blogs.length>0?blogs.map((blog)=>(
            <BlogCard key={blog.id} blog={blog}/>
          )):(<h1>No Blogs</h1>)
        }
    </div>

    </div>
  )
}

export default Home