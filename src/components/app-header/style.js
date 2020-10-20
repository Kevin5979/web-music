import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  
  .content{
    height: 70px;
    display: flex;
    justify-content: space-between;
    
    .left{
      color: #ccc;
      h1.logo{
        margin-right: 20px;
      }
      a.logo{
        display: block;
        width: 157px;
        height: 69px;
        padding-right: 20px;
        box-sizing: border-box;
        background-position:0 0;
        font-size: 0;
      }
      
      .select-list{
        line-height: 70px;
        
        li:hover a,
        a.active{
          color: #fff;
          background-color:#000;
        }
        
        a{
          display: block;
          height: 70px;
          padding: 0 19px;
          box-sizing: border-box;
          color: #ccc;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
   
          &.active .icon{
            position: absolute;
             display: inline-block;
             width: 12px;
             height: 7px;
             bottom: -2px;
             left: 50%;
             transform: translate(-50%,0);
             background-position:-226px 0;
          }
          
        }
        
        li:last-child a{
           :after{
             content: "";
             display: block;
             width: 28px;
             height: 19px;
             background-image:url(${require("assets/img/sprite_01.png")});
             background-position:-190px 0;
             position: absolute;
             top: 20px;
             right: -15px;
           }
        }
      }
    }
    
    .right{
      color: #ccc;
      .search{
        width: 168px;
        height: 32px;
        border-radius: 16px;
          input::placeholder{
          font-size: 12px;
          color: #ccc;
          }
      }
      .center{
        margin: 0 19px 0 12px;
        background-color: transparent;
        width: 90px;
        height: 32px;
        line-height: 32px;
        padding: 0 10px;
        color: #ccc;
        box-sizing: border-box;
        border-radius: 20px;
        border: 1px solid #4F4F4F;
        cursor: pointer;
      }
      
      .center:hover{
        color: #fff;
        border-color: #fff;
      }
      
      .login:hover{
        color: #fff;
      }
    }
    
  }
  
  .divider{
    height: 5px;
    background-color:#c20c0c;
  }
  
`;

