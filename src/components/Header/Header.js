import React from "react";
import "./header.css";
import Img from "./webwxgetmsgimg.jpg";
const Header = props => {
    const { desc, info, qrcode, user } = props;
    /**
     * es5:
     * var desc = props.desc
     * var info= props.info
     * var qrcode =props.qrcode
     * var user = props.user
     */
    console.log("Header Props:", props, props.info);
    /*let str = "";
    for (let i = 0; i < info.length; i++) {
      str = str + `<li><i className="iconfont icon-star"></i>${info[i]}</li>`;
    }
  
    let array = [];
    for (let i = 0; i < info.length; i++) {
      array.push(
        <li key={i}>
          <i className="iconfont icon-star" />
          {info[i]}
        </li>
      );
    }*/

    return (
        <header className="header">
            <figure className="header-qrcode">
                <img src={Img} />
            </figure>
            <address className="header-contact">
                <ul>
                    {/*
             方法1:原始的逐个人工写
            <li><i className="iconfont icon-star"></i>{info[0]}</li>
            <li><i className="iconfont icon-location"></i>{info[1]}</li>
            <li><i className="iconfont icon-phone"></i>{info[2]}</li>
            <li><i className="iconfont icon-mail"></i>{info[3]}</li>
            <li><i className="iconfont icon-github-fill"></i>{info[4]}</li>
             */}
                    {/*
             方法二：用innerHtml去渲染
             <div dangerouslySetInnerHTML={{__html:str}}></div>
             */}
                    {/**  方法三：用数组去渲染
           *  {array}
           */}

                    {/** 第四种：map返回数组的方式 */
                        info.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i className={`iconfont ${item.icon}`} /> {item.text}
                                </li>
                            );
                        })}
                </ul>
            </address>
            <section className="header-title">
                <h1>{user}</h1>
                <h3>
                    <strong>{desc.join(" / ")}</strong>
                </h3>
            </section>
        </header>
    );
};

export default Header;