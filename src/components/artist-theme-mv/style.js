import styled from "styled-components";

export const ArtistThemeMvWrapper = styled.li`
  position: relative;
  width: 137px;
  margin-bottom: 20px;
  .img{
    width: 137px;
    height: 103px;
    img{
      width: 137px;
      height: 103px;
    }
    i{
      width: 44px;
      height: 44px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-70%);
      background-position: -30px -135px;
      cursor: pointer;
      :hover{
        background-position: -30px -85px;
      }
    }
  }
  .name{
    font-size: 14px;
    width: 137px;
    padding: 0 3px;
    margin-top: 5px;
    box-sizing: border-box;
  }
`;
