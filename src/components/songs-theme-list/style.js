import styled from "styled-components";

export const SongsThemeListWrapper = styled.div`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 40px;
  .sec-head{
      display: grid;
      grid-template-columns: 12.5% 45% 14.5% 28%;
      height: 39px;
      line-height: 38px;
      font-size: 12px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      div:nth-child(1){
        background-position: 0 4px;
      }
      div:nth-child(n+2){
        padding-left: 10px;
        box-sizing: border-box;
        background-position: 0 -52px;
      }
    }
  .list{
    .item{
      display: grid;
      grid-template-columns: 12.5% 45% 14.5% 28%;
      height: 28px;
      line-height: 28px;
      :hover{
        .dt p{
          display: none;
        }
        .dt .icons{
         display: flex;
         cursor: pointer;
        }
      }
      .order{
          color: #666;
          font-size: 14px;
       }
      .icons{
        height: 25px;
        line-height: 25px;
      }
      :nth-child(even){
        background: rgba(0,0,0,.08);
      }
      :nth-child(-n+3){
        height: 40px;
        line-height: 40px;
        .order{
          color: #c20c0c;
          font-size: 16px;
        }
        .icons{
          height: 35px;
          line-height: 35px;
        }
      }
      div:nth-child(1){
        text-align: center;
      }
      div:nth-child(n+2){
      padding-left: 10px;
      margin-right: 10px;
      box-sizing: border-box;
      overflow: hidden;
      }
      .al-name{
        font-size: 12px;
        .play{
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
          cursor: pointer;
          :hover{
            background-position: 0 -128px;
          }
        }
        a{
          margin-left: 6px;
        }
        .alia{
          margin-left: 5px;
          color: #aeaeae;
          flex: 1;
        }
        .mv{
         width: 23px;
         height: 17px;
         margin-left: 5px;
         background-position: 0 -151px;
         :hover{
           background-position: -30px -151px;
           cursor: pointer;
         }
        }
      }
      .dt{
        .icons{
          width: 100%;
          height: 100%;
          padding: 0;
          display: none;
          align-items: center;
          i{
            margin-right: 3px;
            width: 18px;
            height: 16px;
          }
          i:nth-child(1){
            width: 13px;
            height: 13px;
            background-position: 0 -700px;
            :hover{
              background-position: -22px -700px;
            }
          }
          i:nth-child(2){
            background-position: 0 -174px;
            :hover{
              background-position: -20px -174px;
            }
          }
          i:nth-child(3){
            background-position: 0 -195px;
            :hover{
              background-position: -20px -195px;
            }
          }
          i:nth-child(4){
            background-position: -81px -174px;
            :hover{
              background-position: -104px -174px;
            }
          }
        }
      }
    }
  }
`;
