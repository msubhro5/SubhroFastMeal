import React from "react";
import "./Home.scss";
import Welcome from "./Welcome";
import Menu from "./Menu";

function Home() {
    return (
        <div className="Home">
            <Welcome />
            <Menu />
            <div className="Footer">
                <h1>Copyright &copy; Subhro Fast Meal, 2021. All rights reserved.</h1>
                <h3>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</h3>
            </div>
        </div>

    )
}

export default Home;