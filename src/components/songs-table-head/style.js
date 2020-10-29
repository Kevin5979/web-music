import styled from "styled-components";

export const SongsTableHeadWrapper = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 2px solid #c20c0c;
  box-sizing: border-box;
  h4{
    font-size: 20px;
    line-height: 28px;
  }
  .flex-between{
    flex: 1;
    margin-left: 15px;
    color: #666;
    font-size: 12px;
    i{
     color: #c20c0c;
     font-weight: bold;
    }
    
    .to-link{
      .icon{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
        transform: translateY(4px);
      }
      a{
        color: #4996d1;
        text-decoration: underline;
        margin-right: 15px;
        line-height: 16px;
      }
    }
  }
  
`;
