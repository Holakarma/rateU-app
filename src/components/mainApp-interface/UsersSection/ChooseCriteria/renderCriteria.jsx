import { ChooseCriteria } from "./ChooseCriteria"


export function renderCriteria({criteria}) {

    criteria.map((criteria) => {
        setCriteria(criteria)
    })

    return (
        <ul className="list-group list-group-flush gy-1">
            {criteria.map((criteria) => {
                <li key={criteria.ID} className="list-group-item">{criterion.NAME}</li>
            })}
        </ul>
    )
}