
//for a better performance we could memoize this component if rendring it is expensive 

const PixabayItem = ({ pixabay }) => {

  const { pageURL, largeImageURL, tages, type, likes } = pixabay || {};

  return <div className="four wide column" >
    <a href={pageURL}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={largeImageURL} alt={tages} />
          </div>
          <div className="content">
            <div className="header">{type}</div>
            <div className="meta price"> {likes}  <img src={"../../like.png"} width={30} hight={30} alt={tages} /></div>
            <div className="meta">{tages}</div>
          </div>
        </div>
      </div>
    </a>
  </div>

}

export default PixabayItem;