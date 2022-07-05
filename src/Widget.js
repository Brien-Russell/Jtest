import React from "react";


const Widget = ({ id, name, link, image }) => {
    return (
       
            <div class="flex flex-col items-center max-w-sm xl hover:scale-150 group mb-5">
             <a href={link}>
             <img class="mb-3 w-48 h-48 rounded-full shadow-lg" alt='widget' src={image}/>
             </a>
             <div class="px- py-4 text-center opacity-50 group-hover:opacity-100"> 
                <p class="text-white mb-5">{name}</p>
            </div>
             </div>
           
     
    );
}

export default Widget;