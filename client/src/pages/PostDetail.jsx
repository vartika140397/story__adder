import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'

const PostDetail = () => {
  return (
    <section className="post_detail">
        <div className="container post_detail__container">
            <div className="post-detail__header">
                <PostAuthor/>
                <div className="post-detail__buttons">
                    <Link to={`/posts/werwer/edit`} className='btn-sm primary'></Link>
                    <Link to={`/posts/werwer/delete`} className='btn-sm danger'></Link>
                </div>
            </div>
            <h1>This is the post title!</h1>
            <div className="post-detail__thumbnail">
                <img src={Thumbnail} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor quo explicabo, ex, provident molestias repellat hic 
                cumque quas laudantium itaque laborum facilis porro exercitationem magni,
                nobis velit beatae enim dolore officia veniam facere dolorum sapiente. 
                Magnam quaerat blanditiis distinctio eos!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi deserunt 
                voluptatum, exercitationem provident praesentium temporibus aliquam maiores 
                laborum sit ipsum enim accusamus minima nihil quis ducimus, recusandae consectetur.
                Nam temporibus minus voluptas explicabo rerum iste dolorum, impedit dignissimos
                iure aperiam, provident aut? Optio numquam minima vel voluptatibus quos
                deleniti dicta, quo, voluptatum saepe possimus harum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum tenetur commodi
                adipisci, sit repudiandae et dolores delectus iste alias ut veniam laborum modi neque 
                iusto nesciunt esse porro quisquam accusantium numquam debitis, tempore quaerat nobis
                 reiciendis! Sint, nam possimus reiciendis fuga tempore harum, voluptatibus facilis, 
                 illum rem nostrum accusamus accusantium labore deleniti? Corrupti in pariatur, placeat
                rerum delectus mollitia. Porro, dolor error nisi incidunt laboriosam vel? Saepe illum
                placeat eum obcaecati quasi vel molestias maxime unde ullam. Facilis doloribus
                voluptatum molestiae minus harum autem quidem pariatur provident nostrum ab dolores
                deserunt, sunt, sint quaerat debitis asperiores ipsam voluptas temporibus aliquam 
                sed maiores nam alias voluptatem. Impedit illum ipsa rem neque.</p>
        </div>
    </section>
  )
}

export default PostDetail