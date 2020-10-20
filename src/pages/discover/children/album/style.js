import styled from "styled-components";

export const AlbumWrapper = styled.div`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 40px;
  box-sizing: border-box;
  h3.hot-album{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-size: 24px;
    height: 45px;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 6px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  h3.all-album{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-size: 24px;
    height: 45px;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 6px;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: 20px;
    ul{
      margin-left: 10px;
      li{
        font-size: 12px;
        color: #666;
        .item{
          margin: 0 13px;
          :hover{
            cursor: pointer;
            text-decoration: underline;
          }
        }
        i{
          color: #999;
        }
      }
      li:last-child{
        i{
          font-size: 0px !important;
        }
      }
    }
  }
  ul{
    flex-wrap: wrap;
    li.album-item{
      margin-bottom: 20px;
    }
  }
  ul.all{
    margin-bottom: 30px;
  }
`;
