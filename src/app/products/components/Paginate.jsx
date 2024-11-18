"use client"
import React from 'react'
import ReactPaginate from 'react-paginate'
import style from "./paginate.module.css"

function Paginate({ data, page, handlePageClick }) {
    return (
        <ReactPaginate
            forcePage={page}
            breakLabel=".."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(data.total / 20)}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName={`${style.pagination}`}
            activeClassName={`${style.active}`}
        />
    )
}

export default React.memo(Paginate) 
