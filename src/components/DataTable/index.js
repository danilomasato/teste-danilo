import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.document}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Banco
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Banco</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell align="right">Agencia</TableCell>
                    <TableCell align="right">Conta</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.bank.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.bankName}
                      </TableCell>
                      <TableCell>{historyRow.code}</TableCell>
                      <TableCell align="right">{historyRow.agency}</TableCell>
                      <TableCell align="right">{historyRow.account}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    document: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    bank: PropTypes.arrayOf(
      PropTypes.shape({
        bankName: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        agency: PropTypes.string.isRequired,
        account: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const DataTable = React.forwardRef(
  (
    {
      ...props
    }
  ) => {

    function createData(name, document) {
      return {
        name,
        document,
        bank: [
          {
            bankName: '2020-01-05',
            code: '11091700',
            agency: '',
            account: ''
          }
        ],
      };
    }

    // const rows = [
    //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
    // ];

    const [rows, setRows] = useState([]);

    //first load
    useEffect(() => {
      if (props.data.length > 0) {
          console.log('props.data============>', props.data)
          // setBankdataList(props.data);
          // setColumns(props.data.filter(item => (
          //   { field: item.id, headerName: item.id, width: 70 },
          //   { field: item.name, headerName: item.name, width: 130 }
          // )))
          setRows(props.data.filter(item => (
            // { field: item.id, headerName: item.id, width: 70 },
            // { field: item.name, headerName: item.name, width: 130 }
            createData(item.id, item.name, item.bank)
          )))
      }
    }, [props.data])

    
    // console.log('data===========>', props.data)

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left"> ID </TableCell>
              <TableCell align="left"> Nome </TableCell>
              <TableCell align="left"> documento </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
)

export default DataTable;