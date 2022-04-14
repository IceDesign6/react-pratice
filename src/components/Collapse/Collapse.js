import './Collapse.css'

function Collapse(props) {
  return (
    <div className="Collapse">
      {
        props.menu.map(item => {
          return <div className={ `collapse-panel ${ item.id === props.nowCategory && 'active' }`}  key={item.label + item.id} onClick={ () => props.changeCategory(item.id) }>{ item.label }</div>
        })
      }
    </div>
  );
}

export default Collapse;
