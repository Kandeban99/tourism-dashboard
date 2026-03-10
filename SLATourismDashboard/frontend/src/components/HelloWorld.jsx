function HelloWorld(props) {



    const {name,age,city}=props.myInfo || {};

    return <h2>Hello {name}
    your age {age}
    your hometown {city} ?</h2>
}

export default HelloWorld;