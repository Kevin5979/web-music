import styled from "styled-components";

export const ArtistDetailLeftWrapper = styled.div`
  width: 710px;
  padding: 30px 30px 40px 39px;
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  
  .adl-top{
    .title{
      color: #333;
      font-size: 24px;
    }
    .img{
      width: 640px;
      height: 300px;
      position: relative;
      img{
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        background-image:url(${require("assets/img/ban_mask.png")});
        background-repeat: no-repeat;
        width: 640px;
        height: 300px;
        z-index: 9;
      }
      .profile{
        position: absolute;
        bottom: 18px;
        right: 116px;
        width: 96px;
        height: 32px;
        background-position: 0 -1156px;
        z-index: 10;
        :hover{
          cursor: pointer;
          background-position: 0 -1196px;
        }
      }
      .collect{
        position: absolute;
        bottom: 18px;
        right: 20px;
        width: 76px;
        height: 32px;
        background-position: 0 -500px;
        z-index: 10;
        :hover{
          cursor: pointer;
          background-position: 0 -540px;
        }
      }
    }
  }
  .tabs{
    width: 640px;
    .ant-tabs-tab{
      padding: 0;
      margin: 0;
      line-height: 40px;
      width: 120px;
      .ant-tabs-tab-btn{
        width: 200px;
        text-align: center;
        :hover{
          color: #C20C0C;
        }
      }
      &.ant-tabs-tab-active{
        .ant-tabs-tab-btn{
          color: #C20C0C;
          background: #ccc;
        }
      }
    }
    div.player{
     cursor: pointer;
     .p-left{
       width: 88px;
       height: 31px;
       color: #fff;
       font-size: 12px;
       background-color: rgb(62, 141, 215);
       padding: 0 5px;
       border-right: 1px solid #666;
       box-sizing: border-box;
       :hover{
         opacity: .9;
       }
       i{
         display: inline-block;
         width: 20px;
         height: 20px;
         margin-right: 3px;
         background-position: 0 -1622px;
       }
     }
     .p-right{
       i{
         display: inline-block;
         width: 31px;
         height: 32px;
         transform: translateY(4px);
         background-position: 0 -1588px;
         :hover{
           opacity: .9;
         }
       }
     }
    }
    .hot-album{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .album-item{
        margin-bottom: 15px;
      }
    }
    .all-mv{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }
    .a-desc{
      h2{
        margin: 15px 0;
        i{
          display: inline-block;
          width: 3px;
          height: 15px;
          line-height: 20px;
          background-color: #c10d0c;
        }
        .title{
          color: #333;
          font-size: 14px;
          line-height: 20px;
          font-weight: bolder;
          margin-left: 5px;
        }
      }
      .t-desc{
        line-height: 25px;
        color: #666;
        font-size: 12px;
        text-indent: 2em;
      }
      .decs{
        h3{
          color: #333;
          font-size: 14px;
          font-weight: bolder;
          margin: 30px 0 5px 0;
        }
        .txt{
          line-height: 25px;
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
`;
