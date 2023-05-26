import React from 'react'
import axios from 'axios';


function Main() {
    const [portfolio, setPortfolio] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:3000/portfolio.json")
        .then(({ data }) => {
            setPortfolio(data);
        })
    }, [])
    console.log(portfolio)
    return (
        <div>
            <main>
                <div className="container">
                    <div className="main--content">
                        <h2>Portfolio</h2>
                        {portfolio.map((obj) => 
                            <div className="main--content__project">
                            <img src={obj.imageUrl} alt="portfolioImage"></img>
                            <p>{obj.title}</p>
                        </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main