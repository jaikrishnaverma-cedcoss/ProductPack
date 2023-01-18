import React from 'react'

const ListProducts = ({ table }: any) => {
    return (
        <div style={{ width: '100%' }} className='d-flex flex-wrap justify-content-center  p-4 '>
            <table className="table table-striped table-hover border" >
                <thead>
                    <tr>
                    {(table.length > 0)?<th>id</th>:<th>No Data Available</th>}
                        {
                            (table.length > 0) && Object.keys(table[0]).map(x => <th scope="col">{x}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        (table.length > 0) && table.map((row: any,i:number) => {
                            return <tr><td>{i}</td>{

                                Object.values(row).map((val: any) => <td>{val}</td>)
                            }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ListProducts