import {React,useEffect,useState} from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import { AiFillEye} from 'react-icons/ai';



function Proyectos() {

    const [repos,setRepos] = useState([]);

    const transformDate = (date) => {
      let first =   new Date(date).toISOString().replace('T', ' ').replace('Z', '')
      first = first.slice(0, -7); 

      return first;
    }

    

    useEffect(() => {
        fetch('https://api.github.com/search/repositories?q=user:carlosgiil97&sort=updated&order=desc')
        // Exito
        .then(response => response.json())  // convertir a json
        .then(json => setRepos(json.items))    //imprimir los datos en la consola
        .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
      },[]);

  return (
    <>
    <div id="proyectos">

    
        <h1 className="text-color-third-color font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center ">Proyectos</h1>
        <center>
        <img width={90} height={90} className='rounded' src="https://avatars.githubusercontent.com/u/23049069?v=4"></img>
        </center>

        {
            repos.length == 0 ? 'Crgando proyectos ...' :
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                        {
                            repos.map((repo,index) => (
                                // solo pinto los 6 primeros
                                index < 6 ? 
                                    <>
                                        <li>
                                            <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                                                <h4 className='underline underline-offset-8'>{repo.name}</h4>
                                                <blockquote class="relative"><p class="text-lg tracking-tight text-slate-900">{repo.description}</p></blockquote>
                                                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                    <div>
                                                        {repo.language != null ? 
                                                            <>
                                                                <div class="font-display text-base text-slate-900">
                                                                    Skills : <span className="fourth-color text-black">{repo.language}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            ''
                                                        }
                                                        
                                                        <div class="mt-1 text-sm text-slate-500">{transformDate(repo.updated_at)}</div>
                                                    </div>
                                                    <div class="overflow-hidden rounded-full bg-slate-50">

                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    </>
                                    : ''
                                
                            ))
                        }
                    </ul>
                </div>
            </>
        }

        <a href="https://github.com/CarlosGiil97?tab=repositories" class="text-2xl no-underline hover:underline text-color-third-color m-10">Ver más  </a>
    </div>
        
    </>
    
  );
}

export default Proyectos;