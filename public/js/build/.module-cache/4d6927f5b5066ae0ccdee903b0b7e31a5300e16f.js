var app = app || {};
(function(){
    var AccountPanel = React.createClass({displayName: "AccountPanel",
        render:function(){
            return (React.createElement("div", {className: "account-main"}, 
            "helloworld"
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