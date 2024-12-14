import React from 'react'
import style from "../style.module.css"
export default function UpcomingSession() {

    let sessions = [
        {
            title:"DOM & Firebase",
            link:"https://meet.google.com/znf-ecop-ouk",
            instructor:"Utkarsh Verma",
            date:"December 14",
            timing:"07:38",
            day:"Saturday"
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
        <div className={style.heading}>Upcoming Sessionss </div>
    {
        sessions.map((session,index)=>{
            return(
                <div key={index} className={style.sessionCard}>
                    <span>{session.title}</span>
                    <span>{"Instructor: "+session.instructor}</span>
                    <span>{session.link == false?`Link Will Be Available at ${session.timing} on ${session.day + " "+session.date}`:<><a style={{color:"#469732"}} href={session.link}>Join Now</a></>}</span>
                </div>
            )
        })
    }
    </>
  )
}
