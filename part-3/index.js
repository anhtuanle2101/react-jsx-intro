const App= ()=>{
    return(
        <div>
            <Person name="JohnDoeAhihi" age={18} hobbies={["Drinking","Video games","Sports"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));  