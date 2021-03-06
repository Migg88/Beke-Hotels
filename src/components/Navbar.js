import React from 'react'
import { Link, navigate, } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer
} from "mdbreact";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <MDBNavbar fixed="top" style={{backgroundColor: 'rgba(0,70,96,0.8)'}} dark expand="md">
        <MDBContainer>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <Link className="nav-link waves-effect waves-light" to="/">Home</Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Destinos</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem 
                      onClick={e => {
                        e.preventDefault()
                        navigate("/hotels/hotel-wayak-bacalar/")
                      }}
                    >
                      Wayak Bakalar - Todo Incluido
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      onClick={e => {
                        e.preventDefault()
                        navigate("/hotels/hotel-casa-maya-holbox/")
                      }}
                    >
                      Casa Maya Holbox
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      onClick={e => {
                        e.preventDefault()
                        navigate("/hotels/hotel-beke-mahahual/")
                      }}
                    >
                      Beke Mahahual
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default Navbar
