var app = app || {};
(function(){
    var SlognArea = app.SlognArea;
    var AccountPanel = React.createClass({displayName: "AccountPanel",
        render:function(){
            return (React.createElement("div", {className: "account-main"}
                
            ))
        }
    });
    function render() {
        ReactDOM.render( 
            React.createElement(AccountPanel, null),
            document.getElementById('main')
        );
    }
    render();
})();