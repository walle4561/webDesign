import { Button, Form, Nav, Navbar, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./SiteHeader.css";

const siteHeader = () => {
  const navEle = [
    { content: "Xiaomi手機", key: "0" },
    { content: "Redmi手機", key: "1" },
    { content: "POCO手機", key: "2" },
    { content: "智慧家庭", key: "3" },
    { content: "智慧科技", key: "4" },
    { content: "配件", key: "5" },
    { content: "服務", key: "6" },
  ];
  const navItem = [
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
    [
      {
        price: "NT$19,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/12u-Silver.png?width=140&height=140",
        name: "Xiaomi 12T Pro",
      },
      {
        price: "NT$16,999",
        ImgLink:
          "https://i01.appmifile.com/webfile/globalimg/summer-1/pic/L12A-Blue.png?width=140&height=140",
        name: "Xiaomi 12T",
      },
    ],
  ];
  const handleMouseOut = () => {};

  const navEles = navEle.map((list) => (
    <div className={"meau" + list.key}>
      <dt className="main-category">
        <a>{list.content}</a>
      </dt>
      <dd className="products-exhibit">
        <div className="nav-Item">
          {navItem[list.key].map((list) => (
            <div>
              <img src={list.ImgLink}></img>
              <span>{list.price}</span>
              <a href="">{list.name}</a>
            </div>
          ))}
        </div>
      </dd>
    </div>
  ));

  return (
    <div className="site-header">
      <div className="navBar-container container">
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
          <div className="categories-wrapper J_navMainList">{navEles}</div>
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
              <a href="https://www.mi.com/tw/xiaomi-12-pro/">Xiaomi 12 系列</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default siteHeader;
