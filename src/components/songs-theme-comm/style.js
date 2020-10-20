import styled from "styled-components";

export const SongsThemeCommWrapper = styled.div`
  .comm-top{
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    h4{
      font-size: 20px;
      line-height: 28px;
      color: #333;
    }
    .count{
      color: #666;
      margin-left: 16px;
    }
  }
  .comment{
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    .left{
      .avatar{
        width: 50px;
        height: 50px;
      }
    }
    .right{
      margin-left: 20px;
      .text-input{
        width: 580px;
        height: 50px;
        padding: 5px 6px 6px;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        box-sizing: content-box;
        display: block;
        resize: none;
      }
      .bottom{
        margin-top: 13px;
        .r-left{
          i{
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 10px;
            cursor: pointer;
            &.exp{
              background-position: -40px -490px;
            }
            &.at{
              background-position: -60px -490px;
            }
          }
        }
        .r-right{
          span{
            color: #999;
            font-size: 12px;
            line-height: 25px;
          }
          button{
            width: 46px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            cursor: pointer;
            margin-left: 10px;
            background-position: -84px -64px;
            :hover{
              background-position: -84px -94px;
            }
          }
        }
      }
    }
  }
`;
