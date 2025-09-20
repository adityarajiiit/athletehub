import React from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
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
function Finance() {
  const [monthlybudget, setmonthlybudget] = useState(0);
  const account = [
    // {
    //   name: "State Bank of India",
    //   type: "saving",
    //   balance: 0,
    //   isDefault: "No",
    //   status: "active",
    //   createdAt: "10/10/20",
    //   updatedAt: "10/10/23",
    // },
    // {
    //   name: "State Bank of India",
    //   type: "saving",
    //   balance: 0,
    //   isDefault: "No",
    //   status: "active",
    //   createdAt: "10/10/20",
    //   updatedAt: "10/10/23",
    // },
  ];
  const transactions = [
    {
      type: "Income",
      amount: 0,
      description: "None",
      date: "10/12/20",
      category: "travel",
      isRecurring: "No",
      recurringInterval: "2days",
      nextRecurringDate: "10/12/20",
      lastProcessed: "11/12/20",
      account: "SBI",
      status: "active",
      createdAt: "10/10/20",
      updatedAt: "10/10/23",
    },
  ];
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
                <td>{accountData.isDefault}</td>
                <td className="font-semibold text-secondary">Status </td>
                <td>{accountData.status}</td>
              </tr>
              <tr>
                <td>{3}</td>
                <td className="font-semibold text-secondary">
                  Created at
                </td>{" "}
                <td>{accountData.createdAt}</td>
                <td className="font-semibold text-secondary">Updated at</td>
                <td>{accountData.updatedAt}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="btn px-6 btn-neutral"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Edit
            </button>
            <button className="btn btn-error">Delete</button>
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
                <td>{transaction.date}</td>
                <td className="font-semibold text-secondary">Category </td>
                <td>{transaction.category}</td>
              </tr>
              <tr>
                <td>3.</td>
                <td className="font-semibold text-secondary">Periodic </td>
                <td>{transaction.isRecurring}</td>
                <td className="font-semibold text-secondary">
                  Recurring intervel
                </td>
                <td>{transaction.recurringInterval}</td>
              </tr>
              <tr>
                <td>4.</td>{" "}
                <td className="font-semibold text-secondary">
                  Next recurring date
                </td>
                <td>{transaction.nextRecurringDate}</td>
                <td className="font-semibold text-secondary">Last processed</td>
                <td>{transaction.lastProcessed}</td>
              </tr>
              <tr>
                <td>5.</td>{" "}
                <td className="font-semibold text-secondary">Account </td>
                <td>{transaction.account}</td>
                <td className="font-semibold text-secondary">Status </td>
                <td>{transaction.status}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="btn px-6 btn-neutral"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Edit
            </button>
            <button className="btn btn-error">Delete</button>
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
              <TransactionForm />
            </div>
          </dialog>
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
  return (
    <div>
      <Header></Header>
      <div className="w-full h-full min-h-screen pt-24">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col justify-center relative">
            <img
              src={economy}
              alt="hero"
              className="w-screen object-cover h-[76vh] md:h-[82vh]"
            />
            <div className="absolute flex flex-col w-full h-full inset-0 bg-gradient-to-t xl:bg-gradient-to-l from-base-300 to-base-300/40 justify-start p-4 items-start">
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
                    className="btn btn-info bg-primary text-info-content border-0 rounded-full pl-1 mt-4 "
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
          <div className="relative">
            <img
              src={calc}
              alt=""
              className="w-screen object-cover h-[76vh] md:h-[82vh]"
            />
            <div className="absolute flex flex-col w-full h-full  inset-0 bg-gradient-to-b xl:bg-gradient-to-l from-base-300 via-base-300/70 to-base-300 justify-start items-end xl:items-start p-4">
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
                  <div className="flex gap-4 justify-center items-center">
                    <button
                      className="btn btn-info bg-primary text-info-content border-0 rounded-full pl-1 mt-4 "
                      onClick={() =>
                        document
                          .getElementById("my_transaction_form")
                          .showModal()
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
                    <div onClick={handlefileupload}>
                      <form action="">
                        <input
                          type="file"
                          ref={inputRef}
                          className="hidden"
                        ></input>
                      </form>
                      <button className="btn btn-info bg-primary text-info-content border-0 rounded-full pl-1.5 mt-4 flex">
                        <IoCloudUpload className="fill-primary size-9 rounded-full bg-info-content p-2" />
                        <p>Upload File</p>
                      </button>
                    </div>
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
        <div className="relative">
          <img src={economy} alt="" className=" h-[50vh] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base-300 to-base-300/40 flex items-center justify-center md:justify-start">
            <div className="flex flex-col items-start  mt-2 pl-8 justify-center mb-2">
              <div className="flex flex-col justify-center items-start  gap-6 mt-4">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-4xl font-bold font-poppins  border-r-secondary uppercase">
                    MONTHLY <br className="lg:hidden" />
                    BUDGETS
                  </h1>
                  <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                </div>
                <p className="max-w-xl ">
                  You can keep hold of your monthly budget and monitor your
                  budget.You will get notification when when your budget came to
                  80% of the allocated amount.
                </p>
              </div>
              <input
                type="range"
                max={10000}
                min={0}
                step={50}
                className="range range-info mt-4 w-80"
                value={monthlybudget}
                onChange={(e) => {
                  setmonthlybudget(e.target.value);
                }}
              ></input>
              <p className="text-secondary font-semibold text-base font-poppins mt-4">
                Monthly Budget
              </p>
              <span className="text-2xl font-semibold">₹{monthlybudget}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Finance;
