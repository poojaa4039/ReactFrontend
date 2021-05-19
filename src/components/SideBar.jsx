import React from 'react'
import '../css_files/sidebar.css'
import 'font-awesome/css/font-awesome.min.css';

function SideBar(){
    return(
        <div class="sidebar">
	<header>Menu</header>
	<ul>
          <li><p ><i class="fa fa-qrcode"></i>Dashboard</p></li>

          <li><p><i class="fa fa-link"></i>Feedback</p></li>

          <li><p><i class="fa fa-home"></i>Upload files</p></li>

          <li><p><i class="fa fa-stream"></i>Registeration </p></li>
	</ul>


</div>
    )
}
export default SideBar;