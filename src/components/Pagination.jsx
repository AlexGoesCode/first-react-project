// CustomPagination.jsx
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function CustomPagination({ currentPage, totalPages, onPageChange }) {
    let items = [];
    
    // Calculate the first and last page numbers based on the current page
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // Add "Previous" page button
    items.push(
        <Pagination.Prev key="prev" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
    );

    // Add page number buttons
    for (let number = startPage; number <= endPage; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    // Add "Next" page button
    items.push(
        <Pagination.Next key="next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
    );

    return (
        <Pagination>{items}</Pagination>
    );
}

export default CustomPagination;
