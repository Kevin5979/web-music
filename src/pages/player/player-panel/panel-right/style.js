import styled from "styled-components";

export const PanelRightWrapper = styled.div`
  flex: 1;
  font-size: 12px;
  padding: 20px 40px 40px 30px;
  box-sizing: border-box;
  h2{
    font-size: 12px;
    font-weight: bolder;
    line-height: 28px;
    border-bottom: 1px solid #ccc;
  }
  
  .s-music{
    margin-top: 20px;
    margin-bottom: 30px;
    li{
      margin: 10px 0;
    }
    .s-music-l{
      width: 156px;
      .name{
        color: #333;
      }
      p .fake-a{
        color: #999;
      }
    }
    .s-music-r{
      color: #999;
      i{
        display: inline-block;
        width: 11px;
        height: 11px;
        opacity: .5;
        cursor: pointer;
        &.player{
          background-position: -69px -455px;
          margin-right: 10px;
        }
        &.add{
          background-position: -87px -454px;
        }
        :hover{
          opacity: 1;
        }
      }
    }
  }

`;
