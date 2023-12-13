// import { Icon } from "@iconify/react";
import { useEffect, useState, useCallback } from "react";
// library
// import plusFill from "@iconify/icons-eva/plus-fill";
import { useNavigate } from "react-router-dom";
// import toastr from "toastr";
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// components
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
import ListHead from "../../components/Common/ListHead";
import ListSearchbar from "../../components/Common/ListSearchbar";
import Modal from "../../components/Modal/Modal";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Loader } from "../../components";
// redux
import { useDispatch } from "react-redux";
import {
  // actionCategory,
  actionSelectedCategory,
} from "../../store/slices/category.slice";
// utils
// import { deleteMethod, getMethod, postMethod } from "../../utils/api";
// import { fDate } from "../../utils/formatTime";
// constants
import { ROUTES_URL } from "../../constants/url.constant";
// import { API_STATUS_CODE, MESSAGE } from "../../constants/content.constant";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "type", label: "Type", alignRight: false },
  { id: "txn_id", label: "Txn ID", alignRight: false },
  { id: "merchant", label: "Merchant", alignRight: false },
  { id: "card_name", label: "Card", alignRight: false },
  { id: "Amount", label: "Amount", alignRight: true },
  { id: "request_time", label: "Request Time", alignRight: true },
  { id: "action", label: "Action", alignRight: true },
];

// ----------------------------------------------------------------------

export default function RefundRequest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refundRequestData, setRefundRequestData] = useState([]);
  const [page] = useState(0);

  const [rowsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const handleClose = () => setShowModal(false);

  const fetchTransactions = async () => {
    try {
      // setLoading(true);
      // const response = await getMethod(API_URL.GET_CATEGORY, false, false);
      // // console.log("fetchTransactions", response);
      // if (response?.status === API_STATUS_CODE.SUCCESS) {
      //   setRefundRequestData(response?.data?.data);
      //   dispatch(actionCategory(response?.data?.data));
      // }
      setLoading(false);
      setRefundRequestData([]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteCategory = async () => {
    try {
      setShowModal(false);
      // setLoading(true);
      // const response = await deleteMethod(
      //   API_URL.DELETE_CATEGORY + "/" + selected?.id,
      //   false,
      //   false
      // );
      // if (response?.status === API_STATUS_CODE.SUCCESS) {

      //   setSelected({});
      //   toastr.success(MESSAGE.CATEGORY_DELETE_SUCCESS);
      //   fetchTransactions();
      // }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCreateCategory = (row) => {
    navigate(ROUTES_URL.ADD_CATEGORY, {
      state: { id: row?._id },
    });
    if (row) {
      dispatch(actionSelectedCategory(row));
    }
  };

  const handleConfirmDelete = (row) => {
    setShowModal(true);
    // setSelected({ id: row?._id, imageId: row?.images?.id });
  };
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchStr(e.target.value);
  };
  const handleSearch = useCallback(
    (rows) => {
      try {
        if (rows && rows.length > 0) {
          const columns = rows[0] && Object.keys(rows[0]);

          return rows.filter((row) => {
            return columns.some((column) => {
              return (
                row?.[column]
                  ?.toString()
                  .toLowerCase()
                  .indexOf(searchStr.toLowerCase()) > -1
              );
            });
          });
        } else {
          console.log("else");
        }
      } catch (error) {}
    },
    [searchStr]
  );
  const pageTitle = "Refund Request | CashOnex Admin";
  return (
    <Page title={pageTitle}>
      <Container>
        <Stack mb={2}>
          <Typography variant="h4" gutterBottom>
            Refund Request
          </Typography>
          <Breadcrumb />
        </Stack>

        <Card>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ListSearchbar
              placeholder="Search"
              handleSearchChange={handleSearchChange}
            />
            <Stack mr={3} direction="row" spacing={2}>
              {/* <Button
                variant="contained"
                startIcon={<Icon icon={plusFill} />}
                onClick={() => handleCreateCategory()}
              >
                New Category
              </Button> */}
            </Stack>
          </Stack>

          <Scrollbar>
            {loading && <Loader />}
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  headCheckBox={false}
                  headLabel={TABLE_HEAD}
                  rowCount={refundRequestData?.length}
                  numSelected={0}
                />
                <TableBody>
                  {refundRequestData &&
                    refundRequestData?.length > 0 &&
                    handleSearch(refundRequestData)
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map((row, index) => {
                        const isItemSelected = false;

                        return (
                          <TableRow
                            hover
                            key={row?._id + index}
                            tabIndex={-1}
                            role="checkbox"
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell align="left">{row?.type}</TableCell>
                            <TableCell align="left">{row?.txn_id}</TableCell>
                            <TableCell align="left">{row?.merchant}</TableCell>
                            <TableCell align="left">{row?.card_name}</TableCell>
                            <TableCell align="left">{row?.amount}</TableCell>
                            <TableCell align="left">
                              {row?.request_time}
                            </TableCell>

                            <TableCell align="left">
                              <span
                                className="text-edit pointer"
                                onClick={() => handleCreateCategory(row)}
                              >
                                Edit
                              </span>{" "}
                              <span
                                style={{ marginLeft: "5px" }}
                                className="text-danger pointer"
                                onClick={() => handleConfirmDelete(row)}
                              >
                                Delete
                              </span>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
      <Modal
        isOpen={showModal}
        closeModal={handleClose}
        title="Are You Sure Want To Delete Category?"
        content={<ConfirmationModal />}
        dialogProps={{ fullWidth: true }}
        titleStyle={{ textAlign: "center", marginTop: 2 }}
        aStyle={{ justifyContent: "center", marginBottom: 2 }}
        action={
          <>
            <Button onClick={handleClose} disabled={loading}>
              Cancel
            </Button>

            <LoadingButton
              size="large"
              type="button"
              loading={loading}
              variant="contained"
              color="error"
              onClick={() => deleteCategory()}
            >
              Delete
            </LoadingButton>
          </>
        }
      />
    </Page>
  );
}
