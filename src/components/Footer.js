import React, { useState } from 'react'
import Center from '../layouts/Center'
import Row from '../layouts/Row'
import Column from '../layouts/Column'
import NavItem from '../widgets/NavItem'
import SiteBrand from '../widgets/SiteBrand'
import Text from '../widgets/Text'

function Footer({data}) {
    const [footerProperties, setFooterProperties] = useState({
        containerStyle : {
            // background: '#eee3',
            padding: '2rem 0',
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


    const dummyThree = [
        'Popular Courses', 'Student Picks', 'Daily Picks', 'Top Ranking', 'Crash Courses'
    ]

  return (
    <div style={footerProperties.containerStyle}>    
        <Row align='top' justify='space-between'>
            <Row gap='5rem' width='50%' align='top'>
                <Column gap='.5rem'>
                {dummyTwo.map((item)=><NavItem fontSize='.8rem' icon='' text={item} />)}
                </Column>

                <Column gap='.5rem'>
                    {dummy.map((item)=><NavItem fontSize='.8rem' icon='' text={item} />)}
                </Column>

                <Column gap='.5rem'>
                    {dummyThree.map((item)=><NavItem fontSize='.8rem' icon='' text={item} />)}
                </Column>
            </Row>

            <Column>
                <SiteBrand />
                <Text text='8, Musili Street, Agege, Lagos, Nigeria' />
                <Text text='+234 806 017 7914' />
            </Column>
            
        </Row>    
    </div>
  )
}

export default Footer

