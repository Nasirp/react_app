import { ServiceData } from '../ServiceData'

 
const Course = () => {
    
  return (
    <div className='flex  pl-16 bg-blue-500 '>
      {
        ServiceData.map(data =>{
            return(
            <div >
                <img src={data.BookImg} alt='loading'/>
            </div>
            )
        })
      }
    </div>
  )
}

export default Course
