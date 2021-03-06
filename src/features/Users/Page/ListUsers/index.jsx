import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import UsersDataService from '../../../../services/users.service';
import { getAllUser } from '../../UserSlice';
import checkLogin from './../../../../utilities/checkLogin';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columns } from '../../../../constant';

function ListUsers() {
    const dispatch = useDispatch();
    const history = useHistory();
    const list = useSelector((state) => state.users);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getUser = async () => {
        const respone = await UsersDataService.getAll();

        dispatch(getAllUser(respone.data.content));
    };

    useEffect(() => {
        const check = checkLogin();

        if (!check) {
            history.push('/dangnhap');
        }

        getUser();
    }, []);

    return (
        <main className='p-users'>
            <section className='c-mv'>
                <h1 className='c-mv__ttl'>Danh Sách Người Dùng</h1>
            </section>

            <div className='p-users__wrap'>
                <div className='l-container'>
                    <div className='c-btn1'>
                        <Link to='/themnguoidung' className='c-btn1__txt'>
                            Thêm Người Dùng
                        </Link>
                    </div>

                    <div className='c-table1'>
                        <TableContainer sx={{ maxHeight: 500 }}>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row, index) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role='checkbox'
                                                    tabIndex={-1}
                                                    key={index}
                                                >
                                                    {columns.map((column) => {
                                                        const value =
                                                            row[column.id];
                                                        return (
                                                            <TableCell
                                                                key={column.id}
                                                                align={
                                                                    column.align
                                                                }
                                                            >
                                                                {column.format &&
                                                                typeof value ===
                                                                    'number'
                                                                    ? column.format(
                                                                          value
                                                                      )
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component='div'
                            count={list.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ListUsers;
