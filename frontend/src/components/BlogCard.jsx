
import { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from "axios"

const BlogCard = ({blog}) => {
  const [slug,setSlug]=useState()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = async() => {
    const fetchSlug=async()=>{
      try{

        const {data}=await axios.get(`https://api.theinnerhour.com/v1/blogdetail/${blog.slug}`)
        setSlug(data.blog)
      }catch(err){
        alert(err);
      }
    }
    await fetchSlug()
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(slug)
  
  return (
    <>

    <div className="w-[400px] h-[430px] bg-white rounded-xl cursor-pointer" >
        <div className="h-[200px]">
            <img className="w-full h-full object-cover rounded-xl" src={blog.thumb} alt="blog_image" />

            <div className="flex flex-col justify-center items-center gap-3 py-2 px-6">
                <h1 className="text-xl font-semibold hover:text-yellow-300 "onClick={openModal}>{blog.title} </h1>
                <p className="text-gray-400 text-md break-words ">
                    
                    {blog.short_description}
                </p>
            </div>
        </div>
    </div>
   {slug&&<Modal isOpen={isModalOpen} onClose={closeModal} thumb={slug.thumb} title={slug.metatitle} content={slug.body}/>}
    </>
  )
}

export default BlogCard