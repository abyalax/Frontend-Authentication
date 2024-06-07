import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Buttons/Button"
const FormLogin = () => {
    return (
        <form action="">
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name= "email"/>
            <InputForm label="Password" type="password" placeholder="********" name= "password"/>
            <Button variant="bg-blue-500 hover:bg-blue-700 w-full">Login</Button>
          </form>
    )
}
export default FormLogin