import React, { useState } from 'react';
import CONFIG from '../../common/config'
import textConstants from '../../common/textConstants';
import TextInput from "../../components/TextInput";
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../common/userSlice';
import { useNavigate } from 'react-router-dom';
import commonFunctions from '../../action';

const LandingPage = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
  const isDarkMode = useSelector((store) =>store.app.isDarkMode);
    const { userQuestions } = CONFIG.landingPage;
    const [formData, setFormData] = useState({});
   
    const handleChange = (id, e) => {
        setFormData({...formData,[id] : e.target.value})
        
      };

      const handleSubmit = (e) =>{
        e.preventDefault();

      dispatch(addUser(formData));
      navigate("/templates")
    
    // localStorage.setItem('formData', JSON.stringify(formData));
    
      }

      const apicall= async (searchtext) =>{
        setTimeout(()=>commonFunctions.makeApiCall(searchtext),4000)
      }

      
  return (
    <form  className='flex flex-col gap-2 mx-[1rem] border border-[#Cacaca] mt-4'>
    {Object.keys(userQuestions).map((key) => {
      const question = userQuestions[key];

      return (
        <div key={key}>
            
         

          {question.inputType === textConstants.INPUT_TYPES.TEXTBOX && (
            <TextInput 
            label={question.labelText} 
            placeholder={question.placeholder} 
            value={formData[question.id] || ''}
            onChange={(e) => handleChange(question.id, e)}
            isMandatory={question.isMandatory}/>
          )}

         
        </div>
      );
    })}

    <Button label={'submit'} onClick={handleSubmit}/>

    <Button label={"api call"} />
  </form>
  )
}

export default LandingPage