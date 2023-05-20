import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({ isOpen, onClose,thumb, title, content }) => {
    if (!isOpen) return null;
    const createMarkup = (htmlContent) => {
      return { __html: htmlContent };
    };
    return (
      <>

      <div className="fixed inset-0 flex items-center justify-center z-50  flex-col overflow-y-auto  backdrop-blur-md">
    
      <div className=" w-[70%] h-[80%] p-5 ">
      <div className='flex justify-end' onClick={onClose}>

      <AiOutlineClose className='text-2xl ' />
      </div>

       
       <img className="w-full h-1/2 object-center rounded-xl" src={thumb} alt="blog_image" />

        <div className="bg-white  p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        
        </div>
      </div>
      </div>
    
      </>
    );
  };
  
  export default Modal;