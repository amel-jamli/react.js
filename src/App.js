import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">React JS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
        </div>
      </div>
    </nav>
    
    
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img id="1" class="d-block w-100" src="https://miro.medium.com/max/680/1*C4yGTDSLSz86TCakrza2HQ.jpeg" alt="First slide" />
              </div>
            </div>
          </div>
          <form style={{ margin: 50 }}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Position</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Student</option>
                <option>Instructer</option>
                <option>Others</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-success">Submit</button>
          </form>
        </div>
      );
    }
    export default App ;
