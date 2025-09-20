import React from "react";
import { useState } from "react";
import { expenses } from "@/constants/data";

function TransactionForm() {
  const [formData, setFormData] = useState({
    type: "",
    status: "",
    amount: 0,
    description: "",
    date: "",
    category: "",
    receiptUrl: "",
    isRecurring: "",
    recurringInterval: "",
    nextRecurringDate: "",
    lastProcessed: "",
    accountId: "",
  });
  const account = [
    {
      name: "State Bank of India",
      type: "saving",
      balance: 0,
      isDefault: "No",
      status: "active",
      createdAt: "10/10/20",
      updatedAt: "10/10/23",
    },
    {
      name: "State Bank of India",
      type: "saving",
      balance: 0,
      isDefault: "No",
      status: "active",
      createdAt: "10/10/20",
      updatedAt: "10/10/23",
    },
  ];
  return (
    <form action="" className="form-control w-full">
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
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">Amount:</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, ammount: e.target.value })
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
          <label className="label">Periodic expenses:</label>
          <select
            value={formData.isRecurring}
            onChange={(e) =>
              setFormData({ ...formData, isRecurring: e.target.value })
            }
            required
            className="input input-bordered w-full"
          >
            <option value="">Select options</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

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
      {formData.isRecurring ? (
        <div className="flex flex-row gap-x-2 w-full">
          <div className="form-control w-full">
            <label className="label">Interval of reoccuring:</label>
            <select
              value={formData.recurringInterval}
              onChange={(e) =>
                setFormData({ ...formData, recurringInterval: e.target.value })
              }
              required
              className="input input-bordered w-full"
            >
              <option value="">Select options</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">Next recurring date:</label>
            <input
              type="date"
              value={formData.nextRecurringDate}
              onChange={(e) =>
                setFormData({ ...formData, nextRecurringDate: e.target.value })
              }
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="form-control w-full">
        <label className="label">Last processed:</label>
        <input
          type="date"
          value={formData.lastProcessed}
          onChange={(e) =>
            setFormData({ ...formData, lastProcessed: e.target.value })
          }
          required
          className="input input-bordered w-full"
        />
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
            <option key={index} value={account.name}>
              {account.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-info mt-4">
        Submit
      </button>
    </form>
  );
}

export default TransactionForm;
