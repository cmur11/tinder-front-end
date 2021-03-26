import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core'
function TinderCards() {
    // const [direction, setDirection] = useState()
    const [people,setPeople] = useState ([
        {
        name: "Elon Musk",
        url: "https://www.usnews.com/dims4/USNEWS/410224b/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg"
    },
    {
        name: "Jeff Bezos",
        url: "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
    }
])

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!")
    }

    return (
        <div className = "tinderCards">
            <div className = "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className = "swipe"
                        key= {person.name}
                        preventSwipe= {["up","down"]}
                        onSwipe= {(dir) => swiped(dir,person.name) }
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                        </TinderCard>
                ))}
                
            </div>  


                
        </div>
    )
}

export default TinderCards
