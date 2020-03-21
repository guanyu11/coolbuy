import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import VenderItem from "./vendorItem"
@connect(mapStateToProps, mapDispatchToProps)
class vendor extends Component {
    constructor() {
        super()
        this.state = {
            query: {
                mg_size: "medium",
                offset: 0,
                limit: 20
            }
        }
    }
    render() {
        console.log(this.props,"vendorProps")
        let { vendorList } = this.props;
        console.log(vendorList, "vendorList")
        return (
            <div>
                {
                    vendorList.map((item, index) => (
                    <Link key={item.id} to={"/vendor/?"+item.id}>
                        <VenderItem item={item} index={index}>
                        </VenderItem></Link>))
                }
            </div>
        )
    }
    componentDidMount() {
        console.log(111)
        console.log(this.props,"vendorProps,componentDidMount 111")
        this.props.handleGetVendorIndex(this.state.query)
    }
}
export default vendor