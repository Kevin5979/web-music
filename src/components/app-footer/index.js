import React, {memo} from 'react';

import {FooterWrapper} from "./style"
import {footerLinks, footerIcons} from "common/local-data"

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 flex-between">
        <div className="left">
          <ul className="links flex-start">
            {
              footerLinks.map(item => {
                return (
                  <li key={item.title}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                )
              })
            }
            <li className="last-li">
              <a href="/#">意见反馈</a>
            </li>
          </ul>
          <div className="content">
            <p>
              <span className="item">网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
            </p>

            <p>
              <span className="item">违法和不良信息举报电话：0571-89853516</span>
              <span>举报邮箱：</span>
              <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <p>s
              <span className="item">粤B2-20090191-18</span>
              <span>工业和信息化部备案管理系统网站</span>
              <img src="https://s2.music.126.net/style/web2/img/3rd/police.png?9163effb81d27a903ade0dcd9b799a6f" alt="" />
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">浙公网安备
                33010902002564号</a>
            </p>
          </div>
        </div>
        <div className="right">
          <ul className="flex-start">
            {
              footerIcons.map(item => {
                return (
                  <li key={item.title}>
                    <a className="sprite_footerIcon" target="_blank" rel="noopener noreferrer" href={item.link} title={item.title}> </a>
                    <i className="sprite_footerText"></i>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </FooterWrapper>
  )
})