import "./ColumnFooter.module.css";

function ColumnFooter( {title, row1, row2, row3} ) {
    return <>
    <div className="col">
            <ul>
              <li className="col-main-item"><a href="#"> {title}</a></li>
              <li><a href="#"> {row1} </a></li>
              <li><a href="#"> {row2} </a></li>
              <li><a href="#"> {row3} </a></li>
            </ul>
          </div>
    </>
}

export default ColumnFooter;