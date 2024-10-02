import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
//import Header from '../components/Header'
const CreatePost = ({closeModal}) => {
    
    const[title, setTitle] =useState('')
    const[category,setCategory] = useState('')
    const[description, setDescription] =useState('')
    const[thumbnail, setThumbnail] =useState('')
    
    const modules = {
        toolbar: [
            [{'header':[1,2,3,4,5,6,false]}],
            ['bold','italic','underline','strike','blackquote'],
            [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
            ['link','image'],
            ['clean']
        ],
    }

    const formats =[
        'header',
        'bold','italic','underline','strike','blackquote',
        'list','bullet','indent',
        'link','image'
    ]
    const POST_CATEGORIES = ["News","Medical","Fruits","World","India"]

  return (
    
        
    <section className="create-post">
    
        <div className="container">
            
        <div className="modalBackground"></div>
                <div className="modalContainers">
            
            <div className="bodys">
            <div className="footer">
                        <button onClick={()=>closeModal(false)} className='close-modal'>Close</button>
                    </div>
            <h2>Create Posts</h2>
            <p className="form__error-message">
                This is an error message
            </p>
            <div className="form create-post__form">
            <span htmlFor="heading">Heading:<input type="text" placeholder='Your Heading' value={title} onChange={e=>setTitle(e.target.value)} autoFocus /></span></div>            
           
                <br></br>
                <span htmlFor="description">Description<ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
                    </span>
                    <br></br><br></br>
                   <span htmlFor="image">Image: <input type="file" placeholder="Add Image url" value={thumbnail} onChange={e=>setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/></span>
                    <br></br>
                    <span htmlFor="category">Category:<select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    {
                          POST_CATEGORIES.map(cat=> <option key={cat}>{cat}</option>)                
                    }
                </select></span>
                <br></br>
                    <button type="submit" className='btn-primary'>Create</button>
                    <button type="previous" className='btn-previous'>Previous</button>
                    <button type="next" className='btn-next'>Next</button>
                    <button type="post" className='btn-post'>Post</button>


                    
            </div>
               
        
                
                </div>
                </div>
    
                
            </section>
        
    
    )
}
    
            
        
            
                    
                    

export default CreatePost