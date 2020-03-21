import React, { Component } from 'react'
import {connect} from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import Banner from "@components/swiper"
@connect(mapStateToProps,mapDispatchToProps)
class Home extends Component {
    render() {
        let {banner}=this.props
        return (
            <Banner banner={banner}>
            </Banner>
        )
    }
    componentDidMount(){
        console.log("componentDidMount home")
        this.props.handleGetHomeBanner()
    }
}
export default Home