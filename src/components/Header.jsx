import React from 'react'
import axios from 'axios'

import logo from '../img/icons8-n.svg'
import headerPhoto from '../img/hero.png'

function Header() {
    const [mySkills, setMySkills] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:3000/skills.json")
            .then(({ data }) => {
                setMySkills(data.skills)
            })
    }, [])

    console.log(mySkills)

    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="content--nav-bar">
                        <div className="content--nav-bar__logo">
                            <img src={logo} alt="logo"></img>
                            <p>
                                <span>iko</span> portfolio
                            </p>
                        </div>
                        <div className="content--nav-bar__wrapper">
            <div className="content--nav-bar__link">
                <ul>
                    <li><a href="#">Header</a></li>
                    <li><a href="#">Main</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
                    </div>
                </div>
                <div className="content--info">
                    <div className="content--info__text">
                        <h2>Kelvin Kramer <br></br> Designer & Developer</h2>
                        <p>I'm a portrait, fashion and lifestyle photographer living In New York City. <br></br> During my
                            thirteen
                            year tenure here.</p>
                    </div>
                    <div className="content--info__img">
                        <img src={headerPhoto} alt="Photo"></img>
                    </div>
                </div>
                <div className="skills--info">
                    {mySkills.map((obj) =>
                        <div className="skills-info__develoder">
                            <img src={obj.imageUrl} alt="#!"></img>
                            <h2>{obj.title}</h2>
                            <p>{obj.subtitle}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Header;