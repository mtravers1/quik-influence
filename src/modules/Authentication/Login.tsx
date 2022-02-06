import CustomButton from "components/Button"
import { TextInput } from "components/Input"
import React, { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log('submitted')
    }


    return (
        <form action='post' onSubmit={handleSubmit} >
            <TextInput
                value={email}
                formControlProps={{
                    pt: 8
                }}
                handleChange={(e) => setEmail(e.target.value)}
                type='email' 
                placeholder='Email Address'
                TextInputProps={{
                }}
            />
            <TextInput
                value={password}
                formControlProps={{
                    py: 8
                }}
                handleChange={(e) => setPassword(e.target.value)}
                type='password' 
                placeholder='Password'
                TextInputProps={{
                }}
            />
            <CustomButton
                maxW='204px'
                height='64px'
                mt={4}
                >
                Login
            </CustomButton>
        </form>
    )
}

export default Login