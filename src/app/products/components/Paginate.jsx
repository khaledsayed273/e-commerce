"use client"
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRouter, useSearchParams } from 'next/navigation'

function Paginate({ data, page, handlePageClick, category }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page")
    const [pageForCategory, setPageForCategory] = useState(currentPage - 1 >= 0 ? currentPage - 1 : 0)
    const handlePageClickForCategory = (event) => {
        setPageForCategory(event.selected);
        const params = new URLSearchParams()
        params.set("page", event.selected + 1)
        router.push(`${category}?${params.toString()}`)
    }
    return (
        <ReactPaginate
            forcePage={page >= 0 ? page : pageForCategory}
            breakLabel=".."
            nextLabel=" >"
            onPageChange={handlePageClick || handlePageClickForCategory}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(data.total / 20)}
            previousLabel="< "
            renderOnZeroPageCount={null}
            activeClassName={`active`}
        />
    )
}

export default React.memo(Paginate) 
