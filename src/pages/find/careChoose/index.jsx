import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../connect"
import { CareChoosediv } from "./styled"
@connect(mapStateToProps, mapDispatchToProps)
class CareChoose extends Component {
    constructor() {
        super()
        this.state = {
            query: {
                offset: 0,
                page_type: "article",
                limit: 20,
                order_by: "-published_at"
            }
        }
    }
    render() {
        // console.log(this.props, "this.props carechoose")
        let { articleList } = this.props;
        // console.log(articleList, "articleList")
    
        return (
            <CareChoosediv>
                <div className="con">
                    {/* <!-- con为文章卡片的大容器  --> */}
                    {/* <!-- 文章卡片 只有一张图片时 --> */}
                    {articleList.map((item) => {
                        {
                            return item.cover_image.length!=3? <div key={item.id} className="article-item">
                                <div className="detail">
                                    <div className="title">{item.title}</div>
                                    <div className="tab">
                                        {
                                            item.tag.map((child,index)=> (<div key={index}>{child}</div>))
                                        }
                                    </div>
                                </div>
                                <img className="img" src={item.cover_image} alt="" />
                            </div> : <div key={item.id} className="article-item">
                                    <div className="col-detail detail">
                                        <div className="title">{item.title}</div>
                                        <div className="img-con">
                                            {
                                                item.cover_image.map((child,index)=>( <img key={index} src={child}/> )) 
                                            }
                                            
                                            
                                        </div>
                                        <div className="tab">
                                            <div>年货</div>
                                            <div>家居好物</div>
                                        </div>
                                    </div>
                                </div>
                        }
                    }
                    )
                    }
                    {/* <!-- 文章卡片 有多张图片时 --> */}

                </div>
            </CareChoosediv>
        )
    }

    componentDidMount() {
        this.props.handleCareChooseIndex(this.state.query)
    }

}
export default CareChoose