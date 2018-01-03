//component.js
//函数式定义组件
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

//自定义组件的渲染
const element = <Welcome name="Owen" />;
//React 会把JSX的属性作为单个对象传递给自定义组件，这个对象为"props"

ReactDOM.render(
    element,
    document.getElementById('root')
);

// 1.我们对<Welcome name="Sara" />元素调用了ReactDOM.render()方法。
// 2.React将{name: 'Sara'}作为props传入并调用Welcome组件。
// 3.Welcome组件将<h1>Hello, Sara</h1>元素作为结果返回。
// 4.React DOM将DOM更新为<h1>Hello, Sara</h1>。


//组合组件
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Mice" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//提取组件
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div classNam="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    }
}

//提取Avatar组件
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

//提取UserInfo组件
function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avatar user={props.author} />
        <div classNam="UserInfo-name">
            {props.user.name}
        </div>
    </div>
    );
}

/*
// 提取组件一开始看起来像是一项单调乏味的工作，
// 但是在大型应用中，构建可复用的组件完全是值得的。
// 当你的UI中有一部分重复使用了好几次（比如，Button、Panel、Avatar），
// 或者其自身就足够复杂（比如，App、FeedStory、Comment），
// 类似这些都是抽象成一个可复用组件的绝佳选择，这也是一个比较好的做法。
*/

//最后 props是只读的