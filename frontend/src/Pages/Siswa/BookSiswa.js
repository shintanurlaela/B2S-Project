import React, { Component } from 'react';
import axios from "axios";
import Card from "./CardSiswa";

class BookSiswa extends Component {
  constructor() {
    super();
    this.state = {
      buku: [],
      keyword: "", // Tambahkan keyword ke state
    };
  }

 getUser = () => {
    axios
      .get("http://localhost:5000/buku")
      .then((response) => {
        const buku = response.data.data;
        this.setState({ buku: buku });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // FUNCTION SEARCH
  searching = (event) => {
    if (event.keyCode === 13) {
      let keyword = this.state.keyword.toLowerCase();
      let tempBuku = this.state.buku;
      let result = tempBuku.filter((item) => {
        return (
          item.judul.toLowerCase().includes(keyword) ||
          item.deskripsi.toLowerCase().includes(keyword)
        );
      });

      this.setState({ buku: result });
    }
  };

  render() {
    return (
      <div className="container">
        <h4 className="text-info my-2">
        </h4>
        <div className="row">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Pencarian"
            value={this.state.keyword}
            onChange={(ev) => this.setState({ keyword: ev.target.value })}
            onKeyUp={(ev) => this.searching(ev)}
          />
          {this.state.buku.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              deskripsi={item.deskripsi}
              gambar={"http://localhost:5000/cover-image/" + item.gambar}
              link={item.link}
            />
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getUser();
  }

 
}

export default BookSiswa;