"use client"
import { useEffect, useRef, useState } from "react";
import style from "./about.module.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
export default function Project() {


  const searchQuery = useRef("ui")

  // Toggeling search bar
    const [toggleSearch, setSearch] = useState(false)
    const showSearch = ()=>setSearch(true)

    const [projects, setProjects] = useState([])
    const [filteredProject, setFiltereProject] = useState([])
    const [warning, setWarning] = useState("Not Able to Fetch Project")

    
    

//  filter result according to search
    const handleSearch = ()=>{
      if(projects.length>0){
        const newQuery = searchQuery.current.value
      
        
        const newProjectList = projects.filter((project)=>{
          return project?.tags?.toLowerCase().includes(newQuery.toLowerCase())
        })
        setFiltereProject(newProjectList)
        if(!newProjectList.length>0){
          setWarning("No Project with name "+newQuery)
        }
        
      }
      if(!searchQuery.current.value){
        setFiltereProject([...projects])
      }
      console.log(filteredProject)

    }

    // Fetching project from API
    const fetchProkects = async()=>{
      try{
        const data = await fetch("/api")
        const json = await data.json()
        setProjects(json)
        setFiltereProject(json)
      }catch(error){
        console.log(error)
      }
    }

  useEffect(()=>{
    fetchProkects()
  },[])


  
  return (
    <>
    <form onSubmit={(e)=>{e.preventDefault()}} action="">
      <div className={style.about}>
        <nav className={style.abtNav}>
          <i class="ri-equalizer-line"></i>
          {toggleSearch?<motion.div  initial={{width:"0px"}} animate={{width:"200px"}} className="searchBar">
            <input ref={searchQuery}  placeholder="to do app" type="text" />
          </motion.div>:null}
          {!toggleSearch? 
          <i onClick={showSearch} class="ri-search-line"></i>
          :
          <button onClick={handleSearch} type="submit">
            Search
            </button>
          }
        </nav>
      </div>
    </form>
<div className="flex">

<div className={style.projectContainer}>

    {filteredProject.length > 0? 
    
    filteredProject.map((project) => {
      return (
      <ProjectCard key={project.id} image={project.image} title={project.title} description={project.description} deployedLink={project.deployedLink} />
      )
    })
    :warning
  }

  </div>

  </div>
    </>
  );
}
