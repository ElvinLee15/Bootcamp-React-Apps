// Hobbies and interest Component Section

const Hobby = (props) =>{
    return(
        <p>{props.hobbyDetail}</p>
    )
}

const Hobbies = (props) =>{
    return(
        <section className="hobbiesContainer">
            <Hobby hobbyDetail = {props.hobbyDetail}/>
        </section>
    )
}

export default Hobbies