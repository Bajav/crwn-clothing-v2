const App = () => {
  const categories = [
    { 
      id: 1,
      title: "hats",
    },
    { 
      id: 2,
      title: "jackets",
    },
    { 
      id: 3,
      title: "sweaters",
    },
    { 
      id: 4,
      title: "mens",
    },
    { 
      id: 5,
      title: "womens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" key={category.id}>
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
