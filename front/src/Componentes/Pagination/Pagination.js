import React from 'react';
import stl from "../Pagination/Pagination.module.css"


export default function Paging({mascotasPerPage, allPets, actualPage, currentPage}) {

    const pageNumbers = []
    const maxpage = Math.ceil(allPets/mascotasPerPage)

    for (let i = 0; i < maxpage; i++) {
        pageNumbers.push(i + 1)
    }

    const limitedPages = pageNumbers.slice(0, 1)
    

    return (
        <nav>
            <div className={stl.pagination}>
              <button className={stl.buttonpaging} onClick={() => actualPage(pageNumbers.at(0))}>
              ⬅⬅
              </button>
            <button
                className={stl.buttonpaging}
                disabled={currentPage <= 1 ? true : false}
                onClick={() => actualPage(currentPage - 1)}
              >
                ⬅
              </button>
                {pageNumbers && pageNumbers.map(num => {
                    return (
                
                        <div className={stl.pagenr} key={num}>
                         
                            <button className={stl.buttonpaging} onClick={() => actualPage(num)}>{num}</button>
                            
                        </div>

                    )
                })}
                <button
                className={stl.buttonpaging}
                disabled={currentPage === pageNumbers.at(-1) ? true : false}
                onClick={() => actualPage(currentPage + 1)}
              >
                ⮕
              </button>
              <button className={stl.buttonpaging} onClick={() => actualPage(pageNumbers.at(-1))}>
              ⮕⮕</button>
            </div>  

        </nav>        
    )
}