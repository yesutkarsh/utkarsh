import React from 'react'
import style from "../style.module.css"
export default function UpcomingSession() {

    let sessions = [
        {
            title:"Node Js & Postman",
            link:false,
            instructor:"Utkarsh Verma",
            date:"December 15",
            timing:"02:00",
            day:"Sunday"
        },
        {
            title:"Stack DSA",
            link:false,
            instructor:"no info available",
            date:"December 15",
            timing:"02:00",
            day:"Sunday",
        }
    ]
  return (
    <>
        <div className={style.heading}>Today’s Schedule </div>
    {
        sessions.map((session)=>{
            return(
                <div className={style.sessionCard}>
                    <span>{session.title}</span>
                    <span>{"Instructor: "+session.instructor}</span>
                    <span>{session.link == false?`Link Will Be Available at ${session.timing} on ${session.day + " "+session.date}`:"Join Now"}</span>
                </div>
            )
        })
    }
    </>
  )
}
