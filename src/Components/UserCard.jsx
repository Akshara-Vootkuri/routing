import "./usercard.css"
export const UserCard=(props)=>{
    const {name,email,phone,address}=props.value;
    return(
        <div className="user-card">
            <h2 className="user-name">Name is {name}</h2>
            <h3 className="user-detail">Email is {email}</h3>
            <h4 className="user-detail">Phone num is {phone}</h4>
            <h5 className="user-detail">Address is {address.city}</h5>
        </div>
    )
}