import styled from "styled-components";

export const AlbumThemeItemWrapper = styled.div`
    .album-link{
      display: inline-block;
      position: relative;
      img{
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
      .album-icon{
        display: none;
        position: absolute;
        right: 23px;
        bottom: 13px;
        width: ${props => props.styles.iconSize};
        height: ${props => props.styles.iconSize};
        background-position: ${props => props.styles.iconP};
        :hover{
          background-position: ${props => props.styles.iconP2};
        }
      }
      :hover .album-icon{
        display: inline-block;
      }
    }
    .bottom{
      a{
        display: block;
        line-height: 18px;
        font-size: 12px;
        width: 100px;
      }
      a.name{
        color: #000;
      }
      a.artist{
        width: 90%;
        color: #666;
      }
    }

`;
