import { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import CreatePost from '../pages/CreatePost'
//import {toast} from "react-toastify"


const Header = () => {
  const [data, setData] = useState({
      
      username: "",
      password: "",
    
  })
  const [errors, setErrors] = useState({
      username: "",
      password: "",

  })
  const handleInput = (e) => {
    const{name,value}=e.target;
      setData((prev)=>{
        return{...prev,[name]:value};
      })
  }
  const handleSubmit = (e) => {
    console.log(data);
      e.preventDefault()
      let errors = {}
      
      if (!data.username || data.username.trim() === "") {
          errors.username = "Please Enter valid username"
      }
      if (!data.password || data.password.trim() === "") {
          errors.password = "Please Enter valid Password"
      }
     
     
      setErrors(errors)
      if (Object.keys(errors).length > 0) return
      else {
          alert("Form submitted successfully")
          localStorage.setItem("userData", JSON.stringify(data))
          setData({
              
              username: "",
              password: "",
            
          })
          

      }
  }
  

  const[openModal,setOpenModal]=useState(false);
  const[modal,setModal] = useState(false);
  const[modals,setModals]=useState(false);
  //const[mode,setMode]=useState(false);


  const toggleModal=()=>{
    setModal(!modal)
  }
  const toggleModals=()=>{
    setModals(!modals)
  }

  if(modal){
    document.body.classList.add('active-modal')
  }
  else{
    document.body.classList.remove('active-modal')
  }
  if(modal){
    document.body.classList.add('active-modal')
  }
  else{
    document.body.classList.add('active-modal')
  }

  const[isNavShowing, setIsNavShowing]=useState(window.innerWidth > 800 ? true: false) 
  
  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }
  return (
    <nav>
        <div className='container nav__container'>
           
            {isNavShowing && <ul className="nav__menu">
                <li><Link className='link' to="/profile/sdfsdf" onClick={closeNavHandler}>Ernest Achiever</Link></li>
                <li className='openModalBtn' onClick={()=>{
                  setOpenModal(true);
                  
                }} >Add Story</li>
                {openModal && <CreatePost closeModal={setOpenModal}/>}
                <li><Link className='link' to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                <li onClick={toggleModal} className='btn-modal'>Login</li>

                {modal && (
                  <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <form  onSubmit={handleSubmit} className="modal-content">
                    <h2>Login</h2>
                    <label htmlFor="email">Username:<input type="text" name="name" value={data.username} onChange={handleInput}  placeholder='name'/></label><br></br>
                    <span style={{ color: "red" }}>{errors.username}</span>
                    <label htmlFor="password">Password:<input type="text" name="password" value={data.password} onChange={handleInput} placeholder='Password'/></label>
                    <span style={{ color: "red" }}>{errors.password}</span>
                      
                    <button type="submit" style={{height:"40px"}} className="login">Login</button>
                    <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                  </form>
                </div>
                )}
                <li onClick={toggleModals} className='btn-modal'>Register</li>
                {modals && (
                  <div className="modal">
                  <div onClick={toggleModals} className="overlay"></div>
                  <div className="modal-content">
                    <h2>Register</h2>
                    <label htmlFor="email">Email:<input type="text" name="name" placeholder='name'/></label><br></br>
                    <label htmlFor="password">Password:<input type="text" name="password" placeholder='Password'/></label>
                    <button style={{height:"40px"}} className="login">Register</button>
                    <button className="close-modal" onClick={toggleModals}>CLOSE</button>
                  </div>

                </div>
                )}
                <li><Link className='link' to="/logout" onClick={closeNavHandler}>Logout</Link></li>


            </ul>}
            <button className='nav__toggle-btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <AiOutlineClose/> :<FaBars/>}
            </button>
        </div>


    </nav>
  )
}

export default Header