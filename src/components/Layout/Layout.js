import React from 'react';

import './Layout.css';

const Layout = (props) => (
  <div>
    <div>Toolbar, SideDrawer, Backdrop</div>

    <main>{props.children}</main>
  </div>
  
);

export default Layout;
