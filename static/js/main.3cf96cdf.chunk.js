(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),s=(n(22),n(10)),l=n(11),i=n(16),u=n(15),h=(n(23),n(6),function(e){}),m=(n(24),n(7)),d=function(e){return console.log(e),o.a.createElement(m.a,{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))},f=(n(25),n(26),n(27),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=n(12),g=n(13),v=n(14),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value},e.printState)},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement(p.a,{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),o.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleChange}),o.a.createElement(g.a,null,o.a.createElement(v.a,{lg:16},o.a.createElement(d,{monsters:a}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.3cf96cdf.chunk.js.map