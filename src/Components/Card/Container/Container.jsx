import Card from "../Card/Card";
import './Container.css'
import logo from './../../assets/react.svg'
/*function Container () {
    return(
        <>
        <div className="container">
            container
        </div>
        </>
    )
}*/
const Container =() =>{
    const json = [{
        id :1,
        title : "ali" ,
        job : "front" ,
        visible : true ,
        photo : logo
    },
    {
        id :2,
        title : "ali" ,
        job : "front" ,
        button:"click" ,
        visible : true ,
        photo : logo
    },
    {
        id :3,
        title : "ali" ,
        job : "front" ,
        visible : false ,
        photo : logo
    }]
    return(
        <>
            <div className="container">
               {/* <Card title= "df" job="back" button="click" visible={true} photo={logo}/>
                <Card title= "dtg" job="front" visible={false}/>
                <Card title= "dtr" job="back" visible={false}/>
    <Card title= "dvv" job="back" visible={false}/>*/}
                {json.map((element)=>{
                    return(
                        <div key={element.id}>
                        <Card title={element.title} job={element.job} visible={element.visible} button={element.button} photo={element.photo}/>
                        </div>
                    )
                })}
            </div>
        </>
    ) 
}
export default Container;