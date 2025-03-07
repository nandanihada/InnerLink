import React from 'react'
import '../styles/Error.css'
import { Link } from 'react-router-dom'
function Error(props) {
  return (
    <>
        <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div>
		<div class="four_zero_four_bg">
		
			<h1 class="text-center ">{props.errorCode}</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		{props.subheading}
		</h3>
		<Link to={props.gotoLink} class="link_404">{props.goto}</Link>
		{/* <p>{props.description}</p> */}
		
		
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    
    </>
  )
}

export default Error
