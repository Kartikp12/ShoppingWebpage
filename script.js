function NavBar(){
    return(
    <nav>
        <div>
        <img src="./images.png" className="logo"/>
        </div>
        <ul className="nav-list">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Account</li>
        </ul>

    </nav>
    )
}

function MainSection(){
    return(
        <div>
            <img src="add.webp" className="page-img"/>

            <h1 className = "heading">Online Experiances </h1>
            <p className = "mypara">it is good product. we can say excellent product also <br/>
            pricing is also affortable and its was very good service <br/>
            my assignments was done in 2 days also and I submited on time <br/>
            </p>
        </div>
    )
}


function Cards(props){
    return(
        <div className = "cards">
            <div className = "card">
                <img  src= {props.img} className="card-img"/>
                <div className="card1-detail">
                <span> <img src="Untitled.png" className="star"></img></span>
                <span>5.0</span>
                <span>.</span>
                <span>USA</span>
                <p className="name">half slewes Tshirt of ronaldo</p>
                <p className="price">{props.price}</p>
                </div>
            </div>




        </div>
    )
}


function Footer(){
    return(
        <footer className="footer">
            <div className="contact">
                <h2>Contact</h2>
                <p> <span>E-mail: </span> kartikpatil1006@gmail.com</p>
                <p> <span>Phone:</span> 9370341268</p>
                <p> <span>Website </span> dptech.com </p>
            </div>

            <div className="adress">
                <h1>Adress</h1>
                <p>2nd floor We-Work pvt Ltd, <br/>
                    Elon IT park , Kharadi <br/>
                    pune 443101 maharashtra
                </p>
            </div>

        </footer>
    )
}



function App(){
    return(
        <div>
            <NavBar/>
            <MainSection/>
            <div className="all-cards">
            <Cards
            img = "2516.webp"
            price = "$200"
            />
            <Cards
            img = "img-2.jpg"
            price = "$199"
            />
            <Cards
            img = "img-3.jpg"
            price = "$329"
            />
            <Cards
            img = "img-4.jpg"
            price = "$149"
            />
            
            </div>
            <Footer/>
        </div>
    )
}



ReactDOM.render(<App/> , document.querySelector(".root"))