var app = app || {};
(function(){
    app.SlognArea = React.createClass({
        render:function(){
            return (<div className={"slogn-area "+this.props.spec_class}>
                <span className="slogn">{this.props.slogn_text}</span>
            </div>)
        }
    });
    app.VerticalBtnArea = React.createClass({
        render:function(){
            return (<div className={"v-btn-area "+this.props.spec_class}>
            
            </div>)
        }
    })
})();   