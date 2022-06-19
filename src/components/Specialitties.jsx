import styles from "../styles/Specialitties.module.scss"
import {ReactComponent as Hezlnut} from "../assets/nuts/main.svg"
import {ReactComponent as Almond} from "../assets/nuts/almond-13.svg"
import {ReactComponent as Pistachio} from "../assets/nuts/saffron.svg"


const FoodCard= ({foodIcon,ctg,description})=>{
    return(
        <div className={styles.cardContainer}> 
        <div className={styles.iconContainer}>
            {foodIcon}
        </div>
        <h2>{ctg}</h2>
        <p>{description}</p>
        </div>
    )
}
const Specialitties = () => {
  return (
    <div>
        {/* title */}
        <div>
            <h1>Specialities</h1>
            <h2>Our Special cuisine</h2>
        </div>
        {/* Cards */}
    <div>
        <FoodCard 
        foodIcon={<Hezlnut/>}
        ctg="almond"
        description="The almond is a deciduous tree, growing 4–10 m (13–33 ft) in height, with a trunk of up to 30 cm (12 in) in diameter. The young twigs are green at first, becoming purplish where exposed to sunlight, then grey in their second year. The leaves are 8–13 cm (3–5 in) long,[8] with a serrated margin and a 2.5 cm (1 in) petiole. The flowers are white to pale pink, 3–5 cm (1–2 in) diameter with five petals,"
        />
            <FoodCard 
        foodIcon={<Almond/>}
        ctg="almond"
        description="The almond is a deciduous tree, growing 4–10 m (13–33 ft) in height, with a trunk of up to 30 cm (12 in) in diameter. The young twigs are green at first, becoming purplish where exposed to sunlight, then grey in their second year. The leaves are 8–13 cm (3–5 in) long,[8] with a serrated margin and a 2.5 cm (1 in) petiole. The flowers are white to pale pink, 3–5 cm (1–2 in) diameter with five petals,"
        />
            <FoodCard 
        foodIcon={<Pistachio/>}
        ctg="almond"
        description="The almond is a deciduous tree, growing 4–10 m (13–33 ft) in height, with a trunk of up to 30 cm (12 in) in diameter. The young twigs are green at first, becoming purplish where exposed to sunlight, then grey in their second year. The leaves are 8–13 cm (3–5 in) long,[8] with a serrated margin and a 2.5 cm (1 in) petiole. The flowers are white to pale pink, 3–5 cm (1–2 in) diameter with five petals,"
        />
            
    </div>
    </div>
  )
}

export default Specialitties