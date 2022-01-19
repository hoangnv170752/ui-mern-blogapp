import "./Header.css";

function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">A Nguyen Hoang's</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img
                className="headerImg"
                src="https://c0.wallpaperflare.com/preview/71/610/431/advice-article-background-beverage.jpg"
                alt=""
            />
        </div>
    );
}

export default Header;