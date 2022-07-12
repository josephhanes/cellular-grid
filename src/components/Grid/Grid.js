import './Grid.css';

/* 
    Grid Type : grid, inline-grid
*/

function Grid(props) {
    return (
        <div>
            <h1>Cellular Grid ({props?.children?.length || 0})</h1>
            <div className="cg-test">
                {props.children}
            </div>
        </div>
    )
}


export default Grid;