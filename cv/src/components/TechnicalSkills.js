// Technical Skills Component

const Skill = (props) =>{
    return(
        <li>{props.skill}</li>
    )
}

const Skills = (props) =>{
    return(
        <section className ="skillsComponentContainer">
            <Skill skill={props.skill}/>
        </section>
    )
}

export default Skills