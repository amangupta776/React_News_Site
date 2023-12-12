import { Link } from "react-router-dom";

const NavBar=(props)=>{
    return(
        <>
<nav className="navbar navbar-light bg-light" style={{display:"flex",justifyContent:"center"}}>
  <h2 >Aman Presents : {props.sub} Latest News</h2>
</nav>
<div className="btn-group" role="group" aria-label="Basic example" style={{display:"flex",justifyContent:"center"}}>
  <Link to={"/news2"}type="button" className="btn btn-secondary"style={{marginLeft:"28%"}}>International News</Link>
  <Link to={"/"} type="button" className="btn btn-secondary" >Indian News</Link>
  <Link to={"/news4"} type="button" className="btn btn-secondary">Top business headlines in the US right now</Link>
  <Link to={"/news3"} type="button" className="btn btn-secondary" >Sports News</Link>
  <a href="https://www.linkedin.com/in/amanguptaa7/" type="button" className="btn btn-secondary" target="_blank" rel="noreferrer" style={{marginLeft:"20%"}}>Visit My Profile</a>
</div>
      </>
    )
}
export default NavBar;