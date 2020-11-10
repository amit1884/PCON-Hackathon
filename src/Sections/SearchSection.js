import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Button,Modal} from 'react-bootstrap'
function SearchSection() {

    const [Type,setType]=useState("")
    const [FromArray,setFromArray]=useState([])
    const [From,setFrom]=useState("")
    const [show, setShow] = useState(false);
    const [Data,setData]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        FromHandle();
    },[Type])

    const FromHandle= async()=>{
        await axios.get(`http://localhost:8000/scholars/froms?type=${Type}`)
        .then(res=>{
            console.log(res.data.froms)
            setFromArray(res.data.froms)
        })
        .catch(err=>console.log(err))
    }

    const SubmitHandler= async(e)=>{
        e.preventDefault();
        console.log(Type,From)
        await axios.get(`http://localhost:8000/scholars/details?type=${Type}&from=${From}`)
        .then(res=>{
            console.log(res.data.message)
            setData(res.data.message)
            handleShow();
        })
        .catch(err=>console.log(err))
    }
    return (
        <div style={{margin:'10px 20px'}}>
            <br/>
             <h5 className="Search-head">Specific Search</h5>
            <br />
            <div className="form_container">
            <form onSubmit={SubmitHandler}>
                <lable className="lable"><u>Scheme</u></lable><br/><br/>
                <select onChange={(e)=>setType(e.target.value)} value={Type}>
                    <option value ="Select Scheme">Select Scheme</option>
                    <option value="Central Schemes">Central Schemes</option>
                    <option value="State Schemes">State Schemes</option>
                    <option value="UGC / AICTE Schemes">UGC / AICTE Schemes</option>
                </select><br/><br/>
                {
                    Type=='Central Schemes'||Type==='UGC / AICTE Schemes'?
                    <lable className="lable"><u>Ministry/Department</u></lable>
                    :Type==='State Schemes'?
                    <lable className="lable"><u>State</u></lable>:null
                }
                <br/><br/>
                {
                    Type=='Central Schemes'||Type==='UGC / AICTE Schemes'||Type==='State Schemes'?
                   <select onChange={(e)=>setFrom(e.target.value)} value={From}>
                       <option value ="select">Select</option>
                       {
                            FromArray.map(items=>{
                                return(
                                    <option value={items}>{items}</option>
                                )
                            })
                       }
                   </select>
                    :null
                }
               <br/><br/>
               <Button type="submit" variant="primary" onSubmit={SubmitHandler}>
                Search
                </Button>
            </form>
            </div>

            {/* Modal Area */}
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
        </div>
    )
}

export default SearchSection
