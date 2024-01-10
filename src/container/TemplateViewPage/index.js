import React from 'react'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'
import store from '../../common/store';
import commonFunctions from '../../action';
import { GPT_INSTRUCTIONS } from '../../common/textConstants';

const TemplateView = () => {
  const userData = useSelector((store) => store.user);
  console.log(userData,"Anson");


  const handleClick = async () =>{
    let searchQuery = commonFunctions.singleString(userData);

    searchQuery = GPT_INSTRUCTIONS + searchQuery;
    
    console.log("now call make api call",searchQuery);
    await commonFunctions.makeApiCall(searchQuery);
   
  }
  return (
    <div className='templatewrapper'>
        <header >Your Template is here {userData?.userName} <Button label={"New Template"} onClick={handleClick}/></header>
        <article>
          {userData && 
          Object.keys(userData).map(key =>{
         
            return <>
           <div className='flex '><span className='px-4'>{key}</span> <span>{userData[key]}</span></div>
            </>
          }) 
          
          }

        </article>
        
        

    </div>
  )
}

export default TemplateView;