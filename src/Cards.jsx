


export default function Cards(props) {
  return (
    <article className="card">
      <section className="card-container-img">
        <span className="new">
          <img className="star" src={props.newCollection && props.stock > 45 && `img/${props.imgStar}`} alt="" />
          {props.newCollection && props.stock > 45 && "New"}
        </span>
        <img className="img-product" src={props.stock > 45 ? `img/${props.imgProduct}` : `img/${props.imgSoldOut}`} alt="" />
      </section>
      <section>
        <h2>{props.name}</h2>
        <h2>{props.price} {props.price < 200 && <span style={{color: "red"}}>30% off</span>}</h2>
        <h2>{props.description}</h2>
      </section>
    </article>
  );
}
