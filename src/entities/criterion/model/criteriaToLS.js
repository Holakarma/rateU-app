export const saveCriteria = (criteria) => localStorage.setItem('criteria', JSON.stringify(criteria.map(criterion => criterion.ID)));

export const getCriteriaFromLS = () => JSON.parse(localStorage.getItem('criteria'))

