import ReactConceptsList from "./ReactConceptsList";
const ReactConcepts = ({concepts}) => {
     return(
        <ul id="concepts">
            {concepts.map(function(concepts,index){
                return <ReactConceptsList 
                key = {index}
                title = {concepts.title}
                image = {concepts.image}
                description = {concepts.description}
                />
            })}
        </ul>
     )
}

export default ReactConcepts;