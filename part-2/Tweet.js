const Tweet = ({username, name, date, message})=>{
    return (
        <div>
            <ul>
                <li>Username: {username}</li>
                <li>Name: {name}</li>
                <li>Date: {date}</li>
                <li>Message: {message}</li>
            </ul>
        </div>
    )
}