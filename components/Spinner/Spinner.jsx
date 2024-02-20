import  {PropagateLoader} from 'react-spinners'

export const Spinner = () => {
  return (
    <div className='flexCenter size-full'>
      <PropagateLoader color='pink' width={15} height={25} speedMultiplier={1.25}/>
    </div>
  )
}