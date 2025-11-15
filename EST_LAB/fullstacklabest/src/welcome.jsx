export default function welcome({name}){
    return <h3> Welcome {name ?name :"Guest"}</h3>;
}