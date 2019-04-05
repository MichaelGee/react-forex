import React, { Component } from "react";
import Cryptcard from "./cryptcard";
/*import { Line } from "react-chartjs-2";*/
import axios from "axios";
import Infocard1 from "./infocard1";
import Bar from "./navbar";
class Cryptodata extends Component {
  state = {
    time: "",
    BTC_PRICE: "",
    BTC_MKT: "",
    BTC_TV: "",
    BTC_CPCT: "",
    ETH_PRICE: "",
    ETH_MKT: "",
    ETH_TV: "",
    ETH_CPCT: "",
    LTC_PRICE: "",
    LTC_MKT: "",
    LTC_TV: "",
    LTC_CPCT: "",
    XRP_PRICE: "",
    XRP_MKT: "",
    XRP_TV: "",
    XRP_CPCT: "",
    EOS_PRICE: "",
    EOS_MKT: "",
    EOS_TV: "",
    EOS_CPCT: "",
    TRX_PRICE: "",
    TRX_MKT: "",
    TRX_TV: "",
    TRX_CPCT: ""
  };

  componentDidMount() {
    this.api_call();
    setInterval(this.api_call, 30000);
  }

  api_call = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,EOS,TRX&tsyms=USD`
      )
      .then(res => {
        this.setState({
          time: res.headers.date,
          BTC_PRICE: res.data.DISPLAY.BTC.USD.PRICE,
          BTC_MKT: res.data.DISPLAY.BTC.USD.MKTCAP,
          BTC_TV: res.data.DISPLAY.BTC.USD.TOTALVOLUME24H,
          BTC_CPCT: res.data.DISPLAY.BTC.USD.CHANGEPCT24HOUR,
          ETH_PRICE: res.data.DISPLAY.ETH.USD.PRICE,
          ETH_MKT: res.data.DISPLAY.ETH.USD.MKTCAP,
          ETH_TV: res.data.DISPLAY.ETH.USD.TOTALVOLUME24H,
          ETH_CPCT: res.data.DISPLAY.ETH.USD.CHANGEPCT24HOUR,
          LTC_PRICE: res.data.DISPLAY.LTC.USD.PRICE,
          LTC_MKT: res.data.DISPLAY.LTC.USD.MKTCAP,
          LTC_TV: res.data.DISPLAY.LTC.USD.TOTALVOLUME24H,
          LTC_CPCT: res.data.DISPLAY.LTC.USD.CHANGEPCT24HOUR,
          XRP_PRICE: res.data.DISPLAY.XRP.USD.PRICE,
          XRP_MKT: res.data.DISPLAY.XRP.USD.MKTCAP,
          XRP_TV: res.data.DISPLAY.XRP.USD.TOTALVOLUME24H,
          XRP_CPCT: res.data.DISPLAY.XRP.USD.CHANGEPCT24HOUR,
          EOS_PRICE: res.data.DISPLAY.EOS.USD.PRICE,
          EOS_MKT: res.data.DISPLAY.EOS.USD.MKTCAP,
          EOS_TV: res.data.DISPLAY.EOS.USD.TOTALVOLUME24H,
          EOS_CPCT: res.data.DISPLAY.EOS.USD.CHANGEPCT24HOUR,
          TRX_PRICE: res.data.DISPLAY.TRX.USD.PRICE,
          TRX_MKT: res.data.DISPLAY.TRX.USD.MKTCAP,
          TRX_TV: res.data.DISPLAY.TRX.USD.TOTALVOLUME24H,
          TRX_CPCT: res.data.DISPLAY.TRX.USD.CHANGEPCT24HOUR
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/*<Line data={data} />*/}
        <Bar />
        <Infocard1 time={this.state.time} />
        <Cryptcard
          BTC_PRICE={this.state.BTC_PRICE}
          BTC_MKT={this.state.BTC_MKT}
          BTC_TV={this.state.BTC_TV}
          BTC_CPCT={this.state.BTC_CPCT}
          ETH_PRICE={this.state.ETH_PRICE}
          ETH_MKT={this.state.ETH_MKT}
          ETH_TV={this.state.ETH_TV}
          ETH_CPCT={this.state.ETH_CPCT}
          LTC_PRICE={this.state.LTC_PRICE}
          LTC_MKT={this.state.LTC_MKT}
          LTC_TV={this.state.LTC_TV}
          LTC_CPCT={this.state.LTC_CPCT}
          XRP_PRICE={this.state.XRP_PRICE}
          XRP_MKT={this.state.XRP_MKT}
          XRP_TV={this.state.XRP_TV}
          XRP_CPCT={this.state.XRP_CPCT}
          EOS_PRICE={this.state.EOS_PRICE}
          EOS_MKT={this.state.EOS_MKT}
          EOS_TV={this.state.EOS_TV}
          EOS_CPCT={this.state.EOS_CPCT}
          TRX_PRICE={this.state.TRX_PRICE}
          TRX_MKT={this.state.TRX_MKT}
          TRX_TV={this.state.TRX_TV}
          TRX_CPCT={this.state.TRX_CPCT}
        />
      </div>
    );
  }
}

export default Cryptodata;

/*<style jsx>{`
            .container {
              margin: 250px auto;
              overflow: hidden;
              width: 80%;
              text-align: center;
            }
          `}</style>*/

/*const data = {
      labels: [
        "Tanzania",
        "Egypt",
        "Algeria",
        "Ethiopia",
        "Kenya",
        "Nigeria",
        "DRC",
        "Sudan",
        "South Africa",
        "Uganda"
      ],
      datasets: [
        {
          label: "Population",
          data: [
            181563000,
            89125000,
            39670000,
            103764000,
            45533000,
            181563000,
            77267000,
            40235000,
            54957000,
            37102000
          ],
          fill: true, // Don't fill area under the line
          borderColor: "blue" // Line color
        }
      ]
    };*/
