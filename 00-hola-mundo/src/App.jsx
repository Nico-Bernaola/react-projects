import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elondo Musko',
        isFollowing: false
    },
    {
        userName: 'zuckero',
        name: 'Marconi Zuckerbergo',
        isFollowing: true
    },
    {
        userName: 'ronaldonazario',
        name: 'Ronaldo Luiz de Lima',
        isFollowing: false
    }
]

export function App () {
    return(
        <section className="App">
            {
                users.map(({ userName, name, isFollowing}) =>{
                    return(
                        <TwitterFollowCard
                        key={userName}
                         userName={userName}
                         initialIsFollowing={isFollowing}>
                            {name}
                         </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}