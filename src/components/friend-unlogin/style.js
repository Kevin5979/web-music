import styled from "styled-components";

export const FriendUnLoginWrapper = styled.div`
   margin: 0 40px;
   padding-bottom: 100px;
   box-sizing: border-box;
  .f-cover{
    height: 484px;
    margin: 0 auto;
    width: 902px;
    background: url(${require("assets/img/friend_sprite.jpg")}) 0 70px no-repeat;
    position: relative;
  }
  
  h2{
    font-size: 0;
  }
  p{
    position: absolute;
    top: 250px;
    left: 535px;
    width: 335px;
    font-size: 14px;
    color: #666;
  }
  a{
    display: block;
    position: absolute;
    top: 330px;
    left: 535px;
    font-size: 0;
    width: 157px;
    height: 48px;
    :hover{
     background: url(${require("assets/img/friend_sprite.jpg")}) 0 -430px no-repeat;
    }
  }
`;
