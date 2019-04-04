import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import btc from "../logo/btc.png";
import eos_1 from "../logo/eos_1.png";
import eth_logo from "../logo/eth_logo.png";
import ltc from "../logo/ltc.png";
import trx from "../logo/trx.jpg";
import xrp from "../logo/xrp.png";
const Cryptcard = props => {
  return (
    <Container>
      <Row>
        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={btc} alt='btc_img' />
              <h4>Bitcoin</h4>
              <p>Price: {props.BTC_PRICE}</p>
              <p>Market Capital: {props.BTC_MKT}</p>
              <p>Total Volume 24hrs: {props.BTC_TV}</p>
              <p>Change: {props.BTC_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={eth_logo} alt='eth_logo' />
              <h4>Ethereum</h4>
              <p>Price: {props.ETH_PRICE}</p>
              <p>Market Capital: {props.ETH_MKT}</p>
              <p>Total Volume 24hrs: {props.ETH_TV}</p>
              <p>Change: {props.ETH_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={ltc} alt='ltc_logo' />
              <h4>Litecom</h4>
              <p>Price: {props.LTC_PRICE}</p>
              <p>Market Capital: {props.LTC_MKT}</p>
              <p>Total Volume 24hrs: {props.LTC_TV}</p>
              <p>Change: {props.LTC_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={xrp} alt='xrp_logo' />
              <h4>Ripple</h4>
              <p>Price: {props.XRP_PRICE}</p>
              <p>Market Price: {props.XRP_MKT}</p>
              <p>Total Volume 24hrs: {props.XRP_TV}</p>
              <p>Change: {props.XRP_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={eos_1} alt='eos_logo' />
              <h4>EOS</h4>
              <p>Price: {props.EOS_PRICE}</p>
              <p>Market Price: {props.EOS_MKT}</p>
              <p>Total Volume 24hrs: {props.EOS_TV}</p>
              <p>Change: {props.EOS_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
            <Card.Body>
              <img src={trx} alt='trx_logo' />
              <h4>Tron</h4>
              <p>Price: {props.TRX_PRICE}</p>
              <p>Market Price: {props.TRX_MKT}</p>
              <p>Total Volume{props.TRX_TV}</p>
              <p>Change: {props.TRX_CPCT}%</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cryptcard;
