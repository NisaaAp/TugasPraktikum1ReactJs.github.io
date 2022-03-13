 import React from "react"
 import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Bmi from "./pages/bmi";
import Cicilan from "./pages/cicilan_bank";
import Hitung from "./pages/hitung_harga_akhir";
import Biner from "./pages/biner";
import Oktal from "./pages/oktal";
import Desimal from "./pages/desimal";
import Hexadesimal from "./pages/heksadesimal";

//hanya boleh ada 1 exact dimana disitu adalah halaman utama
export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bmi} />
                <Route path="/cicilan" component={Cicilan} />
                <Route path="/hargaAkhir" component={Hitung} />
                <Route path="/biner" component={Biner} />
                <Route path="/oktal" component={Oktal} />
                <Route path="/desimal" component={Desimal} />
                <Route path="/heksadesimal" component={Hexadesimal} />

            </Switch>
        )
    }
}
