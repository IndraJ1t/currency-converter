import { useEffect, useState } from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/50830c1b59f439dc64fbf3e0/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res['conversion_rates']))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;