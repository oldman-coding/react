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

// const element = (
//     <nav>
//         <h1>React training</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About us</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

const element = (
    <div>
        <h1>My react website </h1>
        <h2>Reason i love react</h2>
        <ol>
            <li>Reuseable</li>
            <li>Fast</li>
            <li>Composable</li>
        </ol>
    </div>
)

const page = (
    <div>
        <img src ="./logo-react.png" width = "40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was firt original in 2013</li>
            <li>Has 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
) 

function temproraryPage() {
    return (
        <div>
        <img src ="./logo-react.png" width = "40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was firt original in 2013</li>
            <li>Has 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

// document.getElementById("root").append(JSON.stringify(element))

ReactDOM.render(temproraryPage(), document.getElementById("root")) 