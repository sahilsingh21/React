function Student(props)
{
    return(
        <div>
            <h1>
                Name : {props.name}
            </h1>
            <h3> Email : {props.email}</h3>
            <h6>Address : {props.others.address}</h6>
            <h6>Mobile : {props.others.mobile}</h6>
        </div>
    )
}

export default Student;