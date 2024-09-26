import { Radar } from "recharts"

const RadarEmployee = ({ rights, dataKey }) => {
    const haveAccess = useAccessRights(rights, employee);

    if (haveAccess === null) {
        return <td colSpan={selectedCriteria.length}>Загрузка...</td>
    }

    if (!haveAccess) {
        return <td colSpan={selectedCriteria.length}>Недостаточно прав</td>
    }

    return <Radar name={employee.name} dataKey={dataKey} stroke="#8884d8" fill="transparent" fillOpacity={0.6} />
}

export default RadarEmployee;