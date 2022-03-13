import React from "react";

export default class Hitung extends React.Component {
    constructor() {
        super()
        this.state = ({
            hAwal: 0,
            ppn: 0,
            diskon:0,
            output: ""
        })
    }

    //fungsi
    ChangeState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault()
        let hAwal = this.state.hAwal
        let ppn = this.state.ppn / 100
        let diskon = this.state.diskon / 100

        let hitung1 = hAwal * ppn
        let hitung2 = hAwal * diskon
        let hitung3 = hitung2 - hitung1
        let total = hAwal - hitung3

        this.setState({
            output: "Rp. " + total + ",00"
        })
    }
    //render
    render() {
        return(
            <div className="container mt-3">
            <div className="card">
                <div className="card-header bg-warning text-dark">
                    <h2 className="text-center">Hitung Harga Akhir</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="row mt-3">
                            <div className="col-4"> 
                                <p>Harga Awal</p>
                            </div>
                            <div className="col-8"> 
                                <input className="form-control" name="hAwal" type="number" value={this.state.hAwal} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>PPN (%)</p>
                            </div>    
                            <div className="col-8"> 
                                <input className="form-control alert-dark"  name="ppn" type="number" value={this.state.ppn} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Diskon (%)</p>
                            </div>    
                            <div className="col-8"> 
                                <input className="form-control"  name="diskon" type="number" value={this.state.diskon} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <button type="submit" className="w-100 btn btn-warning mt-4 mb-3 text-dark">Hitung</button>
                    </form>
                </div>
                <div className="card-footer">
                    <h2 className="text-center mb-3">Hasil</h2>
                    <button className="w-100 alert alert-warning" name="result">{this.state.output}</button>
                </div>
            </div>
            </div>
        )
    }    
}
