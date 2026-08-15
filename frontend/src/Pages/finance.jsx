import React, { useEffect } from "react";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import economy from "@/assets/finance.jpg";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import AccountForm from "@/components/financeComponent/accountForm";
import { CgClose } from "react-icons/cg";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import { useRef } from "react";
import calc from "@/assets/calc.jpg";
import { IoCloudUpload } from "react-icons/io5";
import no_data from "/no-data.png";
import TransactionForm from "@/components/financeComponent/transactionForm";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import IsSubmitting from "@/components/ui/isSubmitting";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import KineticDotsLoader from "@/components/ui/loading";
function Finance() {
  const [account, setAccountData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setPageLoading(true);
      try {
        const [accountData, transactionData] = await Promise.all([
          axiosInstant
            .get("/finance/accounts")
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching accounts:", error);
              return [];
            }),
          axiosInstant
            .get("/finance/transactions")
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching transactions:", error);
              return [];
            }),
        ]);

        if (cancelled) return;

        setAccountData(accountData);
        setTransactions(transactionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!cancelled) {
          setPageLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!file) {
        toast.error("Please select a file to upload");
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "athleteHub_preset");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dss7k4wej/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      const response = await axiosInstant.post(
        "/finance/transactions/scan-bill",
        {
          imageUrl: data.secure_url,
        },
      );
      console.log(response.data);
      navigate(0);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };
  const inputRef = useRef(null);
  const handlefileupload = () => {
    inputRef.current.click();
  };
  const cardsData = [
    ...account.map((accountData, index) => ({
      category: "Account Details",
      title: accountData.name,
      src: economy,
      content: (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-sm">
                <th></th>
                <th>Parameter Type</th>
                <th>value</th>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{1}</td>
                <td className="font-semibold text-secondary">Type </td>
                <td>{accountData.type}</td>
                <td className="font-semibold text-secondary">Balance </td>
                <td>{accountData.balance}</td>
              </tr>
              <tr>
                <td>{2}</td>
                <td className="font-semibold text-secondary">Default </td>
                <td>{accountData.isDefault ? "Yes" : "No"}</td>
                <td className="font-semibold text-secondary">Status </td>
                <td>{accountData.status}</td>
              </tr>
              <tr>
                <td>{3}</td>
                <td className="font-semibold text-secondary">Type </td>
                <td>{accountData.type}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="btn btn-error"
              onClick={async (e) => {
                e.preventDefault();
                setLoading(true);
                try {
                  axiosInstant.delete(`/finance/accounts/${accountData.id}`);
                  toast.success("Account deleted successfully");
                  navigate(0);
                } catch (error) {
                  console.error("Error deleting account:", error);
                  toast.error("Failed to delete account");
                } finally {
                  setLoading(false);
                }
              }}
            >
              {loading && <IsSubmitting />}Delete
            </button>
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <CgClose className="size-5" />
                </button>
              </form>
              <p className="text-sm font-inter font-medium">
                Press ESC key or click on ✕ button to close
              </p>
              <AccountForm />
            </div>
          </dialog>
        </div>
      ),
    })),
  ];
  const TranscationData = [
    ...transactions.map((transaction, index) => ({
      category: "Transaction Details",
      title: transaction.type,
      src: calc,
      content: (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-sm">
                <th></th>
                <th>Parameter Type</th>
                <th>value</th>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td className="font-semibold text-secondary">Type </td>
                <td>{transaction.type}</td>
                <td className="font-semibold text-secondary">amount </td>
                <td>{transaction.amount}</td>
              </tr>
              <tr>
                <td>2.</td>{" "}
                <td className="font-semibold text-secondary">Date </td>
                <td>{new Date(transaction.date).toDateString()}</td>
                <td className="font-semibold text-secondary">Category </td>
                <td>{transaction.category}</td>
              </tr>

              <tr>
                <td>3.</td>{" "}
                <td className="font-semibold text-secondary">Account </td>
                <td>{transaction?.account?.name || "Not provided"}</td>
                <td className="font-semibold text-secondary">Status </td>
                <td>{transaction.status}</td>
              </tr>
              <tr>
                <td>3.</td>{" "}
                <td className="font-semibold text-secondary">Description </td>
                <td>{transaction.description || "Not provided"}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-2 mt-4">
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      ),
    })),
  ];
  const cards = cardsData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));
  const Transactioncards = TranscationData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));

  if (pageLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 items-center justify-center">
          <KineticDotsLoader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="w-full h-full min-h-screen pt-24">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col w-full h-full justify-start p-4 items-start">
              <div className="flex flex-col justify-center items-start  w-full">
                <div className="flex flex-col items-start  mt-2 pl-4 justify-center mb-2">
                  <div className="flex flex-col justify-center items-start  gap-6 mt-4">
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-4xl font-bold font-poppins  border-r-secondary uppercase">
                        account <br className="lg:hidden" />
                        details
                      </h1>
                      <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                    </div>
                    <p className="max-w-lg ">
                      You can easily add one or multiple accounts, manage them
                      all in one place, and also revisit or check details of the
                      accounts you’ve previously added.
                    </p>
                  </div>
                  <button
                    className="btn btn-info text-info-content border-0 rounded-full pl-1 mt-4 "
                    onClick={() =>
                      document.getElementById("my_account_data").showModal()
                    }
                  >
                    <IoIosAddCircle className="size-10" />
                    Add Accounts
                  </button>
                  <dialog id="my_account_data" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          <CgClose className="size-5" />
                        </button>
                      </form>
                      <p className="text-sm font-inter font-medium">
                        Press ESC key or click on ✕ button to close
                      </p>
                      <AccountForm />
                    </div>
                  </dialog>
                </div>
                {account.length > 0 ? (
                  <Carousel items={cards} />
                ) : (
                  <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                    <img src={no_data} alt="no data" className="size-32" />

                    <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                      No data found
                    </h1>
                    <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                      Currently no account available...
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-start items-end xl:items-start p-4">
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex flex-col justify-center items-start  gap-6 mt-4">
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-4xl font-bold font-poppins  border-r-secondary uppercase">
                      TRANSACTION <br className="lg:hidden" />
                      DETAILS
                    </h1>
                    <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                  </div>
                  <p className="max-w-lg ">
                    You can add record of your transactions ie. all your
                    expenses and incomes and check previously added
                    transactions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <button
                    className="btn btn-info  text-info-content border-0 rounded-full pl-1 mt-4 "
                    onClick={() =>
                      document.getElementById("my_transaction_form").showModal()
                    }
                  >
                    <IoIosAddCircle className="size-10" />
                    Add Transaction
                  </button>
                  <dialog id="my_transaction_form" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          <CgClose className="size-5" />
                        </button>
                      </form>
                      <p className="text-sm font-inter font-medium">
                        Press ESC key or click on ✕ button to close
                      </p>
                      <TransactionForm />
                    </div>
                  </dialog>
                  <form
                    onSubmit={handleFileSubmit}
                    className="flex items-center mt-4"
                  >
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    ></input>
                    <button
                      type="button"
                      className="btn btn-info  text-info-content border-0 rounded-full pl-1.5 flex"
                      onClick={handlefileupload}
                    >
                      <IoCloudUpload className="fill-primary-foreground size-9 rounded-full bg-info-content p-2" />
                      <span className="max-w-24 line-clamp-1">
                        {file ? file.name : "Upload File"}
                      </span>
                    </button>
                    <button
                      type="submit"
                      disabled={!file || loading}
                      className="btn btn-info relative right-2  rounded-full p-3 min-h-9 h-10 disabled:bg-gray-400 disabled:text-gray-700"
                    >
                      {loading ? (
                        <IsSubmitting />
                      ) : (
                        <FaArrowRight className="size-4" />
                      )}
                    </button>
                  </form>
                </div>
                {transactions.length == 0 && (
                  <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                    <img src={no_data} alt="no data" className="size-32" />

                    <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                      No data found
                    </h1>
                    <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                      Currently no transaction available...
                    </h1>
                  </div>
                )}
              </div>
            </div>
            {transactions.length > 0 && <Carousel items={Transactioncards} />}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Finance;
