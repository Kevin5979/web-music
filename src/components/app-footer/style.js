import styled from "styled-components";

export const FooterWrapper = styled.div`
  font-size: 12px;
  color: #666;
  border-top: 1px solid #d3d3d3;
  box-sizing: border-box;
  margin-bottom: 80px;
  .left{
    margin-top: 15px;
    .links{
      li{
        :after{
          content: "|";
          margin: 0 8px 0 10px;
          color: #c2c2c2;
        }
        &.last-li{
          :after{
            content: "";
          }
        }
        a{
          color: #999;
        }
      }
    }
    .content{
      p{
        margin: 5px 0;
        font-size: 12px;
        color: #333;
        span.item{
          margin-right: 14px;
        }
        
        img{
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }
      }
    }
  }
  
  .right{
    margin-top: 33px;
    li{
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
        a{
          display: block;
          width: 44px;
          height: 44px;
          background-size: 104px 444px;
          margin-bottom: 6px;
        }
        i{
          display: block;
          width: 40px;
          height: 10px;
          background-size: 170px 110px;
        }
        
      :nth-child(1){
        a{
          background-position:-60px 0;
        }
        i{
          background-position:-5px -20px;
        }
      }
      
      :nth-child(2){
        a{
          background-position:-60px -100px;
        }
        i{
          background-position: -5px -100px;
        }
      }
      
      :nth-child(3){
        a{
          background-position:0 0;
        }
        i{
          width: 50px;
          background-position:0 0;
        }
      }
      :nth-child(4){
        a{
          background-position:-60px -50px;
        }
        i{
          width: 19px;
          background-position:-15px -60px;
        }
      }
      :nth-child(5){
        a{
          background-position:0 -100px;
        }
        i{
          background-position: -5px -80px;
        }
      }
    }
  }

`;
