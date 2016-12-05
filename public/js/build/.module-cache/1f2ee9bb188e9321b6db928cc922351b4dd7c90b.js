var app = app || {};
(function(){
    app.SlognArea = React.createClass({displayName: "SlognArea",
        render:function(){
            return (React.createElement("div", {className: "slogn-area"}, 
                React.createElement("span", {className: "slogn"}, "DP What Need to DO")
            ))
        }
    });
    app.VerticalBtnArea = React.createClass({displayName: "VerticalBtnArea",
        render:function(){
            return (React.createElement("div", {className: "v-btn-area"}))
        }
    })
})();   