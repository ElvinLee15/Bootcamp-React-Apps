// Education component displaying qualifications
const Education = (props) =>{
    return(
        <section className="educationContainer">
            <h3>{props.qualification}</h3>
            <p>{props.detail}</p>
        </section>
    )
}

export default Education