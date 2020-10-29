import styled from "styled-components";

export const RcmThemeRankWrapper = styled.div`
    width: 230px;
    height: 472px;
   .rcm-rank-top{
     width: 211px;
     height: 100px;
     padding: 20px 0 0 20px;
     box-sizing: border-box;
     display: flex;
     .img{
       width: 80px;
       height: 80px;
       position: relative;
       a{
         position:absolute;
         display: inline-block;
         width: 80px;
         height: 80px;
         background-position: -145px -57px;
       }
     } 
     .title{
       width: 116px;
       margin: 6px 0 0 10px;
       a{
         display: block;
         font-size: 14px;
         font-weight: bold;
         color: #333;
       }
       .btm{
         margin-top: 10px;
         i{
           display: inline-block;
           width: 22px;
           height: 22px;
           margin-right: 10px;
           cursor: pointer;
           &.play{
             background-position: -267px -205px;
             :hover{
               background-position: -267px -235px;
             }
           }
           &.collect{
             background-position: -300px -205px;
             :hover{
               background-position: -300px -235px;
             }
           }
         }
       }
     }
   }
   
   .rcm-rank-list{
     margin-top: 20px;
     height: 319px;
     padding-left: 25px;
     box-sizing: border-box;
     .song-item{
     vertical-align: middle;
     line-height: 32px;
     overflow: hidden;
     :last-child{
      margin-left: -4px;
      .content{
        margin-left: 12px!important;
      }
     }
       .order{
       width: 15px;
       height: 32px;
       font-size: 16px;
       &.active{
         color: #c10d0c;
       }
      }
       .content{
         flex: 1;
         height: 32px;
         margin-left: 8px;
         padding-right: 8px;
         box-sizing: border-box;
         display: flex;
         justify-content: space-between;
         i.fake-a{
           flex: 1;
           display: inline-block;
           width: 170px;
           color: #000;
           font-size: 12px;
           line-height: 32px;
         }
         :hover{
           i.fake-a{
             width: 106px;
             height: 32px;
             line-height: 32px;
             white-space: nowrap;
             text-overflow: ellipsis;
             overflow: hidden;
             word-break: break-all;
           }
           .icons{
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            justify-items: center;
           }
         }
         .icons{
           width: 66px;
           height: 32px;
           display: none;
           i{
             display: inline-block;
             width: 17px;
             height: 17px;
             cursor: pointer;
             &.play{
               background-position: -267px -288px;
             }
             &.add{
               background-position: 0 -700px;
               margin-top: 2px;
               :hover{
                 background-position: -22px -700px;
               }
             }
             &.collect{
               background-position: -297px -268px;
               :hover{
                 background-position: -297px -288px;
               }
             }
           }
         }
       }
     }
     .more{
      text-align: right;
      padding-right: 15px;
      box-sizing: border-box;
      .fake-a{
        color: #000;
        line-height: 32px;
      }
     }
   }
`;

