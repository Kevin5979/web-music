import styled from "styled-components";

export const DjHotClassWrapper = styled.div`
  margin-top: 30px;
  h2{
    border-bottom: 2px solid #c20c0c;
    .title{
      font-size: 24px;
      color: #333;
      &.o{
        font-size: 26px;
        font-weight: bolder;
      }
    }
    span.more{
      font-size: 12px;
      :hover{
        color: #000;
        text-decoration: underline;
      }
    }
  }
  
  .dj-hot-item{
    flex-wrap: wrap;
    .dj_hot{
      width: 435px;
      display: flex;
      justify-content: flex-start;
      padding: 20px 0;
      box-sizing: border-box;
      p{
        margin-top: 15px;
        margin-left: 15px;
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }

`;
