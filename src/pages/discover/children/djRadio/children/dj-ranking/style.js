import styled from "styled-components";

export const DjRankingWrapper = styled.div`
  width: 426px;
  .dj_top{
    height: 30px;
    border-bottom: 2px solid #c20c0c;
    line-height: 30px;
    box-sizing: border-box;
    a{
      color: #333;
      font-size: 24px;
    }
    p{
      color: #666;
      :hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .dj_rank_main{
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .dj_rank_item{
      padding: 10px 20px;
      :hover{
        .left{
          i{
            display: inline-block !important;
          }
        }
      }
      .left{
        position: relative;
        img{
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        i{
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          margin-left: 50%;
          margin-top: 50%;
          transform: translate(-50%, -50%);
          width: 22px;
          height: 22px;
          background-position: 0 -85px;
          cursor: pointer;
        }
      }
      .main{
        margin-left: 13px;
        width: 255px;
        p:hover{
          cursor: pointer;
          text-decoration: underline;
        }
        .artist{
          color: #666;
        }
      }
      .right{
        margin-left: 13px;
        color: #999;
        border: 1px solid #999;
        padding: 1px 4px;
        box-sizing: border-box;
        cursor: pointer;
        :hover{
          color: #333;
          border-color: #333;
        }
      }
    }
  }

`;