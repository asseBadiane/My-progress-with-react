export default function TechnoList(props) {
    const { technos } = props
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
            {/* <p>TODO All Technos added</p> */}
            <div>
                {
                    technos.map((techno, index) => (
                      
                        <div key={index} >
                      
                              <h2>Name:</h2> <p> {techno.technoname}</p> 
                            <h3>Category: </h3>    <p> {techno.technocategory}</p>
                            <h3>Description: </h3>    <p> {techno.technodescription}</p>
                        </div>
                    ))
                    
                }
                console.log('id',index)
            </div>
        </div>
    )
}