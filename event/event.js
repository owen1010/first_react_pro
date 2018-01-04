//event.js
//React事件处理：
//1.React事件绑定属性的命名采用驼峰式写法
//2.采用JSX语法你需要传入一个函数作为事件处理函数，而不是一个字符串（DOM元素的写法
/*
 * <button onClick={activateLasers}
 *  Activate Lasers
 * </button>
*/
 //React中也不能使用返回false的方式阻止默认行为，必须明确使用preventDefault
//  function ActionLink() {
//      function handleClick(e) {
//          e.preventDefault();
//          console.log('The link was clicked.');
//      }

//      return (
//          <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//      );
//  }
 
//使用React不需要使用addEventLisnter为一个已创建的DOM元素添加监听器，仅需要在这个元素初始
//渲染的时候提供一个监听器
//**** 注意绑定this ****

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);