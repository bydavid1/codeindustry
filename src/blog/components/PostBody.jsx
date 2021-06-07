import React from 'react'
import StickyShares from '../components/StickyShares.jsx';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

class PostBody extends React.Component {

    constructor(props) {
        super(props)

        //References
        this.stickyShares = React.createRef();
        this.sharesContainer = React.createRef();

        this.state = {
            buttonsHeight: 0,
            buttonsTop: 0,
            containerTop: 0,
            containerLeft: 0,
            containerHeight: 0,
            containerBottom: 0
        }

        //Components for react markdown
        this.components = {
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter style={atomDark} showLineNumbers="true" language={match[1]} PreTag="div" 
                  children={String(children).replace(/\n$/, '')} {...props} />
              ) : (
                <code className={className} {...props} />
              )
            },
            img({node, ...props}) {
              return (
                <img className="img-fluid" {...props}/>
              )
            }
        }
    }

    componentDidMount() {
        this.offsetTop = 80;
        setTimeout(() => {
            this.setStickyValues()

            window.addEventListener('scroll', this.onStart)
            window.addEventListener('resize', this.onResize)

        }, 1000);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onStart)
		window.removeEventListener('resize', this.onResize)
    }

    onResize = () => {
        this.setBehavior()
    }

    onStart = () => {
        this.setStickyValues()
        this.setBehavior()
    }

    setStickyValues() {
        this.setState({
            buttonsHeight: this.stickyShares.current.offsetHeight,
            buttonsTop: this.stickyShares.current.getBoundingClientRect().top,
            containerTop: this.sharesContainer.current.getBoundingClientRect().top,
            containerLeft: this.sharesContainer.current.getBoundingClientRect().left,
            containerHeight: this.sharesContainer.current.offsetHeight
        })

        this.setState({
            containerBottom: this.state.containerHeight + this.state.containerTop
        })
    }

    setBehavior() {
        let wScroll = document.scrollingElement.scrollTop
        if (this.state.containerBottom - this.state.buttonsHeight - this.offsetTop < wScroll) {
            this.stickyShares.current.style.position = "absolute";
            this.stickyShares.current.style.top = `${this.state.containerHeight - this.state.buttonsHeight}px`;
            this.stickyShares.current.style.left = 0;
        } else if (this.state.buttonsTop < wScroll + this.offsetTop) {
            this.stickyShares.current.style.position = "fixed";
            this.stickyShares.current.style.top = `${this.offsetTop}px`;
            this.stickyShares.current.style.left = `${this.state.containerLeft}px`;
        } else {
            this.stickyShares.current.style.position = "absolute";
            this.stickyShares.current.style.top = 0;
            this.stickyShares.current.style.left = 0;
        }
    }

    render() {
        return (
            <div ref={this.sharesContainer} className="section-row sticky-container" >
                <div className="main-post">
                    <ReactMarkdown components={this.components}>
                        {this.props.content}
                    </ReactMarkdown>
                </div>
                <StickyShares ref={this.stickyShares} />
            </div>
        )
    }
}

export default PostBody;