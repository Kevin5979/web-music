import styled from "styled-components";

export const MineUnLoginWrapper = styled.div`
  width: 807px;
  height: 372px;
  padding-top: 104px;
  padding-bottom: 480px;
  box-sizing: border-box;
  margin: 0 auto;
  background: url(${require("assets/img/mine_sprite.png")}) 0 104px no-repeat;
  position: relative;
  h2{
    font-size: 0;
  }
  a{
    margin: 174px 0 0 482px;
    display: block;
    width: 167px;
    height: 45px;
    font-size: 0;
    :hover{
      background: url(${require("assets/img/mine_sprite.png")}) 0 -278px no-repeat;
    }
  }
`;
