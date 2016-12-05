var app = app || {};
(function(){
    app.SlognArea = React.createClass({displayName: "SlognArea",
        render:function(){
            return (React.createElement("div", {className: "slogn-area {this.props.spec_class}"}, 
                React.createElement("span", {className: "slogn"}, this.props.slogn_text)
            ))
        }
    });
    app.VerticalBtnArea = React.createClass({displayName: "VerticalBtnArea",
        render:function(){
            return (React.createElement("div", {className: "v-btn-area"}))
        }
    })
})();   