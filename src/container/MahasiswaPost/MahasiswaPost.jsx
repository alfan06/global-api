import React, {Component} from "react";
import './MahasiswaPost.css';
import Post from "../../component/MahasiswaPost/Post";
import API from "../../services/index";
import Navbar from "../../component/MahasiswaPost/Navbar";

class MahasiswaPost extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            userId: 1,
            id: 0,
            nim:"",
            nama:"",
            alamat: "",
            hp: "",
            angkatan:"",
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) =>{
        API.deleteMahasiswa(data)
            .then( (response) => {
                this.ambilDataDariServerAPI();
            })
    }
    
    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
             insertMahasiswa: formInsertMahasiswa
        });
    }
    
    
    handleTombolSimpan = () =>{
        API.postMahasiswa(this.state.insertMahasiswa)
            .then( (response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <Navbar/>
                <p></p>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label"><b>nim</b></label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label"><b>nama</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label"><b>alamat</b></label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telfon" className="col-sm-2 col-form-label"><b>HP</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label"><b>Angkatan</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label"><b>Status</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-outline-primary" onClick={this.handleTombolSimpan}>Tambah</button>
                </div>
                <p></p>
                <p></p>
                <div>
                <h3>Daftar Mahasiswa</h3>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default MahasiswaPost