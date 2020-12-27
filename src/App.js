  import './App.css';
  import NavBar from './NavBar.js';
  import Intro from './Intro.js';
  import Project from './projects.js';
  import About from './About';

  import SudokuImg from './Images/SudokuSolver.JPG';
  import CalculatorImg from './Images/Calculator.JPG';
  import PortfolioSite from './Images/ThisSite.JPG';
  import Technologys from './technologies.js';

  

  

function App() {
  var descriptions = ['This project I made to solve the classic game of Sudoku! It uses a backtracking algorithm to move through the puzzle and find the correct solution.','This project was built while I was learning javascript as a phone calculator copy. I used JAVASCRIPT, HTML, and CSS.', 'This portoflio site is V2 of my first site, updated after learning REACT. You can still find the original on my github however.'];
  return (
    <div className="App">
      
      <div className='introPage' id='introPage'>
        <NavBar />
        <Intro />
      </div>

      <div className='projectsPage' id='projectsPage'>
        <h2 className='projectsHeader'>Projects</h2>
        <div className='projectsPageWrapper'>
          <Project title='Sudoku Solver' gitlink='https://github.com/nickknapton12/JavaScript-Sudoku-Solver' img={SudokuImg} description={descriptions[0]} />
          <Project title='Web Calculator' gitlink='https://github.com/nickknapton12/Javascript-Calculator' img={CalculatorImg} description={descriptions[1]} />
          <Project title='This Portfolio Site' gitlink='https://github.com/nickknapton12/Portfolio-Site-V2' img={PortfolioSite} description={descriptions[2]} />
        </div>
      </div>

      
      <Technologys />

      <About />

      
    </div>
  );
}

export default App;
