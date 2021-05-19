import React from 'react'
import '../css_files/editadminprofile.css'
export default class EditAdminProfile extends React.Component{
    render(){
        return (
            <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-3">
            <h1 class="h3 mb-0 text-gray-800">Edit Profile</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active" aria-current="page">DataTables</li>
            </ol>
          </div>

        
          <div class="row"> 
          
            <div class="col-lg-12">
              <div class="card mb-4" id="profileCard">
                <div class="profile-edit">
                  <form class="form-edit">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="box-title">
                          <h3>Personal Details</h3>
                          <div class="row">
                            <div class="col-md-6">
                              <label>First Name</label>
                            </div>
                            <div class="col-md-6">
                              <span>Admin</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Last Name</label>
                            </div>
                            <div class="col-md-6">
                              <span>Admin</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Mobile Number</label>
                            </div>
                            <div class="col-md-6">
                              <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Gender</label>
                            </div>
                            <div class="col-md-6">
                              <span>Male</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>DOB</label>
                            </div>
                            <div class="col-md-6">
                              <span>13 April 1990 </span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="col-md-6">
                           <div class="box-title">
                          <h3>Education Details</h3>
                          <div class="row">
                            <div class="col-md-6">
                              <label>10th</label>
                            </div>
                            <div class="col-md-6">
                              <span>80%</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>12th</label>
                            </div>
                            <div class="col-md-6">
                              <span>90%</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Graducation %</label>
                            </div>
                            <div class="col-md-6">
                             <span>90%</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>College</label>
                            </div>
                            <div class="col-md-6">
                              <span>abc</span>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Stream</label>
                            </div>
                            <div class="col-md-6">
                              <span>cs</span>
                            </div>
                          </div>
                          
                        </div>
                      </div>


                      <div class="col-md-6">
                               <div class="box-title">
                          <h3>Address Information</h3>
                          <div class="row">
                            <div class="col-md-6">
                              <label>Current Address</label>
                            </div>
                            <div class="col-md-6">
                              <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>Pin Code</label>
                            </div>
                            <div class="col-md-6">
                            <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>City</label>
                            </div>
                            <div class="col-md-6">
                              <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>District</label>
                            </div>
                            <div class="col-md-6">
                             <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>

                            <div class="row">
                            <div class="col-md-6">
                              <label>State</label>
                            </div>
                            <div class="col-md-6">
                            <input type="text" placeholder="" name="" class="form-control"/>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div class="clear-fix"></div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>

           
          </div>
         
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a href="login.html" class="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        )
    }
}