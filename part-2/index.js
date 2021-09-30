const App = ()=>{
    return (
        <div>
            <Tweet username="anhtuanle2101" name="Tuan Le" date={(new Date()).toString()} message="This is a message" />
            <Tweet username="johndoe123" name="John Doe" date={(new Date()).toString()} message="Hello world" />
            <Tweet username="chickenstyle432" name="Sylvie" date={(new Date()).toString()} message="Bock Bock" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));