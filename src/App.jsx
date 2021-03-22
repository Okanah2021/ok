import React from 'react'
import List from './components/List'
import Footer from './components/Footer'

export default function App() {
    return (
        <div>
            <div className="LogoPic"  >
                <img src={require("./assets/logo.png").default}  width="310" height="310" />
            </div>
            <List />
            <Footer />
        </div>
    )
}
