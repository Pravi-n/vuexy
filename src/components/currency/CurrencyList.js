// ** React Imports
import { Fragment, useState } from 'react'

// ** Table Columns
import { data1 } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
//import InputBasic from './AddCurrency'
import HorizontalForm from './AddCurrency'
import EditForm from './EditCurrency'

const CurrencyList = () => {

    //console.log(currencyColumns)
    console.log(data1)
  // ** State
//   const data = [
//     {
//       name: "US Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Canadian Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Euro",
//       symbol: "€"
//     }
// ]
// console.log(data)

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const handleEditClick = (item) => {
      if (!addClicked) { 
        setEditClicked(!editClicked)
        setEditData(item)
      }
    //console.log(item)
  }

  const handleAddClick = () => {
      if (!editClicked) {
        setAddClicked(!addClicked)
      }
  }

  const handleCancelOfEdit = () => {
    console.log("in Cancel")
    setEditClicked(!editClicked)
}
const handleCancelOfAdd = () => {
    console.log("in Cancel")
    setAddClicked(!addClicked)
}

  const currencyColumns = [
    {
      name: 'Currency Name',
      selector: 'name',
      sortable: true,
      minWidth: '250px'
    },
    {
      name: 'Symbol',
      selector: 'symbol',
      sortable: false,
      minWidth: '250px'
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pr-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>Details</span>
                </DropdownItem>
                <DropdownItem>
                  <Archive size={15} />
                  <span className='align-middle ml-50'>Archive</span>
                </DropdownItem>
                <DropdownItem>
                  <Trash size={15} />
                  <span className='align-middle ml-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Edit size={15} onClick={ e => { 
                                                e.preventDefault() 
                                                handleEditClick(row) 
                                                } } />
          </div>
        )
      }
    }
  ]
  
  // ** Function to handle filter
  // const handleFilter = e => {
  //   const value = e.target.value
  //   let updatedData = []
  //   setSearchValue(value)

  //   const status = {
  //     1: { title: 'Current', color: 'light-primary' },
  //     2: { title: 'Professional', color: 'light-success' },
  //     3: { title: 'Rejected', color: 'light-danger' },
  //     4: { title: 'Resigned', color: 'light-warning' },
  //     5: { title: 'Applied', color: 'light-info' }
  //   }

  //   if (value.length) {
  //     updatedData = data.filter(item => {
  //       const startsWith =
  //         item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.post.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.email.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.age.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
  //         status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

  //       const includes =
  //         item.full_name.toLowerCase().includes(value.toLowerCase()) ||
  //         item.post.toLowerCase().includes(value.toLowerCase()) ||
  //         item.email.toLowerCase().includes(value.toLowerCase()) ||
  //         item.age.toLowerCase().includes(value.toLowerCase()) ||
  //         item.salary.toLowerCase().includes(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().includes(value.toLowerCase()) ||
  //         status[item.status].title.toLowerCase().includes(value.toLowerCase())

  //       if (startsWith) {
  //         return startsWith
  //       } else if (!startsWith && includes) {
  //         return includes
  //       } else return null
  //     })
  //     setFilteredData(updatedData)
  //     setSearchValue(value)
  //   }
  // }

  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Prev' /> */}
        </span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Next' /> */}
        </span>
      </Fragment>
    )
  }

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
    />
  )

  return (
      <Fragment>
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Currency List</CardTitle>
        <Button className='ml-2' color='primary' onClick={handleAddClick}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Currency</span>
            </Button>
      </CardHeader>
      {addClicked ? <HorizontalForm handleCancel={handleCancelOfAdd} /> : null}
      {editClicked ? <EditForm data ={editData} handleCancel={handleCancelOfEdit} /> : null}
      {/* <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
          <Label className='mr-1' for='search-input-1'>
            <FormattedMessage id='Search' />
          </Label>
          <Input
            className='dataTable-filter mb-50'
            type='text'
            bsSize='sm'
            id='search-input-1'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row> */}
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={currencyColumns}
        className='react-dataTable'
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={data1}
      />
      {/* <CardFooter>
        <CardText className='mb-0'>
          <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span>
        </CardText>
      </CardFooter> */}
    </Card>
    </Fragment>
  )
}

export default CurrencyList
