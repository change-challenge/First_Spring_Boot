import { useState, useEffect } from 'react'

const Coin = () => {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [money, setMoney] = useState(0)
    const [start, setStart] = useState(false)
    const [convertedCoins, setConvertedCoins] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        console.log('hey')
        setStart(true)
        convertCoins()
    }

    const convertCoins = () => {
        const convertedCoins = coins.map(coin => {
            const convertedPrice =
                parseFloat(coin.quotes.USD.price) * parseFloat(money)
            return {
                ...coin,
                convertedPrice,
            }
        })
        setConvertedCoins(convertedCoins)
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

            {start && (
                <ul>
                    {convertedCoins.map(coin => (
                        <li key={coin.id}>
                            {coin.name} ({coin.symbol}) :{' '}
                            {coin.convertedPrice.toFixed(2)} USD
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Coin
