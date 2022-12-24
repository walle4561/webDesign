import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import "./SiteHeader.css";
import navEle from "./navEleData";
import navItem from "./navItem";
import listBar from "./listBarData";

const SiteHeader = () => {
  const [productBlock, setProductBlock] = useState(false);
  const [prductBlockContent, setProductBlockContent] = useState(null);
  const navMouseOut = (e) => {
    setProductBlock((productBlock) => false);
  };
  const activeProduct = (e) => {
    setProductBlock((productBlock) => true);
    e.currentTarget.parentElement.classList.add("nav-item-active");
    document
      .querySelector(".header-nav-menu")
      .classList.add("header-nav-menu-active");
    let content = document
      .querySelector(".nav-item-active")
      .getElementsByClassName("products-exhibit")[0].innerHTML;
    setProductBlockContent((prductBlockContent) => content);
  };
  const deActiveProduct = (e) => {
    e.currentTarget.parentElement.classList.remove("nav-item-active");
  };

  const navEles = navEle.map((list) => (
    <dl className={"nav-item"}>
      <dt
        className="main-category"
        onMouseOver={activeProduct}
        onMouseOut={deActiveProduct}
      >
        <a>{list.content}</a>
      </dt>
      <dd className="products-exhibit">
        <Container className="products-exhibit-wrapper">
          {navItem[list.key].map((list1) => (
            <div className="main-product">
              <img
                className="prodcut-img"
                src={list1.ImgLink}
                alt={list1.name}
                style={{ width: `140px`, height: `140px` }}
              ></img>
              <a href={list1.Link} className="product-name">
                {list1.name}
              </a>
              <span className="product-price">{list1.price}</span>
            </div>
          ))}
        </Container>
      </dd>
    </dl>
  ));

  const listBars = listBar.map((list) => (
    <li className="nav-category-item">
      <a href="#link1" className="title">
        {list.content}
        <BsChevronRight />
      </a>
    </li>
  ));

  return (
    <div className="site-header">
      <div className="curtain">
        <Container>
          <div className="navBar-container">
            <div className="milogo">
              <div className="milogo-wrapper">
                <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" />
              </div>
              <div className="doodle" style={{ display: "block" }}>
                <a
                  className="link-block"
                  href="https://event.mi.com/tw/huiyuanquanyi"
                  style={{
                    backgroundImage: `url("https://i01.appmifile.com/webfile/globalweb/picture/lingquan-pc.gif")`,
                  }}
                />
              </div>
            </div>

            <div className="shop-categories" id="J_shopCategories">
              <div className="categories-wrapper J_navMainList">
                <div className="nav-category nav-category-toggled">
                  <div className="nav-category-section">
                    <ul className="nav-category-list">{listBars}</ul>
                  </div>
                </div>
                {navEles}
                <dl className="nav-item">
                  <dt className="main-category">
                    <a href="https://www.mi.com/tw/service/">服務</a>
                  </dt>
                </dl>
              </div>
              <div class="search-section">
                <form class="search-form clearfix">
                  <input
                    class="search-text J_searchText"
                    type="search"
                    name="keyword"
                    placeholder="搜尋商品"
                  ></input>
                  <div class="hot-words">
                    <a href="https://www.mi.com/tw/product/xiaomi-curved-gaming-monitor-30/">
                      Xiaomi 30 型 電競曲面螢幕
                    </a>
                  </div>
                  <a
                    class="search-btn"
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                    }}
                  >
                    <FaSistrix></FaSistrix>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div></div>
      <div
        className="header-nav-menu"
        style={{
          borderTop: productBlock ? `1px solid #e0e0e0` : `0px solid #e0e0e0`,
          maxHeight: productBlock ? "223px" : "0px",
          transition: `max-height 0.2s`,
        }}
        onMouseLeave={navMouseOut}
        dangerouslySetInnerHTML={{ __html: prductBlockContent }}
      ></div>
    </div>
  );
};

export default SiteHeader;
