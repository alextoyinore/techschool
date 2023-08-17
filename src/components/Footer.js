import React, { useState } from 'react'
import Center from '../layouts/Center'
import Row from '../layouts/Row'
import Column from '../layouts/Column'

function Footer({data}) {
    const [footerProperties, setFooterProperties] = useState({
        containerStyle : {
            background: '#eee',
            padding: '2rem 0',
          
        }      
    })

    const dummy = [
        'About', 'Privacy Policy', 'Contact'
    ]

  return (
    <div style={footerProperties.containerStyle}>
        <Center width='80%'>
            <Row gap='5rem'>
                <Column>
                    {dummy.map((item)=><span>{item}</span>)}
                </Column>

                <Column>
                    {dummy.map((item)=><span>{item}</span>)}
                </Column>
            </Row>
        </Center>
    </div>
  )
}

export default Footer
