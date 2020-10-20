import styled from "styled-components";

export const DjClassifyWrapper = styled.div`
  position: relative;
  
  i.icon-c{
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${require("assets/img/banner_sprite2.png")}) no-repeat;
    cursor: pointer;
    opacity: 0.25;
    :hover{
      opacity: 0.5;
    }
  }
  
  i.control-left{
    left: -23px;
    background-position: 0 -30px;
  }
  
  i.control-right{
    right: -23px;
    background-position: -30px -30px;
  }
  
  ul.f-pages{
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    
    li{
      width: 70px;
      height: 72px;
      margin: 8px 15px;
      cursor: pointer;
      &.active{
        border: 2px solid #d35757;
        border-radius: 6px;
        box-sizing: border-box;
        div{
        p.name{
          color: #d35757;
        }
       }
     }
     div{
      .icon{
        display: block;
        margin: 0 auto;
        width: 48px;
        height: 48px;
      }
      .name{
        font-size: 12px;
        text-align: center;
        color: rgb(136, 136, 136);
      }
      &.l-dodj{
        p.name{
          color: #5ab5e7;
        }
      }
    }
    i.matter{
      background: url(${require("assets/img/matter.png")}) no-repeat;
    }
    i.do-dj{
      background: url(${require("assets/img/dodj.png")}) no-repeat;
    }
  }
 }

`;

