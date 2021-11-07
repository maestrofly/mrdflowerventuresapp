import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu,
SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
           <SidebarMenu>
               <SidebarLink to="/">Indoor</SidebarLink>
               <SidebarLink to="/">Outdoor</SidebarLink>
               <SidebarLink to="/">Medium</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to="/">Make your order</SidebarRoute>
           </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Sidebar