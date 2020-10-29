import styled from "styled-components";

export const PanelLeftWrapper = styled.div`
  width: 830px;
  border-right: 1px solid #ddd;
  padding: 30px 0 30px 0;
  box-sizing: border-box;
  .p-top{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .pl-left{
      margin-top: 100px;
      width: 410px;
      .cover-img{
        position: relative;
        width: 198px;
        height: 198px;
        left: 50%;
        transform: translateX(-50%);
        .img{
          width: 134px;
          height: 134px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        .mask{
          display: block;
          width: 206px;
          height: 205px;
          position: absolute;
          margin-left: -4px;
          margin-top: -4px;
          background-position: -140px -580px;
        }
      }
      .link{
        display: inline-block;
        text-align: center;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          transform: translateY(5px);
          background-position: -34px -863px;
        }
        a{
          text-decoration: underline;
          color: #0c73c2;
        }
      }
      .menu{
        width: 410px;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
    .pl-right{
      width: 420px;
      .v1,.v2,.v3,.lyric{
        margin-left: 50%;
        transform: translateX(-50%);
      }
      .v1{
        position: relative;
        .icon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
        }
        h2{
          margin-left: 10px;
          font-size: 24px;
        }
        .back{
          position: absolute;
          top: 0;
          right: 0;
          width: 23px;
          height: 23px;
          display: block;
          cursor: pointer;
          border: 1px solid #ccc;
          background-color: #ccc;
        }
      }
      .v2{
        margin-top: 10px;
        .title{
          color: #999;
        }
        .artists{
          margin-left: 2px;
          a{
            color: #0c73c2;
          }
        }
      }
      .v3{
        margin-top: 10px;
        .title{
          color: #999;
        }
        .album{
          margin-left: 2px;
          color: #0c73c2;
        }
      }
      .lyric{
        margin-top: 15px;
        width: 418px;
        height: 380px;
        text-align: center;
        overflow: hidden;
        ul{
          font-size: 13px;
          transition: all .6s;
        }
        li{
          line-height: 25px;
          &.active{
            font-size: 16px;
            font-weight: bolder;
            color: blueviolet;
          }
        }
      }
    }
  }
  .p-bottom{
    margin-top: 60px;
      .hot-comm{
      .c-title{
        font-size: 12px;
        font-weight: bolder;
        margin-top: 40px;
        border-bottom: 1px solid #ccc;
      }
      li:last-child{
        border-bottom: none !important;
      }
    }
  }
`;
