import React, { Component } from 'react'

export default class Highlights extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Our Latest Projects</h1>
        <h5>We serve the best to our customers</h5>
        <div className="pro-grid" style={{padding:"2rem"}}>
            <div className="item item1">
                <div className="details" style={{color:"black",lineHeight:"26px",letterSpacing:"2px"}}>
                    <h3>
                      Heading
                    </h3>
                    <p style={{color:"#8395a7"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis enim? Aliquid ducimus saepe labore dolorum magni ipsa voluptas exercitationem commodi perspiciatis dolorem repellendus adipisci, harum nulla, earum molestiae hic?</p>
                    <button className='btn btn-outline-dark'>
                      <span>Visit</span>
                      <i className=' mx-2 fa-solid fa-angle-right'></i>
                    </button>
                </div>
                <img src="https://img.freepik.com/free-vector/memphis-geometric-background-with-abstract-shapes_23-2148934083.jpg?w=1060&t=st=1674925751~exp=1674926351~hmac=e4e2dff1b8a22bfe79bee7e08903afb6a1b7d0b06dd2e036b528febe655aced9" alt="" />
            </div>
            <div className="item item2">
                <img src="https://img.freepik.com/free-vector/web-template-business-landing-page_52683-27842.jpg?w=1060&t=st=1674840734~exp=1674841334~hmac=9bf08f18674b01f1e54c8a89c9894f9fcd5a685543bba2de73e065fdf6e7e90e" alt="" />
            </div>
            <div className="item item3">
                <img src="https://img.freepik.com/free-vector/gradient-case-study-landing-page_23-2149087528.jpg?w=1060&t=st=1674840766~exp=1674841366~hmac=a603cfd1e8f9c4a1a8daec1b3a5a5461b40d0db40dcf2b93c5807368964af912" alt="" />
            </div>
            <div className="item item4">
                <img src="https://img.freepik.com/free-vector/flat-design-cms-landing-page-template_23-2148807200.jpg?w=1060&t=st=1674840781~exp=1674841381~hmac=a3207ed24a6c63ac680f7e447971d813f9d6a7bcb9fd27adb93ca308f3fdbc31" alt="" />
            </div>
            <div className="item item5">
                <img src="https://img.freepik.com/free-vector/general-business-landing-page_23-2148713199.jpg?w=1060&t=st=1674840808~exp=1674841408~hmac=af04ff2b259ee30045fafa8e49cab7446962bf3f8f3b85e4ef7527cbd8659f73" alt="" />
            </div>
        </div>
      </div>
    )
  }
}
