import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
class Home extends Component{
    render(){
        return(<div>
            <div className=" flex flex-col  justify-center my-32 sm:mb-0 sm:h-screen sm:my-0">
            <div className="  text-center ">
               <Fade bottom>
                <h1 className="text-4xl font-bold  p-4 text-center  ">I'm Harish </h1>
                <p>Under Construction ! </p>
                
                <p>Both this site and Me </p>

                <button className="m-4 bg-blue-500 shadow-lg text-white font-bold py-2 px-4 rounded-full hover:bg-black ">Learn More</button>
                </Fade>
            </div>
            </div>



            <div className=" sm:h-screen grid  place-content-center mb-60 sm:mb-8">
               <div> <h1 className="text-center font-bold text-2xl sm:text-4xl mb-20    ">My Skills</h1>
               </div>
           <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm: sm:m-6 ">
               <Fade bottom>
               <div className="ring-4 ring-indigo-300  py-2 px-2  text-center  font-semibold  hover:bg-black hover:text-white hover:shadow-lg rounded-2xl  text-base text-blue-500 shadow-lg ">Designing</div>
               <div className="ring-4 ring-indigo-300  py-2 px-2  text-center  font-semibold  hover:bg-black hover:text-white hover:shadow-lg rounded-2xl  text-base text-blue-500 shadow-lg ">Editing</div>
               <div className="ring-4 ring-indigo-300  py-2 px-2  text-center  font-semibold  hover:bg-black hover:text-white hover:shadow-lg rounded-2xl  text-base text-blue-500 shadow-lg ">Web Developement :p</div>
               <div className="ring-4 ring-indigo-300  py-2 px-2  text-center  font-semibold  hover:bg-black hover:text-white hover:shadow-lg rounded-2xl  text-base text-blue-500 shadow-lg ">Photography</div>
               </Fade>
            </div>
            </div>
        </div>
            );
    }
}

export default Home 