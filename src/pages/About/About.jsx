import React from 'react'
import './About.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className='container'>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex praesentium nostrum aspernatur! Culpa consequuntur dolor amet consequatur sit esse itaque, impedit ea odio doloremque non! Sed nihil provident, amet optio, necessitatibus tempore in quod est quis et rerum culpa pariatur consequuntur unde qui quisquam commodi veritatis ratione obcaecati ad deleniti facilis ab, porro a. Nobis eos sit natus numquam libero, voluptates repellendus porro ab magnam placeat architecto ipsam culpa necessitatibus enim tempore rem aspernatur minima quis alias eum omnis blanditiis nostrum? Deleniti placeat ratione fugiat nostrum facilis impedit ullam odit, maiores quibusdam ea magnam eum, eveniet suscipit voluptates totam animi repellendus mollitia provident minus dicta dolorum quos numquam? Ad vitae quod iure dolorum laborum sint debitis alias sapiente maiores placeat dolor blanditiis quibusdam aliquid repellendus iste fugiat ex modi, soluta labore! Pariatur odit veritatis assumenda, odio laudantium unde eligendi ab nihil. Vero, nam? Perspiciatis neque inventore aliquam adipisci cupiditate.</p>
      <FontAwesomeIcon size='lg' icon={faGithub} />
    </div>
  )
}

export default About