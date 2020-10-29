import styled from "styled-components";

export const AlbumDetailLeftWrapper = styled.div`
  width: 710px;
  border-right: 1px solid #eee;
  padding: 40px 30px 40px 39px;
  box-sizing: border-box;
  .adl-top{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .top-l{
      position: relative;
      margin-right: 20px;
      img{
        width: 177px;
        height: 177px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
      }
      .album-bg{
        display: inline-block;
        top: 0;
        left: 0;
        z-index: 9;
        width: ${props => props.styles.bgWidth};
        height: ${props => props.styles.imgSize + "px"};
        background-position: ${props => props.styles.bgp};
      }
    }
    .top-r{
      .title{
        margin-bottom: 15px;
        .icon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -186px;
        }
        h3{
          line-height: 24px;
          font-size: 20px;
          margin-left: 10px;
        }
      }
      p{
        margin: 4px 0;
        color: #666;
        i{
          color: #0c73c2;
        }
      }
      .menu{
        margin-top: 15px;
      }
    }
  }
  .desc-title{
    font-size: 12px;
    font-weight: bolder;
    margin: 15px 0 6px 0;
  }
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
`;
