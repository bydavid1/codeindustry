import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import logo from '../../../storage/static/logo.png'

class Header extends React.Component {

    constructor(props) {
        super(props)
		this.url = window.location.href
        this.navbarFixed = React.createRef();
        this.navbarTheme = React.createRef();
		this.searchForm = React.createRef();
		this.navAside = React.createRef();
		this.openSearchForm = this.openSearchForm.bind(this)
		this.closeSearchForm = this.closeSearchForm.bind(this)
		this.openNavAside = this.openNavAside.bind(this)
		this.closeNavAside = this.closeNavAside.bind(this)
    }

    componentDidMount() {
        let lastScrollTop = 0;

		window.addEventListener('scroll', () => {
			var wScroll = document.scrollingElement.scrollTop;
			if ( wScroll > this.navbarFixed.current.offsetHeight) {
				if ( wScroll < lastScrollTop ) {
					this.navbarFixed.current.classList.remove('slide-up')
					this.navbarFixed.current.classList.add('slide-down')
				} else {
					this.navbarFixed.current.classList.remove('slide-down')
					this.navbarFixed.current.classList.add('slide-up')
				}
			}
			lastScrollTop = wScroll
		})
    }

	openSearchForm() {
		this.searchForm.current.classList.add('active')
	}

	closeSearchForm() {
		this.searchForm.current.classList.remove('active')
	}

	openNavAside() {
		this.navAside.current.classList.add('active')
		this.navbarTheme.current.classList.add('shadow-active')
	}

	closeNavAside() {
		if (this.navAside.current.classList.contains('active')) {
			this.navAside.current.classList.remove('active')
			this.navbarTheme.current.classList.remove('shadow-active')
		}
	}

    render() {
		return (
			<header id="header">
				<div id="navbar-theme" ref={this.navbarTheme}>
					<div className="navbar navbar-expand-lg py-0" id="navbar-fixed" ref={this.navbarFixed}>
						<div className="container">
							<Link className="navbar-brand nav-logo-theme" to="/">
								<img className="logo-theme" src={logo} alt="" />
							</Link>

							<ul className="navbar navbar-nav nav menu-theme">
								{
									this.props.menu.map((item, index) => 
										<li key={index}>
											<Link to={item.link}>{item.name}</Link>
										</li>
									)
								}
							</ul>

							<div className="nav-btns">
								{/* <button className="search-btn" onClick={this.openSearchForm}><FontAwesomeIcon icon="search"/></button> */}
								<button className="aside-btn" onClick={this.openNavAside}><FontAwesomeIcon icon="bars"/></button>
								{/* <div className="container">
									<div className="search-form" ref={this.searchForm}>
										<input className="search-input" type="text" name="search"
											placeholder="Enter Your Search ..." />
										<button className="search-close" onClick={this.closeSearchForm}><FontAwesomeIcon icon="times"/></button>
									</div>
								</div> */}
							</div>
						</div>
					</div>

					<div id="nav-aside" ref={this.navAside}>
						<div className="section-row">
							<ul className="nav-aside-menu menu-style">
								{
									this.props.menu.map((item, index) => 
										<li key={index}>
											<Link to={item.link}>{item.name}</Link>
										</li>
									)
								}
							</ul>
						</div>

						<div className="section-row">
							<h3>Follow us</h3>
							<ul className="nav-aside-social">
								<li>
									<FacebookShareButton url={this.url} resetButtonStyle={false}>
										<FontAwesomeIcon icon={["fab", "facebook"]}/>
									</FacebookShareButton>
								</li>
								<li>
									<TwitterShareButton url={this.url} resetButtonStyle={false}>
										<FontAwesomeIcon icon={["fab", "twitter"]}/>
									</TwitterShareButton>
								</li>
								<li>        
									<LinkedinShareButton url={this.url} resetButtonStyle={false}>
										<FontAwesomeIcon icon={["fab", "linkedin"]}/>
									</LinkedinShareButton>
								</li>
								<li>        
									<EmailShareButton url={this.url} resetButtonStyle={false}>
										<FontAwesomeIcon icon={["fa", "envelope"]}/>
									</EmailShareButton>
								</li>
							</ul>
						</div>

						<button className="nav-aside-close" onClick={this.closeNavAside}><FontAwesomeIcon icon="times"/></button>
					</div>
				</div>
			</header>
		)
    }
}

export default Header;