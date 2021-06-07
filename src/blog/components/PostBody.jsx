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

        //bind functions
        this.setStickyValues = this.setStickyValues.bind(this)
        this.setBehavior = this.setBehavior.bind(this)

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
        this.sharesHeight = this.stickyShares.current.clientHeight
        this.offsetTop = 80;
        this.setStickyValues()

        window.addEventListener('scroll', (e) => {
            this.setBehavior(e.target.scrollingElement.scrollTop)
        })

        window.addEventListener('resize', (e) => {
            this.setStickyValues()
            this.setBehavior(e.target.scrollingElement.scrollTop)
        })
    }

    setStickyValues() {
        this.stickySharesTop = this.stickyShares.current.offsetTop
        this.sharesContainerTop = this.sharesContainer.current.offsetTop
        this.sharesContainerLeft = this.sharesContainer.current.offsetLeft
        this.sharesContainerHeight = this.sharesContainer.current.clientHeight
        this.sharesContainerBottom = this.sharesContainerHeight + this.sharesContainerTop
    }

    setBehavior(wScroll) {
        if (this.sharesContainerBottom - this.sharesHeight - this.offsetTop < wScroll) {
            this.stickyShares.current.style.position = "absolute"
            this.stickyShares.current.style.top = this.sharesContainerHeight - this.sharesHeight
            this.stickyShares.current.style.left = 0
        } else if (this.stickySharesTop < wScroll + this.offsetTop) {
            this.stickyShares.current.style.position = "fixed"
            this.stickyShares.current.style.top = this.offsetTop
            this.stickyShares.current.style.left = this.sharesContainerLeft
        } else {
            this.stickyShares.current.style.position = "absolute"
            this.stickyShares.current.style.top = 0
            this.stickyShares.current.style.left = 0
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