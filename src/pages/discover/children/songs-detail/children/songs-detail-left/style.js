import styled from "styled-components";

export const SongsDetailLeftWrapper = styled.div`
  width: 710px;
  border-right: 1px solid #ddd;
  padding: 47px 30px 40px 39px;
  box-sizing: border-box;
  .sd-top{
    display: flex;
    justify-content: flex-start;
    .left{
      img{
        padding: 4px;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
    }
    .right{
      padding-left: 23px;
      .sd-top-1{
        align-items: flex-start;
        .icon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -243px;
        }
        .title{
          font-size: 20px;
          margin-left: 15px;
        }
      }
      .sd-top-2{
        margin-top: 8px;
        img{
          width: 35px;
          height: 35px;
        }
        a{
          color: #0c73c2;
          margin-left: 15px;
        }
        .icon{
          width: 12px;
          height: 13px;
          background-position: -65px -840px;
        }
        .c-time{
          margin-left: 15px;
          color: #999;
        }
      }
      .sd-top-3{
        margin-top: 15px;
      }
      .sd-top-4{
        margin-top: 15px;
        .tag{
          border: 1px solid #ccc;
          padding: 1px 8px;
          box-sizing: border-box;
          border-radius: 5px;
          margin: 0 8px;
          cursor: pointer;
        }
      }
      .sd-top-5{
        margin-top: 10px;
        span{
          color: #666;
          line-height: 18px;
        }
      }
    }
  }
  
  .sd-list{
    margin-top: 20px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    .song-list{
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
  .sd-more{
    margin-top: 30px;
    text-align: center;
    .download{
      margin-top: 20px;
      display: inline-block;
      width: 120px;
      height: 30px;
      background-image: linear-gradient(90deg,#ff5a4c 0%,#ff1d12 100%);
      border-radius: 18px;
      line-height: 30px;
      font-size: 12px;
      color: #ffffff;
      text-align: center;
      :hover{
        text-decoration: none;
      }
    }
  }
  
  .song-comm{
    margin-top: 40px;
  }
  .new-comm{
    height: 20px;
    font-size: 12px;
    font-weight: bolder;
    margin-top: 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #cfcfcf;
  }
  .comment{
    li:last-child{
      border-bottom: none !important;
    }
  }
`;
