import { useEffect, useState } from "react";

// Step 1 : Custom hook
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json())
        .then(object => setData(object[currency]));
    }, [currency]);
    return data;
}

export default useCurrencyInfo;