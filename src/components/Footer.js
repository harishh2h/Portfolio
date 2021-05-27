import React , {Component} from 'react';
import Fade from 'react-reveal/Fade';
import r from '../asset/r.png';
class Footer extends Component{
    render(){
        return(
            <div>
                <Fade bottom>
                <div className="flex flex-wrap justify-center m-8 sm:mb-32 sm:flex-nowrap">
                    <div className="m-4   sm:w-2/4  sm:h-auto rounded-3xl shadow-lg object-cover"><img className="rounded-3xl " src={r} alt="" /></div>
                    <div className="mt-6 sm:mt-0 sm:ml-14 text-center sm:flex sm:flex-col sm:justify-center" > <h1 className="text-xl font-semibold sm:text-2xl " > May be I'm a Web Dev !</h1>
                    <p>Me AFter Building this site </p></div>

                </div>
                </Fade>
            </div>
        );
    }
}

export default Footer