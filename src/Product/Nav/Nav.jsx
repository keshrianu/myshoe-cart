import { Link } from "react-router-dom";
import style from "./nav.module.css";
const Nav = ({ searchItem, setSearchItem, items }) => {
  function handleChange(event) {
    setSearchItem(event.target.value);
  }

  return (
    <>
      <nav className={style.nav}>
        <h1 className={style.shoe} >
          <Link to="/product" style={{ color: 'white' }}>ShoeCart</Link>
        </h1>
        <input
          type="search" 
          placeholder="Search For Products"
          value={searchItem}
          onChange={(e) => handleChange(e)}
        />
        <p className={style.search}>🔍</p>
        <h4 className={style.cart}>
          <Link to="/cart" style={{ color: 'white' }}>Cart {items}</Link>
        </h4>
        <h4 className={style.wish}>
          <Link to="/wish"style={{ color: 'white' }}>About</Link>
        </h4>
        <h4 className={style.help}>
          <Link to="/help" style={{ color: 'white' }}>HelpCenter</Link>
        </h4>
        <h4 className={style.profile}>
          <Link to="/profile" style={{ color: 'white' }}>🙎‍♂️ Anurag Keshri</Link>
        </h4>
      </nav>
    </>
  );
};

export default Nav;
