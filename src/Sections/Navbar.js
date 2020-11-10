import React ,{useState}from 'react'
import logo from '../assets/images/logo.png'
import axios from 'axios'
import {Navbar,Form,FormControl,Button,Modal} from 'react-bootstrap'
function NavbarSection() {
  const[Text,setText]=useState('')
  const [Data,setData]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const SubmitHandler  =  async(e)=>{
    e.preventDefault()
    console.log(Text)
    if(Text!=='')
    {
      await axios.get(`https://scholarshipapi.herokuapp.com/scholars/search?text=${Text}`)
      .then(res=>{
        console.log(res.data.scholar)
        handleShow()
        setData(res.data.scholar)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
    return (
        <React.Fragment>
      <Navbar bg="light" variant="dark" style={{borderBottom:'1px solid black'}}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto" onSubmit={SubmitHandler}>
        <FormControl type="text" placeholder="Search by title/state" className="mr-sm-2"value={Text} onChange={(e)=>setText(e.target.value)}/>
        <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Total Result : {Data.length} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <table className="table">
                <thead>
                    <tr id="headRow">
                    <th>Name of Scholarship</th>
                    <th>Scheme Closing Date</th>
                    <th>Defective Verification</th>
                    <th>Institute Verification</th>
                    <th>Guidelines</th>
                    <th>FAQs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map(items=>{
                            return(
                                <tr>
                                <td data-column="Name of Scholarship">{items.title}</td>
                                <td data-column="Scheme Closing Date">{items.Scheme_Closing_Date}</td>
                                <td data-column="Defective Verification">{items.Defective_Verification}</td>
                                <td data-column="Institute Verification">{items.Institute_Verification}</td>
                                <td data-column="Guidelines"><a href ={items.Guidelines}>Guidelines</a></td>
                                <td data-column="FAQs"><a href ={items.FAQ}>FAQs</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
    </React.Fragment>
    )
}

export default NavbarSection
