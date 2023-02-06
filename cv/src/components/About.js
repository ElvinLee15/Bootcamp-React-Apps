// About Component briefly introducing self

const About = (props) =>{
    return(
        <section className="aboutContainer">
            <h2>About:</h2>
            <p>{props.about}</p>
        </section>
    )
}

export default About