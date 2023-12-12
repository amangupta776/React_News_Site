const cardStyles = {
    width: "29%",
    margin: "10px",  
  };
const Card=(props)=>{
    return(
        <>
            <div className="card" style={cardStyles}>
  <img className="card-img-top" src={props.img}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5> 
<p className="card-text">{props.des}</p>
  </div>
</div>
        </>
    )
}
export default Card;