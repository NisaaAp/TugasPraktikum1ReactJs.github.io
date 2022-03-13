import React from "react";

export default class Cicilan extends React.Component {
    constructor() {
        super()
        this.state = ({
            nominal: 0,
            bunga: 0,
            periode:"",
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
        let nominal = this.state.nominal
        let bunga = this.state.bunga / 100
        let periode = this.state.periode
        // let hitung = 

        let bulan;

        if (periode === "6 bulan") {
            bulan = 6
        } else if (periode === "12 bulan") {
            bulan = 12
        } else if (periode === "18 bulan") {
            bulan = 18
        } else if (periode === "24 bulan") {
            bulan = 24
        }

        let hitung = nominal / bulan
        let hitunglagi = (nominal * bunga) / bulan

        let total = hitung + hitunglagi

        this.setState({
            output: "Rp. " + total + ",00"
        })
    }

    //render
    render() {
        return(
            <div className="container mt-3">
            <div className="card">
                <div className="card-header bg-primary text-light">
                    <h2 className="text-center">Cicilan Bank</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="row mt-3">
                            <div className="col-4"> 
                                <p>Nominal</p>
                            </div>
                            <div className="col-8"> 
                                <input className="form-control" name="nominal" type="number" value={this.state.nominal} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Bunga (%)</p>
                            </div>    
                            <div className="col-8"> 
                                <input className="form-control alert-primary"  name="bunga" type="number" value={this.state.bunga} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Periode</p>
                            </div>    
                            <div className="col-8"> 
                                <select className="form-control" name="periode"  value={this.state.periode} onChange={this.ChangeState}>
                                <option></option>
                                        <option value="6 bulan">6 Bulan</option>
                                        <option value="12 bulan">12 Bulan</option>
                                        <option value="18 bulan">18 Bulan</option>
                                        <option value="24 bulan">24 Bulan</option>
                                    </select>
                            </div>
                        </div>
                        <button type="submit" className="w-100 btn btn-primary mt-4 mb-3 text-light">Hitung</button>
                    </form>
                </div>
                <div className="card-footer">
                    <h2 className="text-center mb-3">Hasil</h2>
                    <button className="w-100 alert alert-primary" name="result">{this.state.output}</button>
                </div>
            </div>
            </div>
        )
    }

}
