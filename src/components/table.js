export default function Table({theadData, tbodyData}) {
    return (
    <table>
    <thead>
    <tr>
    {theadData.map(heading => {
    return <th key={heading}>{heading}</th>
    })}
    </tr>
    </thead>
    <tbody>
    {tbodyData.map((row, index) => {
    return <tr key={index}>
    {theadData.map((key, index) => {
    if ((row[key] === "8") ||  (row[key] === "instagram.com")) {
        return <td key={row[key]}><font color = "green">{row[key]}</font></td>
    }
    if ((row[key] === "9") ||  (row[key] === "mozilla.org")){
        return <td key={row[key]}><font color = "red">{row[key]}</font></td>
    }
    return <td key={row[key]}>{row[key]}</td>
    })}
    </tr>;
    })}
    </tbody>
    </table>
    );
}