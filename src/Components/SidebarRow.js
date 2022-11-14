import React from "react";
import "./SideBarRow.css"

const SideBarRow = ({ selected, Icon, title }) => {
    return (
        <div className={`sideBarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SideBarRow