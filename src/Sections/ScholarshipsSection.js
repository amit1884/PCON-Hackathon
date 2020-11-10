import React ,{useState,useEffect}from 'react'
import {Tabs,Tab}from 'react-bootstrap'
// import AccordianSection from './AccordianSection'
import {Accordion,Card} from 'react-bootstrap'
import Loader from '../Loader'
import axios from 'axios'
function ScholarshipsSection() {
    const [key, setKey] = useState('Central Schemes');
    const [CentralData,setCentralData]=useState([])
    const [StateData,setStateData]=useState([])
    const [UGCData,setUGCData]=useState([])
    const [Loading,setLoading]=useState(true)
    var cenfrom='';
    var stafrom='';
    var ugc='';
    var i=0,j=0,k=0;
    useEffect(()=>{
        Central()
        State()
        UGC()
    },[])

    const Central= async ()=>{
        await axios.get('https://scholarshipapi.herokuapp.com/scholars/central')
        .then(res=>{
            setCentralData(res.data.data)
            setLoading(false)
            console.log(CentralData)
        })
        .catch(err=>console.log(err))
    }
    const State= async ()=>{
        await axios.get('https://scholarshipapi.herokuapp.com/scholars/state')
        .then(res=>{
            setStateData(res.data.data)
            setLoading(false)
            console.log(StateData)
        })
        .catch(err=>console.log(err))
    }
    const UGC= async ()=>{
        await axios.get('https://scholarshipapi.herokuapp.com/scholars/ugc')
        .then(res=>{
            setUGCData(res.data.data)
            setLoading(false)
            console.log(res.data.data)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <br/>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                style={{backgroundColor:'#f5f8fd'}}
                >
                <Tab eventKey="Central Schemes" title="Central Schemes">
                    <div className="tab_body">
                        {Loading?<Loader/>:
                        <Accordion>
                        {
                            CentralData.map(items=>{
                                if(cenfrom!==items.From)
                                {
                                    cenfrom=items.From;
                                    i++;
                                    return(
                                        <Card>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={i.toString()} className="accordian_header">
                                            {items.From}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={i.toString()}>
                                        <Card.Body>
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
                                               CentralData.map(item=>{
                                                   if(item.From===items.From)
                                                   {
                                                       return(
                                                       <tr>
                                                        <td data-column="Name of Scholarship">{item.title}</td>
                                                        <td data-column="Scheme Closing Date">{item.Scheme_Closing_Date}</td>
                                                        <td data-column="Defective Verification">{item.Defective_Verification}</td>
                                                        <td data-column="Institute Verification">{item.Institute_Verification}</td>
                                                        <td data-column="Guidelines"><a href ={item.Guidelines}>Guidelines</a></td>
                                                        <td data-column="FAQs"><a href ={item.FAQ}>FAQs</a></td>
                                                       </tr>
                                                       )
                                                   }
                                               })
                                           }
                                               </tbody>
                                           </table>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        </Card>
                                    )
                                }
                            })
                        }
                    </Accordion>
                        }
                    </div>
                </Tab>
                <Tab eventKey="State Schemes" title="State Schemes">
                    <div className="tab_body">
                        {Loading?<Loader/>:
                            <Accordion>
                            {
                                StateData.map(items=>{
                                    if(stafrom!=items.From)
                                    {
                                        stafrom=items.From
                                        j++;
                                    return(
                                        <Card>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={j.toString()} className="accordian_header">
                                            {items.From}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={j.toString()}>
                                        <Card.Body>
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
                                            StateData.map(item=>{
                                                if(item.From===items.From)
                                                {
                                                    return(
                                                        <tr>
                                                        <td data-column="Name of Scholarship">{item.title}</td>
                                                        <td data-column="Scheme Closing Date">{item.Scheme_Closing_Date}</td>
                                                        <td data-column="Defective Verification">{item.Defective_Verification}</td>
                                                        <td data-column="Institute Verification">{item.Institute_Verification}</td>
                                                        <td data-column="Guidelines"><a href ={item.Guidelines}>Guidelines</a></td>
                                                        <td data-column="FAQs"><a href ={item.FAQ}>FAQs</a></td>
                                                       </tr>
                                                    )
                                                }
                                            })
                                        }
                                        </tbody>
                                        </table>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        </Card>
                                    )
                                 }
                                })
                            }
                        </Accordion>
                        }
                    </div>
                </Tab>
                <Tab eventKey="UGC/AICTE Schemes" title="UGC/AICTE Schemes">
                    <div className="tab_body">
                        {Loading?<Loader/>:
                        <Accordion>
                        {
                            UGCData.map(items=>{
                                if(ugc!==items.From)
                                {
                                    ugc=items.From;
                                    k++;
                                return(
                                    <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={k.toString()} className="accordian_header">
                                        {items.From}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={k.toString()}>
                                    <Card.Body>
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
                                        UGCData.map(item=>{
                                            if(item.From===items.From)
                                            {
                                                return(
                                                    <tr>
                                                    <td data-column="Name of Scholarship">{item.title}</td>
                                                    <td data-column="Scheme Closing Date">{item.Scheme_Closing_Date}</td>
                                                    <td data-column="Defective Verification">{item.Defective_Verification}</td>
                                                    <td data-column="Institute Verification">{item.Institute_Verification}</td>
                                                    <td data-column="Guidelines"><a href ={item.Guidelines}>Guidelines</a></td>
                                                    <td data-column="FAQs"><a href ={item.FAQ}>FAQs</a></td>
                                                   </tr>
                                                )
                                            }
                                        })
                                    }
                                    </tbody>
                                    </table>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                )
                            }
                            })
                        }
                        </Accordion>

                        }
                    </div>
                </Tab>
                </Tabs>
        </div>
    )
}

export default ScholarshipsSection
