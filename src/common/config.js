import textConstants from "./textConstants"

const landingPage = {
    userQuestions : {
        userName: {
            id: 'userName',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'Enter your full name',
            placeholder: 'Please enter your full name',
            value: '',
            error: false,
            isMandatory:true,
        },
        targetPosition: {
            id: 'targetposition',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'What position are you targeting',
            placeholder: 'ex. frontend, full-stack, ui-designer',
            value: '',
            error: false,
            isMandatory:true,
            
        },
        targetCompany: {
            id: 'companyName',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'What company your are targeting',
            placeholder: 'Please enter targeted company name',
            value: '',
            error: false,
            isMandatory:true,

        },

        yearOfExperience: {
            id: 'yearofexperience',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'Total year of work experience',
            placeholder: 'Please enter work experience in years',
            value: '',
            error: false,
            isMandatory:true,

        },

        mobileNumber:{
            id: 'mobilenumber',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'Mobile number',
            placeholder: 'Please enter valid mobile number',
            value: '',
            error: false,
            isMandatory:true,

        },
        techSkills: {
            id: 'techskills',
            inputType: textConstants.INPUT_TYPES.TEXTBOX,
            labelText: 'Enter your Technical Skills',
            placeholder: 'Ex. Reactjs, javascript, html, angular',
            value: '',
            error: false,
            isMandatory:true,

        }

        

    },

}

export default {
    landingPage
}