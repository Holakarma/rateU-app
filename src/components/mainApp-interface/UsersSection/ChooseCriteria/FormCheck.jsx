import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import cls from './renderCriteria.module.css'


export function FormCheck({ criterion, selectedCriteria, setSelectedCriteria }) {

    const [checkedCriterion, setCheckedCriterion] = React.useState(true);
    function handleChangeCriterion() {
        setCheckedCriterion(!checkedCriterion);
        if (!checkedCriterion) {
            setSelectedCriteria(prevState => [...prevState, criterion.NAME]);
        } else {
            setSelectedCriteria(prevState => prevState.filter(name => name !== criterion.NAME));
        }
    };

    // console.log(selectedCriteria)
    // console.log(criterion.NAME)

    return (
        <div className={`${cls.criteriaDropdown} dropdown-item p-0`}>
            <FormGroup>
                <FormLabel className="w-100 px-3 py-1 cursor-pointer">
                    <Form.Check
                        type="checkbox"
                        id={`default-${criterion.ID}`}
                        className="me-2 cursor-pointer"
                        label={criterion.NAME}
                        checked={checkedCriterion}
                        onChange={handleChangeCriterion}
                    />
                </FormLabel>
            </FormGroup>
        </div>
    )
}