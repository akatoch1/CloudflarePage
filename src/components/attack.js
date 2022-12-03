import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


export default function Attack() {
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getAttack() {
            const url = "https://cloudflare.cloudflaregeneral.workers.dev/attack "
            const resp = await fetch(url)
            const res = await resp.json()
            if (res !== null) {
                setResults(res)
            }
        
        }
        getAttack();
        function convertToChart() {

            var d = []
            if (results.length !== 0) {
                const oldData = Object.keys(results['data'])
                for (let i = 0; i < 720; i++) { // add 720
                    d.push({'time': results['data'][oldData[i]], 'percent': results['data'][oldData[i+720]]})
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
                <Line type="monotone" dataKey="percent" stroke="#8884d8" />
            </LineChart>
        </div>
      );
}
