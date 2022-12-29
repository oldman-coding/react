const h1 = document.createElement('h1');
h1.textContent = "This is vanilla js" ; 
h1.className = "header";
console.log(h1);

// const element = (
//     <div>
//         <h1 className='header'>Hello this is vanilla js</h1>
//         <p>This is paragraph</p>
//     </div>
    
// )

const element = (
    <nav>
        <h1>React training</h1>
        <ul>
            <li>Pricing</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </nav>
)
    
ReactDOM.render(element, document.getElementById("root")) 