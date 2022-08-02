import React from 'react'

const styles = {
  card: {
    width: '18rem',

  },
  cardBody: {

    fontFamily : "Gamja Flower"
  }
}

function Card(props) {

  const title = props.title;
  const content = props.content;
  const img = props.img;

  return (
    <>
      <div className="card" style={styles.card}>
        <img src={`./imgs/${img}`} className="card-img-top" alt="..."/>
        <div className="card-body" style={styles.cardBody}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">Go Detail</a>
        </div>
      </div>
    </>
  )
}

export default Card