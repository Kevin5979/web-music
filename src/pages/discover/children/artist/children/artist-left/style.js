import styled from "styled-components";

export const ArtistLeftWrapper = styled.div`
  width: 180px;
  .main{
    padding: 40px 10px;
    .left-item{
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    margin-bottom: 30px;
    :last-child{
      border-bottom: none;
    }
      h3{
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        font-weight: bolder;
      }
      .item-name{
        padding: 5px 25px;
        background-image:url(${require("assets/img/singer.png")});
        background-repeat: no-repeat;
        background-position: 0 -30px;
        cursor: pointer;
        &.active{
          background-position:0 0;
          text-decoration: none;
          color: #c20c0c;
        }
      }
    }
  }
`;