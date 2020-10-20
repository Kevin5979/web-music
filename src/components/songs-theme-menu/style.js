import styled from "styled-components";

export const SongsThemeMenuWrapper = styled.div`
.operate{
  margin-top: 5px;
   li{
   overflow: hidden;
   margin-right: 8px;
   }
   li.player{
   cursor: pointer;
   .p-left{
     width: 61px;
     height: 31px;
     color: #fff;
     font-size: 12px;
     background-color: rgb(62, 141, 215);
     padding: 0 5px;
     border-right: 1px solid #666;
     box-sizing: border-box;
     :hover{
       opacity: .9;
     }
     i{
       display: inline-block;
       width: 20px;
       height: 20px;
       margin-right: 3px;
       background-position: 0 -1622px;
     }
   }
   .p-right{
     i{
       display: inline-block;
       width: 31px;
       height: 31px;
       background-position: 0 -1588px;
       margin-top: 5px;
       :hover{
         opacity: .9;
       }
     }
   }
  }
  li.item{
    height: 31px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
    padding-right: 6px;
    cursor: pointer;
    opacity: .8;
    :hover{
     opacity: 1;
    }
  i{
    display: inline-block;
        width: 31px;
        height: 31px;
        transform: translateX(-1px);
        background-position: 0 -1063px;
      }
     }
     li.share{
      i{
        background-position: 0 -1268px;
      }
     }
   li.download{
 i{
      background-position: 0 -2805px;
    }
   }
   li.comment{
    i{
      background-position: 0 -1508px;
    }
   }
 }
`;

