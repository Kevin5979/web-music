import styled from "styled-components";

export const BannerWrapper = styled.div`
background: url(${props => props.bgImage}) center center/6000px;
  .banner{
    height: 285px;
    position: relative;
  }
  i{
    position: absolute;
    display: inline-block;
    width: 37px;
    height: 63px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${require("assets/img/banner_sprite.png")}) no-repeat;
    cursor: pointer;
  }
  
  .control-left{
    left: -70px;
    background-position: 0 -360px;
  }
  
  .control-left:hover{
    background-position: 0 -430px;
  }
  
  .control-right{
    right: -70px;
    background-position: 0 -508px;
  }
  
  .control-right:hover{
    background-position: 0 -578px;
  }
`;

export const BannerLeft = styled.div`
  height: 285px;
  width: 730px;
  overflow: hidden;
  .banner-item img{
    height: 285px;
    width: 730px;
  }
  .dots-active{
    li{
      width: 8px;
      height: 8px;
      margin: 0 6px;
      button{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      cursor: pointer;
      background-color: rgba(0,0,0,.6);
      }
      &.slick-active{
      width: 8px;
        button{
          background-color:#C20C0C;
        }
      }
    }
  }
`;

export const BannerRight = styled.div`
  width: 254px;
  height: 285px;
  overflow: hidden;
  background: url(${require("assets/img/download.png")});
  position: relative;
   .download{
    display: block;
    position: absolute;
    width: 215px;
    height: 56px;
    overflow: hidden;
    top: 185px;
    left: 20px;
    cursor:pointer;
  }
  .download:hover{
    background: url(${require("assets/img/download.png")}) no-repeat;
    background-position: 0px -286px;
    background-size: 253px 350px;
  }
  p{
      width: 254px;
      font-size: 12px;
      color: #8d8d8d;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 13px;
      z-index: 9;
    }
`;
