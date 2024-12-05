// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  MainContainer,
  Heading,
  Desc,
  PasswordInput,
  ErrorMsg,
} from './styledComponents.js'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <MainContainer>
        <Heading>Password Validator</Heading>
        <Desc>Check how strong and secure is your password</Desc>
        <PasswordInput
          type="password"
          onChange={changePassword}
        ></PasswordInput>
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </MainContainer>
    </AppContainer>
  )
}

export default PasswordValidator
