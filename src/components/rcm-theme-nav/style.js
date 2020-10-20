import styled from "styled-components";

export const RcmThemeNavWrapper = styled.div`
  border-bottom: 2px solid #C10D0C;
  .left{
    .icon{
      display: block;
      width: 33px;
      height: 33px;
      background-position: -225px -156px;
      box-sizing: border-box;
    }
    h3{
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color: #333;
      a:hover{
        text-decoration: none;
      }
    }
    li{
      :after{
        content: "|";
        color: #ccc;
      }
      a{
        font-size: 12px;
        padding: 0 16px;
      }
    }
    
    li:last-child:after{
      content: "";
    }
  }
  
  .right{
  padding-right: 10px;
    i{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
