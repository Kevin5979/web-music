import styled from "styled-components";

export const LeftRankingWrapper = styled.div`
  width: 240px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
    .title{
      padding: 0 10px 12px 15px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: bold;
      color: #000;
      font-family: simsun,\\5b8b\\4f53;
    }
    
    .world{
      margin-top: 20px;
    }
  
  .main{
    margin-top: 40px;
    .item{
      padding: 10px 0 10px 20px;
      box-sizing: border-box;
      cursor: pointer;
      :hover{
        background-color: rgba(0,0,0,.08);
      }
      &.active{
        background-color: #dbd8d8;
      }
      img{
        width: 40px;
        height: 40px;
      }
      .right{
        margin-left: 10px;
        .name{
          font-size: 12px;
          color: #000;
          margin-bottom: 5px;
        }
        .update{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  
  
  
  
  
`;
