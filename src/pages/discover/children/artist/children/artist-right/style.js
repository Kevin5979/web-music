import styled from "styled-components";

export const ArtistRightWrapper = styled.div`
  border-left: 1px solid #ccc;
  box-sizing: border-box;
  padding: 40px;
  flex: 1;
  .title{
    font-size: 24px;
    height: 40px;
    width: 100%;
    border-bottom: 2px solid #c20c0c;
  }
  .letters{
    margin-top: 20px;
    li{
      margin: 0 3px;
      padding: 2px 4px;
      box-sizing: border-box;
      color: #333;
      font-size: 14px;
      cursor: pointer;
      &.active{
        color: #fff;
        background: #c20c0c;
      }
      :hover{
        text-decoration: underline;
      }
    }
  }
  ul.artists{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 23px;
    li.right-item{
    margin-bottom: 25px;
      .top{
        width: 130px;
        height: 130px;
        position: relative;
        .cover{
          display: block;
          width: 130px;
          height: 130px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9;
          background-position: 0 -680px;
        }
      }
      .bottom{
        margin-top: 5px;
        padding: 0 8px;
        width: 130px;
        box-sizing: border-box;
        a{
          color: #000;
        }
        i{
          width: 18px;
          height: 18px;
          display: inline-block;
          background-position: 0 -740px;
          cursor: pointer;
        }
      }
    }
  }
`;
