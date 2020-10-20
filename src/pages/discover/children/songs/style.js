import styled from "styled-components";

export const SongsWrapper = styled.div`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 40px;
  box-sizing: border-box;
  .header{
    padding-bottom: 3px;
    border-bottom: 2px solid #c20c0c;
    box-sizing: border-box;
    .h-l{
        h4.all{
        font-size: 24px;
        color: #333;
      }
      .sel-class{
        height: 31px;
        line-height: 31px;
        border: 1px solid #ddd;
        padding: 0 8px;
        border-radius: 3px;
        box-sizing: border-box;
        color: #0c73c2;
        cursor: pointer;
        margin-left: 10px;
        :hover{
          border-color: #ccc;
        }
        i{
          display: inline-block;
          width: 8px;
          height: 5px;
          margin-left: 3px;
          background-position: -70px -543px;
        }
      }
    }
    
    .h-r{
      span{
        display: block;
        width: 46px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        border-radius: 5px;
        background-color: #fff;
        border: 1px solid #bbb;
        color: #333;
        margin-left: 10px;
        cursor: pointer;
        :hover{
          border-color: #333;
        }
        &.active{
          color: #fff;
          background-color: #c20c0c;
          :hover{
            border-color: #bbb;
          }
        }
      }
    }
  }
`;

export const SongsMainWrapper = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  .item{
    margin: 0 19px 25px 19px;
  }
`;

export const ModalWrapper = styled.div`
  h3{
    width: 80px;
    height: 24px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 20px;
    box-sizing: border-box;
    &.active{
      color: #0c73c2;
      border-color: #aaa;
    }
    :hover{
      border-color: #aaa;
    }
  }
  .classes{
    font-size: 12px !important;
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .title{
      font-weight: bolder;
      width: 60px;
      .icon{
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
    ul{
      width: 860px;
      margin-left: 20px;
      margin-top: -2px;
      flex-wrap: wrap;
      .class-item{
        margin: 3px 10px;
        .active{
          color: #0c73c2;
        }
        :hover{
          text-decoration: underline;
          cursor: pointer;
        }
        i{
          margin-left: 30px;
          color: #ddd;
        }
      }
    }
    
  }
  
  .classes:nth-child(2){
    .icon{
      background-position: -20px -735px;
    }
  }
  .classes:nth-child(3){
    .icon{
      background-position: 0 -60px;
    }
  }
  .classes:nth-child(4){
    .icon{
      background-position: 0 -88px;
    }
  }
  .classes:nth-child(5){
    .icon{
      background-position: 0 -117px;
    }
  }
  .classes:nth-child(6){
    .icon{
      background-position: 0 -141px;
    }
  }
`;

