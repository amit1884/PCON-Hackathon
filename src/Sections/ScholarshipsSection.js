import React ,{useState}from 'react'
import {Tabs,Tab}from 'react-bootstrap'
function ScholarshipsSection() {
    const [key, setKey] = useState('Central Schemes');
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

                    </div>
                </Tab>
                <Tab eventKey="State Schemes" title="State Schemes">
                    <div className="tab_body">

                    </div>
                </Tab>
                <Tab eventKey="UGC/AICTE Schemes" title="UGC/AICTE Schemes">
                    <div className="tab_body">

                    </div>
                </Tab>
                </Tabs>
        </div>
    )
}

export default ScholarshipsSection
