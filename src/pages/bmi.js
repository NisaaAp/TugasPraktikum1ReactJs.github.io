import React from "react";

export default class Bmi extends React.Component {
    constructor() {
        super()
        this.state = ({
            BB: 0.0,
            TB: 0.0,
            output: ""
        })
    }
    ChangeState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        let BB = this.state.BB
        let TB = this.state.TB / 100

        let BMI = BB / (TB * TB) 

        let status;

        if (BMI <= 18.50) {
            status = "Kekurangan berat badan"
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            status = "Normal (ideal)"
        } else if (BMI >= 25.0 && BMI <= 29.9) {
            status = "Kelebihan berat badan"
        } else if (BMI >= 30.0) {
            status = "Kegemukan (obesitas)"
        }

        this.setState({
            output: status
        })
    }

    render() {
        return(
            <div className="container mt-3">
            <div className="card">
                <div className="card-header bg-light text-dark">
                    <h2 className="text-center">Body Mass Index</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="row mt-3">
                            <div className="col-4"> 
                                <p>Berat badan (kg)</p>
                            </div>
                            <div className="col-8"> 
                                <input className="form-control" name="BB" type="number" value={this.state.BB} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">    
                                <p>Tinggi badan (cm)</p>
                            </div>    
                            <div className="col-8"> 
                                <input className="form-control" name="TB" type="number" value={this.state.TB} onChange={this.ChangeState} />
                            </div>
                        </div>
                        <button type="submit" className="w-100 btn btn-success mt-4 mb-3 text-light">Hitung</button>
                    </form>
                </div>
                <div className="card-footer">
                    <h2 className="text-center mb-3">Hasil</h2>
                    <button className="w-100 alert alert-success" name="result">{this.state.output}</button>
                </div>
            </div>
            </div>
        )
    }
}