import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
import insta from '../asset/insta.png';
import git from '../asset/git.png';
import Gmail from '../asset/Gmail.png';
import yt from '../asset/yt.png'
class Contact extends Component{
    render(){
        
        return(
            
            <div  className="sm:flex sm:flex-col sm:justify-center my-20 sm:my-0 sm:h-screen  text-center">
                <Fade bottom>
            <div className="sm:align-center m-4  sm:text-center">
            <h1 className="sm:text-4xl font-bold   "> Wanna Talk ?</h1>
            <p  >I'm not so Good at talking but I'm Always Opened</p>
             </div>
             </Fade>
             <Fade bottom>
             <div className="flex flex-wrap justify-center mt-10 sm:flex-wrap  sm:flex-wrap-reverse sm:mt-20 sm:mx-60 " >
                 <div className="rounded-full h-24 w-24 mx-8 my-4 p-6 flex items-center    sm:p-4 bg-white shadow-xl  hover:scale-110"><a href="https://www.instagram.com/h2htech/?hl=en"><img src={insta} classname="object-contain"alt="" /></a></div>
                 <div className="rounded-full h-24 w-24 mx-8 my-4 p-4 flex items-center   sm:p-4 bg-white shadow-xl hover:bg-grey-200"><a href="https://github.com/harishh2h"><img   src={git} alt="" /> </a> </div>
                 <div className="rounded-full h-24 w-24 mx-8 my-4 p-4 flex items-center   sm:p-4  bg-white shadow-xl hover:bg-grey-200"><a href=""><img src={Gmail} alt="" /></a> </div>
                 <div className="rounded-full h-24 w-24 mx-8 my-4 p-4 flex items-center   sm:p-4  bg-white shadow-xl hover:bg-grey-200"><a href="https://www.youtube.com/c/h2htech"><img src={yt} alt="" />   </a> </div>
             </div>
             </Fade> 
             
             

             </div>
        );
    }
}

export default Contact 