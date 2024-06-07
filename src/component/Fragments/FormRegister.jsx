import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Buttons/Button"
const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Username" type="text" placeholder="example" name= "username"/>
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name= "email"/>
            <InputForm label="Password" type="password" placeholder="********" name= "password"/>
            <InputForm label="Confirm Password" type="password" placeholder="********" name= "confirmPassword"/>
            <Button variant="bg-blue-500 hover:bg-blue-700 w-full">Register</Button>
          </form>
    )
}
export default FormRegister