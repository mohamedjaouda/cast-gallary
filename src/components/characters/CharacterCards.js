import CharacterCard from "./CharacterCard"
import Spinner from "../ui/Spinner"

const characterCards = ({items, isLoading}) =>{
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            
            { items.map((item)=>(
                <CharacterCard key={item.char_id} item={item}/> 
            ))

            }
        </section>
    )
}


export default characterCards
