import Header from "../components/Header";
import { useEffect, useState } from "react";

const PhotoRestore = () => {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileSelect = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', (event) => {
      if (event.target) {
        const selectedFile = event.target.files[0];
        setSelectedImage(selectedFile);
      }
    });

  };

  const handleRequest = async () => {
    
    const formData  = new FormData();
    
    if (selectedImage) {
      formData.append('image', selectedImage);

    const response = await fetch('http://localhost:3001/restore/restore', {
      method: 'POST',
      body: formData,
    });
  }
    
  };

  useEffect(() => {
    if (selectedImage) {
    console.log(selectedImage.name);
    handleRequest();
    }
  }, [selectedImage]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    setSelectedImage(selectedFile);
  };

  const handleDragDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

 // const readFile = () => {
    
  //}

  return (
    <div className="h-screen bg-gradient-to-b from-blue-200 to-green-400">

      <Header />
      <div className="mt-20 flex flex-col items-center gap-[50px]">
        
        <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold text-gray-800/80">
          Restore any photo
        </h1>

        <div 
        onDrop={handleDrop}
        onDragOver={handleDragDrop}
        className="flex items-center justify-center border-dotted border-neutral-500 border-[2px] lg:w-[600px] lg:h-[200px] lg:mx-auto mx-4 w-[300px] h-[150px] md:w-[500px]">
          <button
          onClick={handleFileSelect}
          className="bg-black text-white lg:px-10 lg:py-4 px-5 py-2 rounded-xl hover:opacity-90 font-semibold">
            Upload an image
          </button>
        </div>

      </div>
    </div>
  )
}

export default PhotoRestore