import React,{Component} from 'react';

class ErrorBoundary extends Component{
    
    constructor(props){
        super(props);
        this.state = {ErrorVal:false}
    }

    componentDidCatch(_error,_info){
        this.setState({ErrorVal:true});
    }

    render(){
        if(this.state.ErrorVal){
            return(<h1>Errorrrrrrrrrrr</h1>);
        }else{
            return this.props.children;
        }
        
    }




}

export default ErrorBoundary;