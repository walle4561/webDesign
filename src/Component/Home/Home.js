import { BsChevronRight } from "react-icons/bs";
import { Carousel, Container, ListGroup } from "react-bootstrap";
import Star from "./Star/StarCommodity";
import img from "./imgData";
import listBar from "./listBarData";
import "./Home.css";

const Home = () => {
  
  const lists = img.map((list) => (
    <Carousel.Item>
      <img
        className="d-block w-100 CarouselImg"
        key={list.id}
        src={list.link}
      />
    </Carousel.Item>
  ));
  const listBars = listBar.map((list) => (
    <ListGroup.Item action href="#link1" className="ListItem">
      {list.content}
      <BsChevronRight />
    </ListGroup.Item>
  ));

  return (
    <>
      <div className="home-page">
        <Container>
          <div className="warp">
            <div className="Carousel1">
              <Carousel>{lists}</Carousel>
            </div>
            <div className="list1">{listBars}</div>
          </div>
          <div className="subhome-page">
            <a href="https://www.mi.com/tw/product/redmi-10c/">
              <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-170355.png?width=296&height=170"></img>
            </a>
            <a href="https://www.mi.com/tw/product/redmi-note-11s/">
              <img src="https://i01.appmifile.com/webfile/globalweb/picture/20221009-175620.jpg?width=296&height=170" />
            </a>
            <a href="https://event.mi.com/tw/business">
              <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-170352.png?width=296&height=170" />
            </a>
            <a href="https://www.po.co/tw/">
              <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-173533.png?width=296&height=170" />
            </a>
            <a href="https://event.mi.com/tw/huiyuanquanyi">
              <img
                className="home-invite-img"
                src="https://i01.appmifile.com/webfile/globalimg/yanganna/member-s-p.png"
              />
            </a>
          </div>
          <Star></Star>
        </Container>
      </div>
    </>
  );
};

export default Home;
