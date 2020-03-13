import React, { Component } from 'react';
import {Nav, Row,Col,Container,Image,Jumbotron,Button} from 'react-bootstrap';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    document.querySelector('body').addEventListener("click", this.handleElement, false);
  }
  componentWillUnmount() {
    document.querySelector('body').removeEventListener("click", this.handleElement, false);
  }
  handleElement(e) {
     console.log(e.target.innerText);
     e.target.innerText = "Deleted";
  };

  saveHandling(){
    console.log(document.getElementById("Main"));

  }
  render() {
    return (
      <div className="App">
      <Button onClick={this.saveHandling}>Save</Button>
        <div id="Main">
        <Nav>
        <Nav.Item>
          <Nav.Link href="/home">PTT</Nav.Link>
        </Nav.Item>
        
      </Nav>
      <Header></Header>
      <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>     
      <Container fluid className="margin-section">
        <Row >
          <Col sm>
          <h3>To get started</h3>
          <Image src="https://www.scg.com/sustainability/circular-economy/images/knowledge/47/20200219-100434-1x1YXDI9Pt.jpg" thumbnail />
          <p>
            ทุกวันนี้ โลกกำลังเผชิญปัญหาการเพิ่มขึ้นของประชากรอย่างรวดเร็ว ทำให้ความต้องการใช้ทรัพยากรธรรมชาติเพิ่มขึ้นอย่างไม่หยุดยั้ง รวมถึงปัญหาสิ่งแวดล้อมที่ทวีความรุนแรงขึ้นอย่างต่อเนื่อง ทั้งสภาวะโลกร้อน 
          </p>
          </Col>
          <Col sm>
          <h3>To get started</h3>
          <Image src="https://www.scg.com/sustainability/circular-economy/images/knowledge/47/20200219-100434-1x1YXDI9Pt.jpg" thumbnail />

          <p>
            เอสซีจี ตระหนักถึงความสำคัญของหลักเศรษฐกิจหมุนเวียน (Circular Economy) กุญแจสำคัญสู่การบรรลุเป้าหมายการพัฒนาอย่างยั่งยืนทั้งในมิติด้านเศรษฐกิจ สังคม 
          </p>
          </Col>
          <Col sm>
          <h3>To get started</h3>
          <Image src="https://www.scg.com/sustainability/circular-economy/images/knowledge/47/20200219-100434-1x1YXDI9Pt.jpg" thumbnail />

            <p>
              
              เดิมที เศรษฐกิจแบบเส้นตรง (Linear Economy) คือการนำทรัพยากรมาผลิตสินค้า และเมื่อเลิกใช้แล้วจะถูกทิ้งไม่นำกลับมาใช้อีก เศรษฐกิจแบบเส้นตรงจึงส่งผลกระทบต่อโลก  
            </p>
          
          </Col>
        </Row>
      </Container>
      <div className="banner">
        <Container>
          <h2>พลาสติกอย่างสร้างสรรค์ ของโครงการ “วน” </h2>

        </Container>

      </div>
      
      <Container className="margin-section">
        <h2>SCG Circular Way</h2>
        <p>ร่วมสร้างพฤติกรรมการหมุนเวียนทรัพยากรกลับมาใช้ให้คุ้มค่าที่สุด ไปด้วยกันกับ SCG
เรานำหลักเศรษฐกิจหมุนเวียน (Circular Economy)มาปรับใช้ในการดำเนินธุรกิจ ภายใต้แนวปฏิบัติ SCG Circular Way
ด้วยการใช้ทรัพยากรให้เกิดประโยชน์สูงสุดตั้งแต่การผลิต การใช้และวนกลับเข้าสู่กระบวนการผลิตเป็นวัตถุดิบใหม่
โดยขับเคลื่อนผ่านแนวทางการดำเนิน 3 ธุรกิจหลักของ SCG </p>
      </Container>
        <footer>
          <Container>
            <p>copyright 2020 PTT </p>
          </Container>
        </footer>
        </div>
     
      </div>
    );
  }
}

export default App;
