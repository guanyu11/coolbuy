import styled from "styled-components"

export const CareChoosediv=styled.div`
padding: 0  .32rem ;
.con .article-item{
     
    display: flex;
    padding-bottom: .42rem;
    margin-top: .42rem;
    border-bottom: 1px solid rgb(240,240,240);
    border-bottom: 1px solid #ddd ;
}

 .con .article-item .detail{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 0%;
}

 .con .article-item .detail  .title {
    font-size: .3rem;
    line-height: .48rem;
    color: rgb(33, 33, 33);
    text-overflow: ellipsis;
    font-weight: bold;
    padding-bottom: .1rem;
    overflow: hidden;
    /* width: 4.22rem; */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.con .article-item .detail >.tab{
    display:flex;
    flex-wrap:nowrap;
}

 .con .article-item .detail >.tab>div{
    position: relative;
    display: inline-block;
    white-space: nowrap;
    font-size: .24rem;
    color: rgb(22, 179, 124);
    margin: 0px 5px 0px 0px;
    padding: 0px 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(22, 179, 124);
    border-image: initial;
    border-radius: 20px;
}
 .con .article-item>.img{
    height: 1.92rem;
    width: 2.4rem;
    margin-left: 12px;
    background-size: cover;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    background-repeat: no-repeat;
}
 .con .article-item .col-detail{

}
 .con .article-item .col-detail .img-con{
     display: flex;
     width: 100%;
    justify-content: space-around;
    padding-bottom: .2rem;
    padding-top: .14rem;
}
 .con .article-item .col-detail .img-con img{
    height: 2.14rem;
   
}


`