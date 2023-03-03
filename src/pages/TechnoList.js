import TechnoItem from "../components/TechnoItem"

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
            {/* <p>TODO All Technos added</p> */}
            <div>
              {
                technos.map(techno => 
                    < TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno} />
                    )
              }
           
            </div>
        </div>
    )
}