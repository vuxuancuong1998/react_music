import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Content from "./Content";
import Footer from "./Footer";
import Login from "./Login";
import LoveMusic from "./LoveMusic";
import TrashMusic from "./TrashMusic";

const ListMusic = [
  {
    id: 1,
    name: "See you again",
    author: "Le-Nin",
    image: "see-you-again.jpg",
    mp3: "SeeYouAgain.mp3",
    day: "29-09-1998",
    type: "Nhạc trẻ",
    isLove: false,
    isTrash: true,
  },
  {
    id: 2,
    name: "Safe and Sound",
    author: "Ang-Ghen",
    image: "safeandsound.jpg",
    mp3: "safeandsound.mp3",
    day: "21-02-1994",
    type: "Nhạc trẻ",
    isLove: true,
    isTrash: false,
  },
  {
    id: 3,
    name: "My love",
    author: "C-Mac",
    image: "mylove.jpg",
    mp3: "mylove.mp3",
    day: "10-01-2002",
    type: "Nhạc trẻ",
    isLove: false,
    isTrash: false,
  },
  {
    id: 4,
    name: "In my mind",
    author: "En-Gels",
    image: "inmymind.jpg",
    mp3: "inmymind.mp3",
    day: "09-02-1999",
    type: "Nhạc trẻ",
    isLove: false,
    isTrash: false,
  },
  {
    id: 5,
    name: "That girl",
    author: "Maria",
    image: "thatgirl.jpg",
    mp3: "thatgirl.mp3",
    day: "12-01-2000",
    type: "Nhạc trẻ",
    isLove: false,
    isTrash: false,
  },
  {
    id: 6,
    name: "Why not my",
    author: "FuKuDa",
    image: "whynotme.jpg",
    mp3: "whynotme.mp3",
    day: "29-01-2009",
    type: "Nhạc trẻ",
    isLove: false,
    isTrash: false,
  },
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listMusic: [...ListMusic],
    };
  }

  handleIsLove = (id) => {
    let song = this.state.listMusic;
    song = song.map((item) => {
      if (item.id === id) item.isLove = !item.isLove;
      return item;
    });
    this.setState({
      listMusic: [...song],
    });
  };
  handleIsTrash = (id) => {
    let song = this.state.listMusic;
    song = song.map((item) => {
      if (item.id === id) item.isTrash = !item.isTrash;
      return item;
    });
    this.setState({
      listMusic: [...song],
    });
  };
  handleTrashItem = (index) => {
    console.log(index)
    let song = this.state.listMusic;
    let deletesong = song.splice(index, 1);
    // console.log("song",song)
    // console.log("deletesong",deletesong)
    this.setState({listMusic: [...song]});
    console.log(this.state.listMusic)
  }

  render() {
    const ListMusic = this.state.listMusic
    const styleMenu = {
      color: "white",
    };
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link to="/Home" style={styleMenu} className="nav-link">
              MUSIC
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive" 
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/Home" style={styleMenu} className="nav-link">
                    Trang chủ
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/love" style={styleMenu} className="nav-link">
                    Bài hát yêu thích
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/trash" style={styleMenu} className="nav-link">
                    Bài hát đã xoá
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" style={styleMenu} className="nav-link">
                    Đăng nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Content
              handleTrashItem={this.handleTrashItem}
              listMusic={ListMusic}
              handleIsLove={this.handleIsLove}
              handleIsTrash={this.handleIsTrash}
            />
            <Footer />
          </Route>

          <Route path="/Home">
            <Content
              handleTrashItem={this.handleTrashItem}
              listMusic={ListMusic}
              handleIsLove={this.handleIsLove}
              handleIsTrash={this.handleIsTrash}
            />
            <Footer />
          </Route>
          <Route path="/trash">
            <TrashMusic listMusic={ListMusic} handleTrashItem={this.handleTrashItem} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/love">
            <LoveMusic
              listMusic={ListMusic}
              handleIsLove={this.handleIsLove}
              isLoved
              handleIsTrash={this.handleIsTrash}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}
