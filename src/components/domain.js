import React, { useEffect, useState } from "react";
import Table from './table.js'

export default function Domain() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function getAttack() {
            const url = "https://cloudflare.cloudflaregeneral.workers.dev/domain "
            const resp = await fetch(url)
            const res = await resp.json()
            if (res !== null) {
                setResults(res['rankingEntries'])
            }
        
        }
        getAttack();
        
    },[results.length]);
    const getHeadings = () => {
        if (results.length !== 0) {
            return Object.keys(results[0]);
        }
        
    }
    if (results.length !== 0) {
        return (
            <div>
              <Table theadData={getHeadings()} tbodyData={results}/>
            </div>
        );
    }
    

}