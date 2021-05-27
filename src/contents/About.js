import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
class About extends Component{
    render(){
        return(
            
            <div >
                <div className="mt-60 sm:mt-0 sm:flex sm:flex-col sm:justify-center sm:h-screen  ">
                <Fade top>
                <div className="text-center sm:mt-8 sm:mb-8 ">
                    <h1 className="font-bold text-xl sm:text-2xl"> Vanakkam ! I'm Harish  </h1>
                </div>
                </Fade>
                <Fade bottom>
                <div className="m-12 mt-4 p-8 shadow-lg  overflow-hidden   bg-white  sm:mx-44  sm:mt-8 sm:p-4 ">
                <p className="text-center text-justify  italic" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta saepe sit, hic beatae quae, fugiat iure tempore, nostrum recusandae laboriosam itaque deleniti numquam ab inventore aperiam omnis! Nesciunt, quos ipsum!
                Perferendis ex sint recusandae autem? Vel excepturi, quo ullam delectus nostrum molestias ratione quisquam perferendis nemo? Culpa omnis et ex maxime, architecto atque, dicta porro perspiciatis est facilis natus rem?
                Laudantium vitae eiusum, accusantium rerum temporibus, facilis, repudiandae nostrum asperiores placeat tenetur mollitia atque minus perspiciatis fuga. Hic vero beatae voluptates atque recusandae? Ad, culpa fugit.</p>
                
                </div>
                </Fade>
                </div>
            </div>
        );
    }
}

export default About 