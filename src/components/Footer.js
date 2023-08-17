import React, { useState } from 'react'
import Center from '../layouts/Center'
import Row from '../layouts/Row'
import Column from '../layouts/Column'

function Footer({data}) {
    const [footerProperties, setFooterProperties] = useState({
        containerStyle : {
            background: '#eee3',
            padding: '2rem 0',
            borderTop: '1px solid #eee'
        },
        
        itemStyle: {
            cursor: 'pointer',
        }
    })

    const dummy = [
        'About', 'Privacy Policy', 'Contact', 'Our Partners', 'Alumni', 'Careers', 'Blog'
    ]

    const dummyTwo = [
        'Kids Zone', 'For Women', 'For Students', 'For Undergrads', 'Alumni'
    ]

  return (
    <div style={footerProperties.containerStyle}>
        <Center width='80%'>
            <Row gap='5rem' align='top'>
                <Column>
                    {dummyTwo.map((item)=><span style={footerProperties.itemStyle}>{item}</span>)}
                </Column>

                <Column>
                    {dummy.map((item)=><span style={footerProperties.itemStyle}>{item}</span>)}
                </Column>
            </Row>
        </Center>
    </div>
  )
}

export default Footer
