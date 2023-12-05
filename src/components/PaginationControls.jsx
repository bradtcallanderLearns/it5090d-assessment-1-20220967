import "./PaginationControls.css";

const PaginationControls = () => {
  return (
    <div className="pagination-container">
      <button className="pagination-button">&laquo;</button>
      <button className="pagination-button">1</button>
      <button className="pagination-button">2</button>
      <button className="pagination-button">3</button>
      <button className="pagination-button">4</button>
      <button className="pagination-button">5</button>
      <button className="pagination-button">&raquo;</button>
    </div>
  );
};

export default PaginationControls;
