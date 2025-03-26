import React from "react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import { BadgeIndianRupee, X } from "lucide-react";
import economy from "@/assets/finance.jpg";
import { useState } from "react";
import { Plus } from "lucide-react";
import { CoinsIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import calc from "@/assets/calc.jpg";
import { expenses } from "@/constants/data";
function Finance() {
  const [accountname, setaccountname] = useState("");
  const [type, settype] = useState("");
  const [balance, setbalance] = useState(0);
  const [isDefault, setisDefault] = useState("");
  const [status, setstatus] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [updatedAt, setupdatedAt] = useState("");
  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [category, setcategory] = useState("");
  const [receiptUrl, setreceiptUrl] = useState("");
  const [isRecurring, setisRecurring] = useState("");
  const [recurringInterval, setrecurringInterval] = useState("");
  const [nextRecurringDate, setnextRecurringDate] = useState("");
  const [lastProcessed, setlastProcessed] = useState("");
  const [accountId, setaccountId] = useState("");
  const [monthlybudget, setmonthlybudget] = useState(0);
  const user = [
    {
      name: "State Bank of India",
      type: "saving",
      balance: 0,
      isDefault: "No",
      status: "active",
      createdAt: "10/10/20",
      updatedAt: "10/10/23",
    },
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
    // {
    //   type: "Income",
    //   amount: 0,
    //   description: "None",
    //   date: "10/12/20",
    //   category: "travel",
    //   isRecurring: "No",
    //   recurringInterval: "2days",
    //   nextRecurringDate: "10/12/20",
    //   lastProcessed: "11/12/20",
    //   account: "SBI",
    //   status: "active",
    //   createdAt: "10/10/20",
    //   updatedAt: "10/10/23",
    // },
    // {
    //   type: "Income",
    //   amount: 0,
    //   description: "None",
    //   date: "10/12/20",
    //   category: "travel",
    //   isRecurring: "No",
    //   recurringInterval: "2days",
    //   nextRecurringDate: "10/12/20",
    //   lastProcessed: "11/12/20",
    //   account: "SBI",
    //   status: "active",
    //   createdAt: "10/10/20",
    //   updatedAt: "10/10/23",
    // },
    // {
    //   type: "Income",
    //   amount: 0,
    //   description: "None",
    //   date: "10/12/20",
    //   category: "travel",
    //   isRecurring: "No",
    //   recurringInterval: "2days",
    //   nextRecurringDate: "10/12/20",
    //   lastProcessed: "11/12/20",
    //   account: "SBI",
    //   status: "active",
    //   createdAt: "10/10/20",
    //   updatedAt: "10/10/23",
    // },
  ];
  const inputRef = useRef(null);
  const handlefileupload = () => {
    inputRef.current.click();
  };
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);
  return (
    <div>
      <Header></Header>
      {active1 ? (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed mt-20 bg-black/50">
          <form
            action=""
            className="rounded-md h-fit w-fit bg-white shadow-md shadow-white/40"
          >
            <div className="">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-center text-accent  text-xl mt-2 ml-4">
                  Logo.
                </h3>
                <X
                  className="mt-2 mr-4"
                  onClick={() => {
                    active1 ? setactive1(false) : setactive1(true);
                  }}
                ></X>
              </div>
              <p className="font-semibold text-center text-accent pb-2 text-lg">
                Fill the given form ...
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  p-2  w-fit ">
              <div className="flex flex-col mb-3 w-full">
                <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                  Account name:
                </label>
                <input
                  type="text"
                  value={accountname}
                  onChange={(e) => setaccountname(e.target.value)}
                  required
                  className="border-2 border-secondarydiv p-2 rounded-md w-full bg-white text-accent"
                />
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Type:
                  </label>
                  <select
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select type
                    </option>
                    <option value="saving" className="text-secondary bg-black">
                      Saving
                    </option>
                    <option value="current" className="text-secondary bg-black">
                      Current
                    </option>
                    <option value="fixed" className="text-secondary bg-black">
                      Fixed
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Balance:
                  </label>
                  <input
                    type="number"
                    value={balance}
                    onChange={(e) => setbalance(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Default account:
                  </label>
                  <select
                    value={isDefault}
                    onChange={(e) => setisDefault(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select options
                    </option>
                    <option value={true} className="text-secondary bg-black">
                      Yes
                    </option>
                    <option value={false} className="text-secondary bg-black">
                      No
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Status:
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select status
                    </option>
                    <option value="Active" className="text-secondary bg-black">
                      Active
                    </option>
                    <option
                      value="Inactive"
                      className="text-secondary bg-black"
                    >
                      Inactive
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 [];text-accent">
                    Created at:
                  </label>
                  <input
                    type="date"
                    value={createdAt}
                    onChange={(e) => setcreatedAt(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Updated at:
                  </label>
                  <input
                    type="date"
                    value={updatedAt}
                    onChange={(e) => setupdatedAt(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 mb-2 p-3 bg-accent text-destructive font-semibold rounded-md w-full  transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {active2 ? (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed mt-20 bg-black/50">
          <form
            action=""
            className="rounded-md w-fit bg-white shadow-md shadow-white/40 h-[40rem] overflow-y-auto custom-scrollbar overflow-x-hidden"
          >
            <div className="">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-center text-accent  text-xl mt-2 ml-4">
                  Logo.
                </h3>
                <X
                  className="mt-2 mr-4"
                  onClick={() => {
                    active2 ? setactive2(false) : setactive2(true);
                  }}
                ></X>
              </div>
              <p className="font-semibold text-center text-accent pb-2 text-lg">
                Fill the given form ...
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  p-2  w-fit ">
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Type:
                  </label>
                  <select
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select type
                    </option>
                    <option value="income" className="text-secondary bg-black">
                      Income
                    </option>
                    <option value="expense" className="text-secondary bg-black">
                      Expense
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Amount:
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                  Description:
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  required
                  className="border-2 border-secondary p-2 rounded-md  bg-white text-accent w-full"
                />
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Date:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Category:
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select category
                    </option>
                    {expenses.map((expense, index) => (
                      <option
                        key={index}
                        value={expense}
                        className="text-secondary bg-black"
                      >
                        {expense}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Periodic expenses:
                  </label>
                  <select
                    value={isRecurring}
                    onChange={(e) => setisRecurring(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select options
                    </option>
                    <option value={true} className="text-secondary bg-black">
                      Yes
                    </option>
                    <option value={false} className="text-secondary bg-black">
                      No
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Status:
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select status
                    </option>
                    <option
                      value="completed"
                      className="text-secondary bg-black"
                    >
                      Completed
                    </option>
                    <option value="pending" className="text-secondary bg-black">
                      Pending
                    </option>
                  </select>
                </div>
              </div>
              {isRecurring ? (
                <div className="flex flex-row gap-x-2 w-fit">
                  <div className="flex flex-col mb-3">
                    <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                      Interval of reoccuring:
                    </label>
                    <select
                      value={recurringInterval}
                      onChange={(e) => setrecurringInterval(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    >
                      <option value="" className="text-secondary bg-black">
                        Select options
                      </option>
                      <option value="daily" className="text-secondary bg-black">
                        Daily
                      </option>
                      <option
                        value="weekly"
                        className="text-secondary bg-black"
                      >
                        Weekly
                      </option>
                      <option
                        value="monthly"
                        className="text-secondary bg-black"
                      >
                        Monthly
                      </option>
                      <option
                        value="yearly"
                        className="text-secondary bg-black"
                      >
                        Yearly
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col mb-3">
                    <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                      Next recurring date:
                    </label>
                    <input
                      type="date"
                      value={nextRecurringDate}
                      onChange={(e) => setnextRecurringDate(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col mb-3 w-full">
                <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                  Last processed:
                </label>
                <input
                  type="date"
                  value={lastProcessed}
                  onChange={(e) => setlastProcessed(e.target.value)}
                  required
                  className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                />
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Account:
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  >
                    <option value="" className="text-secondary bg-black">
                      Select status
                    </option>
                    {user.map((account, index) => (
                      <option
                        key={index}
                        value={account.accountname}
                        className="text-secondary bg-black"
                      >
                        {user.accountname}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Updated at:
                  </label>
                  <input
                    type="date"
                    value={updatedAt}
                    onChange={(e) => setupdatedAt(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Created at:
                  </label>
                  <input
                    type="date"
                    value={createdAt}
                    onChange={(e) => setcreatedAt(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Updated at:
                  </label>
                  <input
                    type="date"
                    value={updatedAt}
                    onChange={(e) => setupdatedAt(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 mb-2 p-3 bg-accent text-destructive font-semibold rounded-md w-full  transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="bg-black/95 w-full min-h-screen pt-20">
        <div className="flex flex-col justify-center relative">
          <img
            src={economy}
            alt="hero"
            className="w-screen object-cover h-[55vh]"
          />
          <div className="absolute flex flex-col w-full h-full inset-0 bg-gradient-to-t from-black to-black/40 justify-center pl-4 items-center md:items-start">
            <div className="flex flex-col justify-center items-start w-fit">
              <div className="flex flex-col items-start  mt-2 pl-4 justify-center mb-2">
                <h1 className="text-4xl w-fit  text-white font-bold font-custom">
                  ACCOUNT DETAILS
                </h1>
                <hr class="border-none h-1 bg-secondary shadow-md shadow-blue-400/20 w-72" />
                <p className="text-white mt-2 w-[20rem] font-poppins">
                  You can add one or multiple accounts and check previously
                  added accounts.
                </p>
                <button
                  className="flex justify-center items-center text-white gap-2 p-2 rounded-sm hover:no-underline border-2 border-orange-500 hover:bg-orange-500 bg-black/10 w-80 mt-2"
                  onClick={() => {
                    active1 ? setactive1(false) : setactive1(true);
                  }}
                >
                  <Plus />
                  <p className="text-base ">Add Account</p>
                </button>
              </div>
              {user.length > 0 ? (
                <div className="flex justify-start items-start w-full max-w-screen p-2 rounded-md">
                  <div className="flex justify-start items-start  bg-white/20 w-[28rem] md:w-[35rem] p-2 lg:w-[60rem] rounded-md">
                    <Carousel className="flex justify-center items-start  ml-12 w-[20rem] md:w-[25rem] lg:w-[50rem]">
                      <CarouselContent>
                        {user.map((account, index) => (
                          <CarouselItem
                            key={index}
                            className="md:basis-1/1 lg:basis-1/2 "
                          >
                            <div className="p-1">
                              <div className="flex flex-col bg-black rounded-sm mt-2 border border-secondary h-fit w-auto md:w-96">
                                <div className="flex justify-center items-center gap-2 p-2">
                                  <CoinsIcon className="stroke-destructive" />
                                  <p className="rounded-t-sm  p-1 text-xl font-semibold text-destructive">
                                    Account
                                  </p>
                                </div>

                                <p className="pl-4 font-semibold text-destructive">
                                  {account.name}
                                </p>
                                <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Type :{" "}
                                    </span>
                                    {account.type}
                                  </p>

                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Balance :{" "}
                                    </span>
                                    {account.balance}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Default :{" "}
                                    </span>
                                    {account.isDefault}
                                  </p>

                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Status :{" "}
                                    </span>
                                    {account.status}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Created at :{" "}
                                    </span>
                                    {account.createdAt}
                                  </p>

                                  <p className="text-destructive">
                                    <span className="font-semibold text-secondary">
                                      Updated at :{" "}
                                    </span>
                                    {account.updatedAt}
                                  </p>
                                </div>
                                <div className="flex justify-center items-center gap-2 mb-2 mt-2">
                                  <button className="p-1 pl-2 pr-2 rounded-sm border-2 border-orange-500 bg-black/50 text-white">
                                    Edit
                                  </button>
                                  <button className="p-1 pl-2 pr-2 rounded-sm bg-white text-black">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center p-20 bg-white/10 rounded-md mt-3">
                  <BadgeIndianRupee className="h-20 w-20 stroke-white " />
                  <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                    Currently no account available...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full relative">
          <img src={calc} alt="" className="relative h-[70vh] w-full" />
          <div className="absolute flex flex-col w-full h-full  inset-0 bg-gradient-to-b from-black via-black/40 to-black justify-center md:items-end items-center">
            <div className="flex flex-col justify-center items-start w-[28rem] lg:w-[60rem]">
              <div className="flex flex-col items-start mt-2  justify-center w-fit pr-4 mb-2">
                <h1 className="text-4xl  text-white font-bold font-custom ">
                  TRANSACTION DETAILS
                </h1>
                <hr class="border-none h-1 bg-secondary shadow-md shadow-blue-400/20 w-80" />
                <p className="text-white mt-2 font-poppins w-[30rem]">
                  You can add record of your transactions ie. all your expenses
                  and incomes and check previously added transactions.
                </p>
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="flex justify-center items-center text-white gap-2 p-2 rounded-sm hover:no-underline border-2 border-orange-500 hover:bg-orange-500 bg-black/30 lg:w-80 mt-2"
                    onClick={() => {
                      active2 ? setactive2(false) : setactive2(true);
                    }}
                  >
                    <Plus />
                    <p className="text-base ">Add Transaction</p>
                  </button>
                  <p className="text-white mt-2 font-semibold"> OR </p>
                  <div onClick={handlefileupload}>
                    <form action="">
                      <input
                        type="file"
                        ref={inputRef}
                        className="hidden"
                      ></input>
                    </form>
                    <button className="flex justify-center items-center text-white gap-2 p-2 rounded-sm hover:no-underline border-2 border-orange-500 hover:bg-orange-500 bg-black/30 lg:w-80 mt-2">
                      <Plus />
                      <p className="text-base ">Upload File</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {transactions.length > 0 ? (
              <div className="flex justify-center items-center w-fit max-w-screen p-2 rounded-md">
                <div className="flex justify-center items-center  bg-black/50 w-[28rem] md:w-[35rem] p-2 lg:w-[60rem] rounded-md">
                  <Carousel className="flex justify-center w-[20rem] md:w-[25rem] lg:w-[50rem]">
                    <CarouselContent>
                      {transactions.map((transaction, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/1 lg:basis-1/2 "
                        >
                          <div className="p-1">
                            <div className="flex flex-col bg-black rounded-sm mt-2 border border-secondary h-fit w-auto md:w-96">
                              <div className="flex justify-center items-center gap-2 p-2">
                                <CoinsIcon className="stroke-destructive" />
                                <p className="rounded-t-sm  p-1 text-xl font-semibold text-destructive">
                                  Transactions
                                </p>
                              </div>

                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Type :{" "}
                                  </span>
                                  {transaction.type}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    amount :{" "}
                                  </span>
                                  {transaction.amount}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Date :{" "}
                                  </span>
                                  {transaction.date}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Category :{" "}
                                  </span>
                                  {transaction.category}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Periodic :{" "}
                                  </span>
                                  {transaction.isRecurring}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Recurring intervel :{" "}
                                  </span>
                                  {transaction.recurringInterval}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Next recurring date :{" "}
                                  </span>
                                  {transaction.nextRecurringDate}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Last processed :{" "}
                                  </span>
                                  {transaction.lastProcessed}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Account :{" "}
                                  </span>
                                  {transaction.account}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Status :{" "}
                                  </span>
                                  {transaction.status}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 place-content-start pl-4">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Created at :{" "}
                                  </span>
                                  {transaction.createdAt}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Updated at :{" "}
                                  </span>
                                  {transaction.updatedAt}
                                </p>
                              </div>
                              <div className="flex justify-center items-center gap-2 mb-2 mt-2">
                                <button className="p-1 pl-2 pr-2 rounded-sm border-2 border-orange-500 bg-black/50 text-white">
                                  Edit
                                </button>
                                <button className="p-1 pl-2 pr-2 rounded-sm bg-white text-black">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="stroke-slate-100" />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            ) : (
              <div className="flex w-[28rem] lg:w-[60rem] items-start justify-start">
                <div className="flex flex-col justify-center items-center bg-black/50 rounded-md mt-3 p-8">
                  <BadgeIndianRupee className="h-20 w-20 stroke-white " />
                  <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                    Currently no transaction record available...
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <img
            src={economy}
            alt=""
            className="inset-0 bg-gradient-to-b from-black to-transparent h-[40vh] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/40 flex items-center justify-center md:justify-start">
            <div className="flex flex-col items-start  mt-2 pl-8 justify-center mb-2">
              <h1 className="text-4xl w-fit  text-white font-bold font-custom">
                MONTHLY BUDGETS
              </h1>
              <hr class="border-none h-1 bg-secondary shadow-md shadow-blue-400/20 w-72" />
              <p className="text-white mt-2 w-[25rem] font-poppins">
                You can keep hold of your monthly budget and monitor your
                budget.You will get notification when when your budget came to
                80% of the allocated amount.
              </p>
              <input
                type="range"
                max={10000}
                min={0}
                step={50}
                className="mt-4 w-96 bg-white/15 rounded-lg appearance-none cursor-pointer h-2 dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none 
           [&::-webkit-slider-thumb]:bg-gray-500
           [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
           [&::-webkit-slider-thumb]:rounded-full 
           [&::-webkit-slider-thumb]:hover:bg-gray-600
           [&::-webkit-slider-thumb]:active:bg-blue-700 
           [&::-moz-range-track]:bg-gray-300 
           [&::-moz-range-track]:h-2 
           [&::-moz-range-thumb]:bg-transparent
           [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 
           [&::-moz-range-thumb]:rounded-full"
                value={monthlybudget}
                onChange={(e) => {
                  setmonthlybudget(e.target.value);
                }}
              ></input>
              <p className="text-destructive font-poppins text-lg mt-3">
                Monthly Budget : {monthlybudget}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Finance;
