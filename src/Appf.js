



function App() {

    function handNAmeChange(){
        const names =["sandy","musraf","sam"];
        const ran =Math.floor(Math.random()*3);
        return names[ran]
    }

return(
    
    <div>subscribe
        <p>{handNAmeChange()}</p>
    </div>
    
);  

}

export default App;
