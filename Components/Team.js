import React, { Component } from 'react'

export default class Team extends Component {
  render() {
    return (
      <div>
        <div  className="container"style={{padding:"2rem"}}>
            <h1 style={{color:"#6c5ce7",fontWeight:"bold"}}>OUR TEAM</h1>
            <h5 style={{display:"inline-block",borderBottom:"2px solid grey"}}>Great Team With Innovative Ideas</h5>
        </div>
        <div className='container team-grid' >
            <div className="member">
                <div className='member-pic'>
                    <img src="https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt-cross-arms-chest-smiling-pleased_176420-21607.jpg?w=1060&t=st=1675166203~exp=1675166803~hmac=1255a6c30fb62f69bfe620468c174efb87100b9d1521bf3e2cc69d7c8f8400ba" alt="" />
                </div>
                <div className="member-details">
                    <h4>Evin Lewis</h4>
                    <h6>Developer</h6>
                    <div className="member-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>

            <div className="member">
                <div className='member-pic'>
                    <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=1060&t=st=1675166807~exp=1675167407~hmac=d522086638adcd7ff72d6f98d4d4553c39bf909612c2fabf909beca501854135" alt="" />
                </div>
                <div className="member-details">
                    <h4>Lendal Simons</h4>
                    <h6>Developer</h6>
                    <div className="member-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>

            <div className="member">
                <div className='member-pic'>
                    <img src="https://img.freepik.com/free-photo/satisfied-bearded-male-youngster-listens-merry-song-headphones-moves-pink-background-boosts-mood-with-cool-music-feels-upbeat-wears-red-hat-black-t-shirt_273609-34632.jpg?w=1060&t=st=1675166855~exp=1675167455~hmac=1eccbd0507604354960fadb69914a051a474f79381d3653d0909b6f975b5380a" alt="" />
                </div>
                <div className="member-details">
                    <h4>Don Bosco</h4>
                    <h6>Developer</h6>
                    <div className="member-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}
