import React from 'react'
import LanguageToggler from '../components/Localization/LanguageToggler'
import CreateQuestion from '../components/Questions/CreateQuestions/CreateQuestion'
import ListQuestions from '../components/Questions/ListQuestion/ListQuestions'

function CreateQuestions() {
  return (
    <div>
      <LanguageToggler />
      <CreateQuestion />
      <ListQuestions />
    </div>
  )
}

export default CreateQuestions