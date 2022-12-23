import { Button, Form, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./SiteHeader.css";
import navEle from "./navEleData";
import navItem from "./navItem";

const siteHeader = () => {
  const navEles = navEle.map((list) => (
    <dl className="mean">
      <dt className="main-category">
        <a>{list.content}</a>
      </dt>
      <dd className="products-exhibit">
        <Container>
          <div className="nav-Item">
            {console.log(list.key)}
            {navItem[list.key].map((list1) => (
              <div className="main-product">
                <img className="prodcut-img" src={list1.ImgLink}></img>
                <a href={list1.Link} className="product-name">
                  {list1.name}
                </a>
                <span className="product-price">{list1.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </dd>
    </dl>
  ));

  return (
    <div className="site-header">
      <Container>
        <div className="navBar-container">
          <div className="milogo">
            <div className="milogo-wrapper">
              <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" />
            </div>
          </div>

          <div className="shop-categories" id="J_shopCategories">
            <div className="doodle" style={{ display: "block" }}>
              <a
                className="link-block"
                href="https://event.mi.com/tw/huiyuanquanyi"
                style={{
                  backgroundImage: `url("https://i01.appmifile.com/webfile/globalweb/picture/lingquan-pc.gif")`,
                }}
              >
                {" "}
              </a>
            </div>
            <div className="categories-wrapper J_navMainList">
              {navEles}
              <dl className="mean">
                <dt className="main-category">
                  <a href="https://www.mi.com/tw/service/">服務</a>
                </dt>
              </dl>
            </div>
          </div>

          <div className="search-section">
            <Form className="search-form">
              <Form.Control
                type="search"
                placeholder="搜尋商品"
                aria-label="Search"
              />
              <Button className="btnSearch">
                <BsSearch />
              </Button>
              <div className="hot-word">
                <a href="https://www.mi.com/tw/xiaomi-12-pro/">
                  Xiaomi 12 系列
                </a>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default siteHeader;
