import React from "react";

export default class Oktal extends React.Component {
    constructor() {
        super()
        this.state = ({
            oktal: "",
            pilihan: "",
            output: ""
        })
    }
    //fungsi
    ChangeState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlerSubmit = (e) =>{
        // e.preventDefault() menghalangi agar tidak reload lagi ke halaman awal
        e.preventDefault()
        let oktal = this.state.oktal
        let pilihan = this.state.pilihan

        let bil = Number(oktal) 
        let dec = parseInt(bil, 8)
        let hasil;
        //jika tidak dikasih Number nanti hasil input terbaca string

        if (pilihan === "biner") {
            hasil = dec.toString(2)
        } else if (pilihan === "desimal") {
            hasil = dec
        } else if (pilihan === "heksadesimal") {
            hasil = dec.toString(16).toUpperCase()
        }
        this.setState({
            output: hasil
        })
        
    }

    //render
    render() {
        return(
            <div className="container mt-3">
            <div className="card">
                <div className="card-header bg-danger text-light">
                    <h2 className="text-center">Konversi Bilangan Oktal</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="row mt-3">
                            <div className="col-4"> 
                                <p>Oktal</p>
                            </div>
                            <div className="col-8"> 
                                <input className="form-control" name="oktal" type="number" value={this.state.oktal} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Pilihan Konversi</p>
                            </div>    
                            <div className="col-8"> 
                                <select className="form-control alert-dark" name="pilihan" value={this.state.pilihan} onChange={this.ChangeState}>
                                <option></option>
                                        <option value="biner">Biner</option>
                                        <option value="desimal">Desimal</option>
                                        <option value="heksadesimal">Hexadesimal</option>
                                        
                                    </select>
                            </div>
                        </div>
                        <button type="submit" className="w-100 btn btn-danger mt-4 mb-3 text-light">Hitung</button>
                    </form>
                </div>
                <div className="card-footer">
                    <h2 className="text-center mb-3">Hasil</h2>
                    <button className="w-100 alert alert-danger" name="result">{this.state.output}</button>
                </div>
            </div>
            </div>
        )
    }


}