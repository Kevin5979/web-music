import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  box-sizing: border-box;
  .top{
    background-color: #C20C0C;
  }
`;

export const TopMenu = styled.div`
  margin-left: 180px;
  
  .item{
  margin: 0 3px;
    a{
      line-height: 24px;
      display: block;
      width: 84px;
      height: 28px;
      text-decoration: none;
      text-align: center;
    }
    
    a span{
      color: #fff;
      font-size: 12px;
      height: 20px;
    }
    
    a:hover span,
    a.active span{
      padding: 3px 13px;
      box-sizing: border-box;
      border-radius: 10px;
      background-color: #9B0909;
    }
  }
`;

