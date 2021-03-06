import styled from "styled-components";

export const AppCommentItemWrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .comm-left{
    margin-right: 10px;
    .avatar{
      display: block;
      width: 50px;
      height: 50px;
    }
  }
  .comm-right{
     width: ${props => props.width};
    .comm-top{
      align-items: flex-start;
      .vip-rights{
        transform: translateY(4px);
      }
      p{
        color: #333;
      }
      .vip-rights{
        width: 26px;
        height: 12px;
        margin-left: 3px;
      }
      .nickname{
        color: #0c73c2;
        font-size: 12px;
      }
    }
    .comm-bottom{
      width: ${props => props.width};
      padding: 15px 0;
      box-sizing: border-box;
      .time{
        font-size: 12px;
        color: #bbb;
      }
      .sp{
        color: #ccc;
      }
      .dianzan{
        display: inline-block;
        width: 15px;
        height: 15px;
        background-position: -150px 0;
        margin-right: 3px;
        cursor: pointer;
        :hover{
          background-position: -150px -20px;
        }
      }
    }
  }
`;
