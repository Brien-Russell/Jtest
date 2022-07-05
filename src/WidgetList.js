import React from 'react';
import Widget from './Widget';


const WidgetList = ({ widgets }) => {
     return (
        <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-4 mt-20 md:mt-24">
            {
            widgets.map((user,i) => {
             return (        
                 <Widget          
                 key={i} 
                 id={widgets[i].id} 
                 name={widgets[i].name} 
                 image={widgets[i].image}
                 link={widgets[i].link}
                  />
             
        );
    })
            }
        </div>
    );
 }

 export default WidgetList;