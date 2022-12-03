import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


export default function Traffic() {
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getTraffic() {
            const url = "https://cloudflare.cloudflaregeneral.workers.dev/traffic "
            const resp = await fetch(url)
            const res = await resp.json()
            if (res !== null) {
                setResults(res)
            }
        
        }
        getTraffic();
        function convertToChart() {

            var d = []
            if (results.length !== 0) {
                const oldData = Object.keys(results['data']['total'])
                const http = Object.keys(results['data']['http'])
                for (let i = 0; i < 721; i++) { // add 720
                    d.push({'time': results['data']['total'][oldData[i]], 'totalvalue': results['data']['total'][oldData[i+721]], 'httpvalue': results['data']['http'][http[i+721]]})
                }
            }
            if (d.length !== 0) {
                setData(d)
            }
        }
        convertToChart()
        
    },[results.length]);

    

    return (
        <div>
            <LineChart width={1350} height={500} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalvalue" stroke="#8884d8" />
                <Line type="monotone" dataKey="httpvalue" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}
