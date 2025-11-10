import { useState ,useEffect } from 'react'


function useCurrency(currency){
    const [data ,setData] = useState({})
    
    useEffect(() => {
        fetch(`cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`).then((response) =>
            response.json()).then((response) =>
                setData(response[currency])
            )
            console.log(data)
        
    }  , [currency])
    return data
}

export default useCurrency;