import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Portfolio</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/106897179_695226344376739_753518412666226244_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGP-7GfSLKHrkZJ-lBQbRyDen6FZ7euTpx6foVnt65OnHd52lb6WLfWDxNAOdLQ8a1U-Wo0xw3A2XkYL6inFXGJ&_nc_ohc=ttp2MBFNaJUAX-lKbC5&_nc_ht=scontent.fbkk13-2.fna&oh=00_AT9WFBj969O52Q-f_0lcHVvrUeTJYRLVFA2TmdAGmDxdMQ&oe=634146C9" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Phongphira khamkhaek</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./Home" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>HOME</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./AboutUs" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>ABOUT US</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./Portfolio" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>PORTFOLIO</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        </div>
    )
}
