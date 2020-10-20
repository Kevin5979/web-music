import styled from "styled-components";

export const RcmHotAnchorWrapper = styled.div`
  margin-top: 30px;
 .header{
   font-size: 12px;
   font-weight: bold;
   height: 23px;
   margin: 0 20px;
   border-bottom: 1px solid #ccc;
   box-sizing: border-box;
   color: #333;
 }
 
 .rcm-anchor{
   margin: 20px 0 0 20px;
   .item{
     width: 210px;
     height: 50px;
     .img{
       margin-right: 10px;
       cursor: pointer;
     }
     .name{
       width: 160px;
       color: #000;
       i{
         background-position: 0 1px;
         display: inline-block;
         width: 11px;
         height: 13px;
         position: relative;
         top: 2px;
         left: 3px;
       }
     }
     p{
       width: 160px;
       color: #666;
     }
   }
 }
 

`;
