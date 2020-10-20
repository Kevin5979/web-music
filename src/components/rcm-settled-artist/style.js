import styled from "styled-components";

export const RcmSettledArtistWrapper = styled.div`
  margin: 15px 20px;
  .header{
    height: 23px;
    color: #333;
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  
  .artists{
    margin: 6px 0 14px 0;
    .item{
      width: 210px;
      height: 62px;
      margin-top: 14px;
      cursor: pointer;
      .img{
        width: 62px;
        height: 62px;
      }
      .desc{
        flex: 1;
        padding-left: 14px;
        box-sizing: border-box;
        p{
        width: 120px;
        margin-top: 8px;
        font-size: 12px;
          &.name{
            font-size: 14px; 
           font-weight: bold;
          }
        }
      }
    }
  }
  .add-artist{
    width: 210px;
    height: 32px;
    a{
      display: block;
      height: 32px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      text-decoration: none;
      :hover{
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
      }
      i{
        display: block;
        text-align: center;
        line-height: 32px;
        color: #333;
        font-weight: bold;
      }
    }
  }
  
`;
