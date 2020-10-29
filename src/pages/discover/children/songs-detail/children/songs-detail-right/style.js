import styled from "styled-components";

export const SongsDetailRightWrapper = styled.div`
  padding: 20px 40px 40px 30px;
  box-sizing: border-box;
  h3{
    color: #333;
    font-size: 12px;
    font-weight: bolder;
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .r2{
    margin-top: 30px;
    margin-bottom: 50px;
    .rel{
      li{
        width: 180px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 13px 0;
        .left{
          img{
            width: 50px;
            height: 50px;
            margin-right: 6px;
            cursor: pointer;
          }
        }
        .right{
          p{
            width: 150px;
            .name{
              color: #000;
              font-size: 14px;
            }
            .nickname{
              color: #666;
              font-size: 12px;
            }
            span{
              margin-right: 6px;
              color: #999;
            }
          }
        }
      }
    }
  }
`;
