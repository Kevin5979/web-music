import styled from "styled-components";

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 53px;
  
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  user-select: none;
  .bar{
    transition: all .3s;
    .bg{
    height: 53px;
    background-position: 0 0;
    background-repeat: repeat-x;
    }
    .bg .wrapper{
      height: 47px;
      position: absolute;
      left: 50%;
      bottom: 0;
      padding-top: 6px;
      box-sizing: border-box;
      transform: translateX(-50%);
      display: flex;
      justify-content: flex-start;
      .left{
        width: 137px;
        height: 36px;
        i{
          margin-right: 8px;
          cursor: pointer;
        }
        .prev{
          width: 28px;
          height: 28px;
          background-position: 0 -130px;
          :hover{
            background-position: -30px -130px;
          }
        }
        .play{
          width: 36px;
          height: 36px;
          background-position: 0 -204px;
          :hover{
            background-position: -40px -204px;
          }
          &.pause{
            background-position: 0 -165px;
            :hover{
              background-position: -40px -165px;
            }
          }
        }
        .next{
          width: 28px;
          height: 28px;
          background-position: -80px -130px;
          :hover{
            background-position: -110px -130px;
          }
        }
      }
      .middle{
        width: 656px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .head{
          width: 34px;
          height: 34px;
          position: relative;
          cursor: pointer;
          img{
            width: 34px;
            height: 34px;
          }
          i{
            width: 34px;
            height: 34px;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            background-position: 0 -80px;
          }
        }
        .m2{
          display: flex;
          flex-direction: column;
          margin-left: 8px;
          .song{
            margin-left: 10px;
            color: #ccc;
          }
          .progress{
            .ant-slider {
              width: 493px;
              margin: 0 10px;
              padding: 0;
              .ant-slider-rail {
                height: 9px;
                background: url(${require("assets/img/stat_bar.png")}) right 0;
              }
              .ant-slider-track {
                height: 9px;
                background: url(${require("assets/img/stat_bar.png")}) left -66px;
              }
              .ant-slider-handle {
                width: 22px;
                height: 24px;
                border: none;
                margin-top: -7px;
                background: url(${require("assets/img/sprite_icon.png")}) 0 -250px;
                :hover{
                    background-position: 0 -280px;
                }
              }
            }
            .play-timer{
              transform: translateY(-4px);
              color: #797979;
              text-shadow: 0 1px 0 #121212;
              .older{
                color: #a1a1a1;
              }
            }
          }
        }
      }
      .right{
        width: 186px;
        .l{
          width: 60px;
          height: 36px;
          i{
            width: 25px;
            height: 25px;
            display: block;
            margin-right: 5px;
            cursor: pointer;
          }
          .collect{
            background-position: -88px -163px;
            :hover{
              background-position: -88px -189px;
            }
          }
          .share{
            background-position: -114px -163px;
            :hover{
              background-position: -114px -189px;
            }
          }
        }
        .r{
          margin-left: 10px;
          i{
            width: 25px;
            height: 25px;
            margin-right: 3px;
            display: inline-block;
            cursor: pointer;
          }
          .sound{
            .progress{
              display: none;
              position: fixed;
              top: -130px;
              right: 50px;
            }
            &.active{
              .progress{
                display: block;
              }
            }
            .icon{
              background-position: -2px -248px;
              :hover{
                background-position: -31px -248px;
              }
            }
          }
          .mode{
            .one{
               background-position: -66px -344px;
               :hover{
                 background-position: -93px -344px;
               }
             }
            .sequence{
              background-position: -3px -344px;
              :hover{
                background-position: -33px -344px;
              }
            }
            .random{
              background-position: -66px -248px;
              :hover{
                background-position: -93px -248px;
              }
            }
          }
          .s-list{
            .icon{
              width: 60px;
              height: 25px;
              background-position: -42px -68px;
              color: #fff;
              position: relative;
              span{
                position: absolute;
                top: 15%;
                left: 60%;
                color: #666;
                text-shadow: 0 1px 0 #080707;
              }
              :hover{
                background-position: -42px -98px;
              }
            }
          }
        }
      }
    }
    .up{
      width: 80px;
      height: 47px;
      position: absolute;
      right: 0;
      bottom: 0;
      .up-top{
        width: 52px;
        height: 67px;
        position: absolute;
        top: -20px;
        right: 28px;
        background-position: 0 -380px;
        .lock{
          display: block;
          width: 18px;
          height: 18px;
          position: absolute;
          left: 17px;
          top: 5px;
          background-position: -100px -380px;
          cursor: pointer;
          :hover{
            background-position: -100px -400px;
          }
        }
      }
    }
  }
  .un-bar{
    transform: translateY(43px) !important;
    .lock{
       background-position: -80px -380px !important;
    }
  }
  .un-bar:hover{
    transform: translateY(0px) !important;
    .lock{
       background-position: -80px -380px !important;
    }
  }

`;
