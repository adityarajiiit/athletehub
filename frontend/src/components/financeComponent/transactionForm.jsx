import React, { useEffect } from "react";
import { useState } from "react";
import { expenses } from "@/constants/data";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import IsSubmitting from "../ui/isSubmitting";
function TransactionForm() {
  const [formData, setFormData] = useState({
    type: "",
    status: "",
    amount: 0,
    description: "",
    date: "",
    category: "",
    accountId: "",
  });
  const [account, setAccountData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axiosInstant.get("/finance/accounts");
        setAccountData(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };
    fetchAccounts();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstant.post(
        "/finance/transactions",
        formData,
      );
      console.log("Transaction added successfully:", response.data);
      toast.success("Transaction added successfully");
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="" className="form-control w-full" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-x-2 w-full">
        <div className="form-control w-full">
          <label className="label">Type:</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            className="input input-bordered w-full"
          >
            <option value="">Select type</option>
            <option value="income">Debit</option>
            <option value="expense">Credit</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">Amount:</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="form-control  w-full">
        <label className="label">Description:</label>
        <textarea
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
          className="textarea textarea-bordered h-24 w-full"
        />
      </div>
      <div className="flex flex-row gap-x-2 w-full">
        <div className="form-control w-full">
          <label className="label">Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">Category:</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
            className="input input-bordered w-full"
          >
            <option value="">Select category</option>
            {expenses.map((expense, index) => (
              <option key={index} value={formData.expense}>
                {expense}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 w-full">
        <div className="form-control w-full">
          <label className="label">Status:</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            required
            className="input input-bordered w-full"
          >
            <option value="">Select status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label">Account:</label>
        <select
          value={formData.accountId}
          onChange={(e) =>
            setFormData({ ...formData, accountId: e.target.value })
          }
          required
          className="input input-bordered w-full"
        >
          <option value="">Select status</option>
          {account.map((account, index) => (
            <option key={index} value={account.id}>
              {account.name}({account.accountNumber})
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-info mt-4">
        {loading && <IsSubmitting />} Submit
      </button>
    </form>
  );
}

export default TransactionForm;
