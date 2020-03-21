import styled from "styled-components"
export const FindMain = styled.div `

padding: .8rem  .32rem 0;
`
export const FindHead = styled.div `
.head{
background-color:rgb(245,245,245);
width: 100%;
height: .68rem;
display: flex;
position: fixed;
z-index:10;
top: 0;
left: 0;
}
.head>div{
    width: 50%;
text-align: center;

}
.head>div>a{
    display: inline-block;
    font-size: 14px;
    color: rgb(1, 1, 1);
    text-align: center;
    padding: 6px 0px;
}
.head>div>.active{
    display: inline-block;
    font-size: 14px;
    
    text-align: center;
    padding: 6px 0px;
    color: rgb(247, 52, 81);
    font-weight: bold;
    border-bottom: 2px solid rgb(247, 52, 81);
}
 .con .article-item{
     
    display: flex;
    padding-bottom: .42rem;
    margin-top: .42rem;
    border-bottom: 1px solid rgb(240,240,240);
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

 .con .article-item .detail >.tab>div{
    position: relative;
    display: inline-block;
    font-size: 12px;
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




// 近期热文 文章卡片部分
.rank{
   height: .88rem; 
   padding-top: .36rem;
   line-height:.88rem ;
   display: flex;
   align-items: center;
   margin-bottom: -0.2rem;
   img{
       height:.52rem;
       margin-right: .3rem;
   }
   .num{
    width: .96rem;
    height: .36rem;
    font-size: .24rem;
    color: rgb(149, 149, 149);
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(247, 247, 247);
    border-radius: 11.5px;
   }
}
`