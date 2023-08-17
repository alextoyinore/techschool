import React from 'react'
import NavItem from '../widgets/NavItem'
import SiteBrand from '../widgets/SiteBrand'
import OutlineButton from '../widgets/OutlineButton'
import Local from '../data/Local'
import Row from '../layouts/Row'
import Center from '../layouts/Center'
import Container from '../layouts/Container'

function TopNav() {
    const topnavStyle = {
        width: '80%',
        margin: 'auto',
        height: '90px',
    }

    const topnavContainerStyle = {
        width: '100%', 
        position: 'fixed', 
        left: '0', 
        top:'0', 
        background: 'white', 
        boxShadow: '0 0 2rem #0003',
        zIndex: '999',
    }

    const topLineNavStyle = {
        width: '100%',
        height: '1.75rem',
        background: 'rgb(8, 71, 184)',
        alignContent: 'center',
        alignItems: 'center',
    }

    const topLineNavContentStyle = {
        width: '45%',
        margin: 'auto',
        display: 'flex',
        gap: '2rem',
        alignContent: 'center',
        alignItems: 'center',
    }


  return (
    <div style={topnavContainerStyle}>
        <div style={topLineNavStyle}>
            <div style={topLineNavContentStyle}>
                {Local.listItems.map((item) => <NavItem color='white' text={item} />)}
            </div>
        </div>
        <Container padding='1rem 0' height='90px'>
            <Center width='80%'>
                <Row justify='space-between'>
                    <SiteBrand />
                    <OutlineButton border='1.5px solid' width='17.5%' padding='0 2rem' text='Get Started' />
                </Row>
            </Center>
        </Container>
    </div>
  )
}

export default TopNav

