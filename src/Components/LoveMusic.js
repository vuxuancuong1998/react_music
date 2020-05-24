import React, { Component } from "react";
import MusicCard from "./MusicCard";

export default class LoveMusic extends Component {
  render() {
    const { listMusic } = this.props;
    const listLove = listMusic.filter((item) => item.isLove);
    //Tìm islove = true rồi map duyệt ra
    return (
      <>
        <div className="container">
          <div className="row">
            {listLove.map((item, index) => {
              return (
                <MusicCard
                  key={index}
                  item={item}
                  isLoved={this.props.isLoved}
                  handleIsLoved={this.props.handleIsLove}
                  handleIsTrash={this.props.handleIsTrash}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
