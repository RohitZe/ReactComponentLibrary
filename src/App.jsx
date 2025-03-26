import { useEffect, useState } from 'react';
import './App.css';



const PAGESIZE=18;


export const ProductCard = ({ title, imgUrl }) => {
  return (
    <div id='card-component'>
      
      <img className='img-component'
       src={imgUrl} alt="img" />
       <span>{title}</span>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage,setCurrentPage]=useState(0);

  const fetchProducts = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=100');
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products.length);
  const noOfPages=Math.ceil(products.length/PAGESIZE);
  const start=currentPage*PAGESIZE;
  const end=start+PAGESIZE;


  const handlePageChange=(n)=>{
    setCurrentPage(n);
  }

  const handleBackward=()=>{
    setCurrentPage((prev)=>prev-1)
  }

  const handleForward=()=>{
    setCurrentPage((prev)=>prev+1)
  }

  return (
    <>
     <h1>Pagination</h1>
     <div className='page-number-container'>
      <span id='arrow'
      onClick={()=>{handleBackward()}}
      >◀️</span>
     {[...Array(noOfPages).keys()].map((n) => (
  <span  className={`page-number ${currentPage === n ? 'active' : ''}`}
  
  key={n} onClick={()=>handlePageChange(n)}>{n}</span>
    ))}
      <span id='arrow'
      onClick={()=>{handleForward()}}
      >▶️</span>
     </div>
     <div className='products-container'>
      {products.slice(start,end).map((p) => (
        <ProductCard key={p.id} title={p.title} imgUrl={p.thumbnail} />
      ))}
      </div>
    </>
  );
}

export default App;