import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jan',
        email: 'jano@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    useEffect(() => {
        console.log('useEffect called')
    },[]);
    
    useEffect(() => {
        console.log('form state changed')
    },[formState]);
    
    useEffect(() => {
        console.log('email changed')
    },[ email ]);
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange } />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="jano@gmailcom"
                name="email"
                value={email}
                onChange={ onInputChange }/>
        </>



    )
}

