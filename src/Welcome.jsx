export const Welcome = (props) => {
    console.log(props);
    return(
        <div>
            <h1><i>Welcome to {props.name}!</i></h1>      
            <p>Alias: {props.alias}</p>
            </div>
    );
};