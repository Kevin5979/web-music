import styled from "styled-components";

export const RightRankingWrapper = styled.div`
  width: 740px;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  .pages{
    padding-bottom: 30px;
  }
`;

export const RankingTopWrapper = styled.div`
  margin: 40px;
  height: 160px;
  display: flex;
  justify-content: flex-start;
  
  .left{
    width: 158px;
    height: 158px;
    padding: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    .img{
      width: 150px;
      height: 150px;
    }
    i.cover{
      display: inline-block;
      width: 150px;
      height: 150px;
      position: absolute;
      top: 4px;
      left: 4px;
      background-position: -230px -380px;
    }
  }
  .right{
    flex: 1;
    height: 160px;
    margin-left: 30px;
    padding: 13px 0;
    box-sizing: border-box;
    overflow: hidden;
    h3{
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }
    .update{
      margin-top: 5px;
      i{
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }
      span{
        color: #666;
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .detail{
      text-indent: 16px;
      width: 470px;
      height: 45px;
      margin-top: 5px;
      font-size: 14px;
    }
  }
`;

export const RankingMainWrapper = styled.div`
  padding: 0 30px 40px 40px;
  box-sizing: border-box;
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
  
  li:last-child{
    border-bottom: none !important;
  }
`;
