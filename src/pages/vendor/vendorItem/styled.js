import styled from "styled-components"
export const VenderItem =styled.div`

.VendorItemCon{
    padding: .32rem .24rem .24rem;
}

.logoCon {
    display: flex;
    margin-bottom: .3rem;

    .logo {
        margin-right: .2rem;
        display: inline-block;
        background-color: #fff;

        img {
            width: 1rem;
        }
    }

    .text {
        padding:.1rem 0;
        color: #fff;
        display:flex;
        flex-direction:column;
        justify-content: space-between;

    }
}
.vendorImg {
    display: flex;
    margin-top: .32rem;
    flex-shrink: 0;
    justify-content: space-between;

    .coverImg {
        height: 4.6rem;
        width: 4.6rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .productImg {
        height: 4.6rem;
        width: 2.18rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width: 100%;
        }
    }
}



`