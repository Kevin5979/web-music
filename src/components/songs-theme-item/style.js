import styled from "styled-components";

export const SongsThemeItemWrapper = styled.div`
  .top{
    width: 140px;
    height: 140px;
    position: relative;
    z-index: 9;
    cursor:pointer;
    .img{
      width: 140px;
      height: 140px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .cover{
      width: 140px;
      height: 140px;
      position: absolute;
      top: 0;
      left: 0;
      background-position:0 0;
      z-index: 2;
    }
    .detail{
      width: 140px;
      height: 27px;
      line-height: 27px;
      color: #fff;
      padding: 0 10px;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 9;
      background-position: 0 36.58%;
      .left-icon{
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin-right: 5px;
      }
      .right-icon{
        width: 16px;
        height: 17px;
        background-position:0 0;
        cursor: pointer;
      }
      .right-icon:hover{
        background-position:0 -60px;
      }
    }
  }
  
  .bottom{
    width: 140px;
    font-size: 14px;
    margin-top: 3px;
  }

`;
