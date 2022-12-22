import "./TopBarNav.css";

const topBarNav = () => {
  return (
    <div className="site-topbar">
      <div className="container">
        <div className="nav">
          <div className="topbar-nav">
            <a href="http://en.miui.com/">MIUI</a>
            <span className="sep">|</span>
            <a href="https://www.mi.com/tw/appdownload/">下載小米商城APP</a>
            <span className="sep">|</span>
            <a href="https://buy.mi.com/tw/user/points-center">小米積分中心</a>
            <span className="sep">|</span>
            <a href="https://event.mi.com/tw/imeilogin/">登入送活動</a>
            <span className="sep">|</span>
            <a href="https://event.mi.com/tw/business/">小米團購</a>
          </div>
          <div className="sing-account">
            <a href="https://buy.mi.com/tw/site/login">登入</a>
            <span className="sep">|</span>
            <a href="https://buy.mi.com/tw/site/login">註冊</a>
            <span className="sep">|</span>
            <span className="sep">購物車</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBarNav;
