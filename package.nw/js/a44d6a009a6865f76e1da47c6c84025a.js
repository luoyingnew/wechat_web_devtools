'use strict';!function(require,directRequire){const a=require('react'),b=require('./aa9fff323e28f4dcd42f368a90ea14e6.js'),c=require('./fc137838572a83604db39acff8e909e0.js'),d=require('./eadce02c750c875a10680bcfedadec88.js'),e=require('./517889c8ddae18a0ae06706220180536.js'),{connect:f}=require('react-redux'),g=require('./common/locales/index.js');class h extends a.Component{constructor(a){super(a),this.state={showTs:0}}componentDidMount(){this._cancalLocaleListener=g.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}onShowClick(){this.setState({showTs:Date.now()})}render(){return a.createElement(b,{show:this.props.show,currentWording:g.config.PAGE_INFORMATION,onShowClick:this.onShowClick.bind(this),dropdown:e,dropdownType:'pageinfo',showTs:this.state.showTs,context:this.props.context||this.context})}}module.exports=f((a)=>({show:a.toolbar.clickKey==d.INFO,width:120,left:109,top:27}),(a)=>({onShowClick:()=>a(c.toggleClickKey(d.INFO))}))(h)}(require('lazyload'),require);