import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log("LOGGING ERROR:", error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>There is technical issue. Please try again</h1>
                </div>
            )
        }
        return this.props.children


    }
}

export default ErrorBoundary
