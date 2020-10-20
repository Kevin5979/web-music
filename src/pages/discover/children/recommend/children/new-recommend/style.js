import styled from "styled-components";

export const NewRecommendWrapper = styled.div`
  .new-albums-content{
    border: 1px solid #ccc;
    margin: 20px 0 40px 0;
    position: relative;
    height: 186px;
    box-sizing: border-box;
    .icon{
      position:absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 17px;
      height: 17px;
      cursor:pointer;
    }
    .icon-left{
      background-position: -260px -75px;
      left: 5px;
      :hover{
        background-position: -280px -75px;
      }
    }
   
    .icon-right{
      background-position: -300px -75px;
      right: 5px;
      :hover{
        background-position: -320px -75px;
      }
    }
    
    .ant-carousel{
      width: 645px;
      height: 150px;
      margin: 0 auto;
      .carousel{
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        margin-top: 28px;
          .carousel-item{
          width: 118px;
          height: 150px;
          margin-left: 11px;
        }
      }
    }
  }
`;
