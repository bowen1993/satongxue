var app = app || {};
(function(){
    var SlognArea = app.SlognArea;
    var VerticalBtnArea = app.VerticalBtnArea;
    var AccountPanel = React.createClass({
        render:function(){
            return (<div className="account-main">
                <SlognArea slogn_text="DO What Need to be Done" spec_class=".slogn-area-account"/>
                <VerticalBtnArea spec_class=".v-btn-area-account"/>
            </div>)
        }
    });
    function render() {
        ReactDOM.render( 
            <AccountPanel />,
            document.getElementById('main')
        );
    }
    render();
})();