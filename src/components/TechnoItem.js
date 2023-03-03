export default function TechnoItem(props) {

    const { techno } = props

    return (
          
        <div className="card" key={techno.technoid}>
            <h2>Name:</h2> <p> {techno.technoname}</p> 
            <h3>Category: </h3>    <p> {techno.technocategory}</p>
            <h3>Description: </h3>    <p> {techno.technodescription}</p>
        </div>
    );
}