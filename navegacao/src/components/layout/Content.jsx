import React from "react"
import {Routes, Route} from "react-router-dom"
import "./Content.css"

import Param from "../../views/examples/Param"
import Home from "../../views/examples/Home"
import About from "../../views/examples/About"
import NotFound from "../../views/examples/NotFound"

const Content = props => (
    <aside className="Content">
        <Routes>
            <Route path="/param/:id"  element={<Param/>} />
            <Route path="/about"  element={<About/>} />
            <Route exact path="/"  element={<Home/>} />
            <Route  path="*" element={<NotFound />}/>
        </Routes>
    </aside>
)

export default Content