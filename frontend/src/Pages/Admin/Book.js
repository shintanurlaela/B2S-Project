import React, { Component } from 'react';
import Card from "./Card";
import axios from "axios";
import { Modal } from "bootstrap";


class Book extends Component {
  constructor() {
    super();
    this.state = {
      buku: [],
      id_buku: "",
      action: "",
      judul: "",
      deskripsi: "",
      gambar: "",
      link: "",
      selectedItem: null,
      modal: null,
      keyword: "", // Tambahkan keyword ke state
    };
    this.state.filterBuku = this.state.buku;
  }

  // FUNCTION ADD
  Add = () => {
    this.state.modal.show();
    this.setState({
      judul: "",
      deskripsi: "",
      gambar: "",
      link: "",
      action: "insert",
    });
  };

  // FUNCTION EDIT
  Edit = (item) => {
    this.setState({
      id_buku:item.id_buku,
      judul: item.judul,
      deskripsi: item.deskripsi,
      gambar: item.gambar,
      link: item.link,
      action: "update",
      selectedItem: item,
    });
    this.state.modal.show();
  };

  // FUNCTION SAVE
  saveBook = (event) => {
    event.preventDefault();
  
    let url = "";
    let method = "";
  
    if (this.state.action === "insert") {
      url = "http://localhost:5000/buku/save";
      method = "POST";
    } else if (this.state.action === "update") {
      url = "http://localhost:5000/buku/" + this.state.id_buku;
      method = "PUT";
    }
  
    // Buat objek FormData untuk mengirim data pengguna dan gambar
    let formData = new FormData();
    formData.append('judul', this.state.judul);
    formData.append('deskripsi', this.state.deskripsi);
    formData.append('link', this.state.link);
    formData.append('gambar', this.state.gambar); // Tambahkan gambar ke FormData
  
    // Menggunakan axios untuk mengirim permintaan ke backend
    axios({
      method: method,
      url: url,
      data: formData, // Menggunakan FormData sebagai data
      headers: {
        'Content-Type': 'multipart/form-data' // Tetapkan tipe konten sebagai multipart/form-data
      }
    })
      .then((response) => {
        this.getUser();
        window.alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Terjadi kesalahan saat menyimpan data pengguna");
      })
      .finally(() => {
        if (this.state.modal) {
          this.state.modal.hide();
        }
      });
  };


  getUser = () => {
    axios
      .get("http://localhost:5000/buku")
      .then((response) => {
        const buku = response.data.data;
        this.setState({ buku: buku, filterBuku: buku });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // FUNCTION DROP
  Drop = async (item) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`http://localhost:5000/buku/${item.id_buku}`);
        this.getUser();
      } catch (error) {
        console.error("Error:", error);
      }
    }
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

      this.setState({ filterBuku: result });
    }
  };

  render() {
    return (
      <div className="container">
        <h4 className="text-info my-2" >
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
          {this.state.filterBuku.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              deskripsi={item.deskripsi}
              gambar={"http://localhost:5000/cover-image/" + item.gambar} // Ubah prop gambar menjadi URL gambar
              link={item.link}   // Tambahkan prop link
              onEdit={() => this.Edit(item)}
              onDrop={() => this.Drop(item)}
            />
          ))}
        </div>

        <button className="btn btn-success" onClick={() => this.Add()}>
          Tambah Data
        </button>

        <div className="modal" id="modal_buku">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">Form Buku</div>
              <div className="modal-body">
                <form onSubmit={(ev) => this.saveBook(ev)}>
                  Judul Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.judul}
                    onChange={(ev) => this.setState({ judul: ev.target.value })}
                    required
                  />
                  Deskripsi Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.deskripsi}
                    onChange={(ev) =>
                      this.setState({ deskripsi: ev.target.value })
                    }
                    required
                  />
                  Link Buku
                  <input
                    type="url"
                    className="form-control mb-2"
                    placeholder='masukkan link file'
                    value={this.state.link}
                    onChange={(ev) => this.setState({ link: ev.target.value })}
                    required
                  />

                  Gambar Buku
                  <input
                    type="file" // Tipe input file
                    className="form-control mb-2"
                    onChange={(ev) => this.setState({ gambar: ev.target.files[0] })} // Mengambil file gambar yang diunggah
                    required
                  />

                  <button className="btn btn-info btn-block" type="submit">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getUser();
    // Initialize Bootstrap modal
    const modal = new Modal(document.getElementById('modal_buku'));
    this.setState({ modal: modal });
  }
}

export default Book;
