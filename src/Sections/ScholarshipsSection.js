import React ,{useState,useEffect}from 'react'
import {Tabs,Tab}from 'react-bootstrap'
// import AccordianSection from './AccordianSection'
import {Accordion,Card,Button} from 'react-bootstrap'
import axios from 'axios'
var i=0;
function ScholarshipsSection() {
    const [key, setKey] = useState('Central Schemes');
    const [CentralData,setCentralData]=useState([])
    const [StateData,setStateData]=useState([])
    const [UGCData,setUGCData]=useState([])
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
        await axios.get('http://localhost:8000/scholars/central')
        .then(res=>{
            setCentralData(res.data.data)
            console.log(CentralData)
        })
        .catch(err=>console.log(err))
    }
    const State= async ()=>{
        await axios.get('http://localhost:8000/scholars/state')
        .then(res=>{
            setStateData(res.data.data)
            console.log(StateData)
        })
        .catch(err=>console.log(err))
    }
    const UGC= async ()=>{
        await axios.get('http://localhost:8000/scholars/ugc')
        .then(res=>{
            setUGCData(res.data.data)
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
                    <Accordion>
                            {
                                CentralData.map(items=>{
                                    if(cenfrom!==items.From)
                                    {
                                        cenfrom=items.From;
                                        i++;
                                        return(
                                            <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={i.toString()}>
                                                {items.From}
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={i.toString()}>
                                            <Card.Body>
                                               {
                                                   CentralData.map(item=>{
                                                       if(item.From===items.From)
                                                       {
                                                           return(
                                                           <p>{item.title}</p>
                                                           )
                                                       }
                                                   })
                                               }
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            </Card>
                                        )
                                    }
                                })
                            }
                        </Accordion>
                    </div>
                </Tab>
                <Tab eventKey="State Schemes" title="State Schemes">
                    <div className="tab_body">
                        <Accordion>
                            {
                                StateData.map(items=>{
                                    if(stafrom!=items.From)
                                    {
                                        stafrom=items.From
                                        j++;
                                    return(
                                        <Card>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={j.toString()}>
                                            {items.From}
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={j.toString()}>
                                        <Card.Body>
                                        {
                                            StateData.map(item=>{
                                                if(item.From===items.From)
                                                {
                                                    return(
                                                    <p>{item.title}</p>
                                                    )
                                                }
                                            })
                                        }
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        </Card>
                                    )
                                 }
                                })
                            }
                        </Accordion>
                    </div>
                </Tab>
                <Tab eventKey="UGC/AICTE Schemes" title="UGC/AICTE Schemes">
                    <div className="tab_body">
                        <Accordion>
                        {
                            UGCData.map(items=>{
                                if(ugc!==items.From)
                                {
                                    ugc=items.From;
                                    k++;
                                return(
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={k.toString()}>
                                        {items.From}
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={k.toString()}>
                                    <Card.Body>
                                    {
                                        UGCData.map(item=>{
                                            if(item.From===items.From)
                                            {
                                                return(
                                                <p>{item.title}</p>
                                                )
                                            }
                                        })
                                    }
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                )
                            }
                            })
                        }
                </Accordion>
                    </div>
                </Tab>
                </Tabs>
        </div>
    )
}

export default ScholarshipsSection
