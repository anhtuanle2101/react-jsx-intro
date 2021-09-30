const App = ()=>{
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Tuan Anh Le"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));