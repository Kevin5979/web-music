import styled from "styled-components";

export const DjRadiosWrapper = styled.div`
  margin-top: 20px;
  h2.title{
    font-size: 24px;
    border-bottom: 2px solid #c20c0c;
  }
  
  ul.dj-radios{
    margin-top: 10px;
    flex-wrap: wrap;
    li{
      width: 435px;
      height: 120px;
      display: flex;
      justify-content: flex-start;
      margin: 20px 0;
      img{
        width: 120px;
        height: 120px;
        cursor: pointer;
      }
      .detail{
        margin-left: 15px;
        .name{
          font-size: 18px;
          color: #333;
          margin-top: 15px;
          font-weight: bolder;
          cursor: pointer;
          :hover{
            text-decoration: underline;
          }
        }
        .names{
          margin-top: 20px;
        }
        i{
          display: inline-block;
          width: 15px;
          height: 15px;
          margin: 0 5px;
        }
        i.left{
          background-position: -50px -300px;
        }
        i.right{
          width: 13px;
          height: 13px;
          background-position: -110px -190px;
        }
        .nickname{
          font-size: 12px;
          cursor: pointer;
          :hover{
            text-decoration: underline;
          }
        }
      }
      .bottom{
        color: #999;
        margin-top: 10px;
        span{
          margin: 0 10px;
        }
      }
    }
  }

`;
