import React, { Component } from 'react'
import { VenderItem } from "./styled"

class Find extends Component {
    render() {
        let {item,index}=this.props
        return (
            <div>
               <VenderItem >
               <div className="VendorItemCon" style={{ background: item.background_color }}>
                                <div className="logoCon">
                                    <div className="logo">
                                        <img
                                            src={item.logo}
                                        />
                                    </div>
                                    <div className="text">
                                        <div>{item.name}</div>
                                        <div>{item.summary}</div>
                                    </div>
                                </div>
                                {/* <!-- 品牌图片 --> */}
                                <div className="vendorImg">
                                    {
                                        index%2==0? <div className="coverImg">
                                        <img
                                            src={item.cover_image} />
                                    </div> :''
                                     
                                    }
                                   
                                    <div className="productImg">
                                        <div>
                                            <img
                                                src={item.product_cover_image[0]}/>
                                           
                                        </div>
                                        <div>
                                            <img
                                                src={item.product_cover_image[1]}

                                            />
                                        </div>
                                    </div>
                                    {
                                        index%2==1? <div className="coverImg">
                                        <img
                                            src={item.cover_image} />
                                    </div> :''
                                     
                                    }
                                </div>
                            </div>
               </VenderItem>
            </div>
        )
    }
}
export default Find