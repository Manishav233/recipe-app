//import logo from './logo.svg';
import './App.css';

function App() {
  const recipes=[
    {
    picture:"https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-1024x1024.jpg",
    name:"Biryani"
    },
    {
    picture:"https://img-global.cpcdn.com/recipes/e406fc2174c09341/1502x1064cq70/chicken-kabab-recipe-main-photo.jpg",
    name:"Chicken Kabab"
    },
    {
    picture:"https://www.munatycooking.com/wp-content/uploads/2014/06/chapati-6.jpg",
    name:"Roti"
    },
    {
    picture:"https://2.bp.blogspot.com/-wMGE_duKFTY/UC4UYi-vDFI/AAAAAAAADUA/WM6tMEHyWa8/s1600/poori+choe1.JPG",
    name:"Poori Chole"
    },
    {
    picture:"https://www.palatesdesire.com/wp-content/uploads/2019/09/Mysore_Masala_Dosa@Palates_Desire-1024x738.jpg",
    name:"Masala Dosa"
    } 
    ];
  return (
    <div className="App">
    <div className="recipe-list-container">
    {recipes.map((recipe,index)=>(
    <div key={index} className="recipe-container">
    <img className="recipe-picture" src={recipe.picture} alt="recipe names"/>
    <p className="recipe-name">{recipe.name}</p>
    </div>))
}
</div>
    </div>
  );
}

export default App;
