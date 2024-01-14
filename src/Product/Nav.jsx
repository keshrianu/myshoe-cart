import { Link } from "react-router-dom";

const Nav = ({ searchItem, setSearchItem, items }) => {
  function handleChange(event) {
    setSearchItem(event.target.value);
  }

  return (
    <>
      <nav className="nav">
        <h1 className="shoe" >
          <Link to="/product" style={{ color: 'white' }}>ShoeCart</Link>
        </h1>
        <input
          type="search" 
          placeholder="Search For Products"
          value={searchItem}
          onChange={(e) => handleChange(e)}
        />
        <p className="search">🔍</p>
        <h4 className="cart">
          <Link to="/cart" style={{ color: 'white' }}>Cart {items}</Link>
        </h4>
        <h4 className="wish">
          <Link to="/wish"style={{ color: 'white' }}>About</Link>
        </h4>
        <h4 className="help">
          <Link to="/help" style={{ color: 'white' }}>HelpCenter</Link>
        </h4>
        <h4 className="profile">
          <Link to="/profile" style={{ color: 'white' }}>🙎‍♂️ Anurag Keshri</Link>
        </h4>
      </nav>
    </>
  );
};

export default Nav;
