import { useState, useEffect } from 'react'

const Coin = () => {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [money, setMoney] = useState(0)
    const [start, setStart] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        setStart(true)
    }

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(response => response.json())
            .then(json => {
                setCoins(json)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <hr />
            <div>
                <div>if you have </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="number"
                        placeholder="put your money"
                        value={money}
                        onChange={e => setMoney(e.target.value)}
                    ></input>
                    <button>변환하기</button>
                </form>
            </div>

            <ul>
                {coins.map(coins => (
                    <li key={coins.id}>
                        {coins.name} ({coins.symbol}) : {coins.quotes.USD.price}{' '}
                        USD
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Coin
