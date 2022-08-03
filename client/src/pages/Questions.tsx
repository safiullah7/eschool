import React from 'react'
import LanguageToggler from '../components/Localization/LanguageToggler'
import CreateQuestion from '../components/Questions/CreateQuestions/CreateQuestion'
import ListOfQuestions from '../components/Questions/ListQuestion/ListOfQuestions'

function CreateQuestions() {
  return (
    <div>
      <LanguageToggler />
      <CreateQuestion />
      <ListOfQuestions />
    </div>
  )
}

export default CreateQuestions