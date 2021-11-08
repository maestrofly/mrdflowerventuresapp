import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu,
SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
           <SidebarMenu>
               <SidebarLink to="/">Indoor plants</SidebarLink>
               <SidebarLink to="/">Outdoor plants</SidebarLink>
               <SidebarLink to="/">About Us</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to="/">Make your order</SidebarRoute>
           </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Sidebar
