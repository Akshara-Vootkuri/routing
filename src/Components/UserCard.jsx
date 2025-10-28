export const UserCard=(props)=>{
    const {name,email,phone,address}=props.value;
    return(
        <>
            <h2>Name is {name}</h2>
            <h3>Email is {email}</h3>
            <h4>Phone num is {phone}</h4>
            <h5>Address is {address.city}</h5>
        </>
    )
}