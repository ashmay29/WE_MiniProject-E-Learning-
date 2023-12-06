import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/courses' component={CourseHome} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/journal' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
