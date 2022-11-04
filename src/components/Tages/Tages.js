import './Tages.css'

const Tages = (props) => {
    const tags= props.tags
  return (

    <div className='tagDiv'>{
        tags.map((tag, index)=>{
            return <p className="tagP" key={`logement tag--${tag}--${index}`}>{tag}</p>
        })
    }</div>
 )
}

export default Tages