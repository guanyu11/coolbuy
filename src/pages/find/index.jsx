import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import CareChoose from './careChoose';
import { FindMain, FindHead } from "./styled"
class Find extends Component {
    render() {
        return (
            <FindMain>
                {/* <!-- 头部 --> */}
                <FindHead>
                    <div className="head">
                        <div>
                            <NavLink to="/find/carechoose" tag="span" >每日精选</NavLink>
                        </div>
                        <div>
                            <NavLink to="/find/hotarticle" tag="span" >近期热文</NavLink>
                        </div>
                    </div>
                </FindHead>
                {/* <CareChoose></CareChoose> */}
            </FindMain>
        )
    }
}
export default Find